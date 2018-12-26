import fetch from 'isomorphic-fetch';
import { loadData, pages, genres, filter, optional, error, isLoading } from './actions';
let key = `&api_key=696d475c5616f9c15214877fbdf5bd6e&language=en-US`;
let src = `https://api.themoviedb.org/3`;


export function fetchGenres() {
    return async (dispatch) => {
        let response = await fetch(`https://api.themoviedb.org/3/genre/tv/list?&api_key=696d475c5616f9c15214877fbdf5bd6e&language=en-US`);
        if (response.status !== 200) {
            dispatch(error(true));
        } else {
            let data = await response.json();
            dispatch(genres(data));
       }
    };
}


let prevFilter = 'popular';
let counter = 1;
let prevQuery;
function fetchTableDataDecorator(wrapped) {
    return function() {
      //if obj.filterType does not exist (obj.filterType || prevFilter) means that we use the same filter type and can go to any page
      // (obj.filterType || prevFilter) - if obj.filterType and prevFilter exist, return obj.filterType (- current filter type)
      //compare with prev filter type
      //if they are different, we want to see new filtered table from the first page
      // another case: exist current query that different from prev query
      //in this case we want to see new table of query data from the first page
      let obj = arguments[0];
      obj.page = obj.page ||  counter;
      obj.query = obj.query ||  prevQuery;
      if (((obj.filterType || prevFilter) !== prevFilter) || (obj.query !== prevQuery)) {
          obj.page = 1;
       }
      (obj.query && !obj.filterType) ?
          obj.url = `${src}/search/tv?query=${obj.query}&page=${obj.page}${key}` : obj.url = `${src}/tv/${obj.filterType?obj.filterType:prevFilter?prevFilter:'popular'}?page=${ obj.page }${key}`;
    
      return wrapped.apply(this, [obj]);
  
    }
  }
function fetchData({filterType, page, query, url}) {
    return async (dispatch) => {
        dispatch(isLoading(true));
        let response = await fetch(url);
        if (response.status !== 200) {
            dispatch(error(true));
        } else {
            let data = await response.json();
            if (((filterType || prevFilter) !== prevFilter) || query) {
                dispatch(pages(data));
                dispatch(filter(data));
            }
           
            prevFilter = filterType;
            counter = page;
            console.log(`1) page: ${page},filterType: ${filterType}, prevQuery: ${prevQuery}, query: ${query}`)
            filterType ? prevQuery = undefined: prevQuery = query;
            
            console.log(`2) page: ${page},filterType: ${filterType}, prevQuery: ${prevQuery}, query: ${query}`)
            dispatch(loadData(data));
        }
    };
}
export const fetchTableData = fetchTableDataDecorator(fetchData);
