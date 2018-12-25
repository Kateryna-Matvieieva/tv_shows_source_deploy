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
      console.log('Starting');
      let obj = Object.assign({page: counter, query: prevQuery}, arguments[0]);
      if (obj.prev && obj.page > 1) // replace with ternary prev && page
          obj.page -=1;
      if (obj.next)
           obj.page +=1;
      if (((obj.type || prevFilter) !== prevFilter) || (obj.query !== obj.prevQuery)) {
          obj.page = 1;
      }
      (obj.query && !obj.type) ?
          obj.url = `${src}/search/tv?query=${obj.query}&page=${obj.page}${key}` : obj.url = `${src}/tv/${obj.type?obj.type:prevFilter?prevFilter:'popular'}?page=${ obj.page }${key}`;
    
      return wrapped.apply(this, [obj]);
  
    }
  }
function fetchData({type, page, query, url}) {
    return async (dispatch) => {
        dispatch(isLoading(true));
        let response = await fetch(url);
        if (response.status !== 200) {
            dispatch(error(true));
        } else {
            let data = await response.json();
            if (((type || prevFilter) !== prevFilter) || query) {
                dispatch(pages(data));
                dispatch(filter(data));
            }
            dispatch(loadData(data));
            prevFilter = type;
            counter = page;
            type? prevQuery = undefined: prevQuery = query;
            
        }
    };
}
export const fetchTableData = fetchTableDataDecorator(fetchData);
// export function fetchTableData({type, prev, page = counter, next, query=prevQuery}) {
//     let url;
//     if (prev && page > 1) // replace with ternary prev && page
//         --page;
//     if (next && page)
//         ++page;
//     if (((type || prevFilter) !== prevFilter) || (query !== prevQuery)) {
//         page = 1;
//     }
//     if (query && !type) {
//         url = `https://api.themoviedb.org/3/search/tv?query=${query}&page=${page}&api_key=696d475c5616f9c15214877fbdf5bd6e&language=en-US`
//     }
//     return async (dispatch) => {
//         dispatch(isLoading(true));
//         let response = await fetch(url || `https://api.themoviedb.org/3/tv/${type?type:prevFilter?prevFilter:'popular'}?page=${ page }&api_key=696d475c5616f9c15214877fbdf5bd6e&language=en-US`);
//         if (response.status !== 200) {
//             dispatch(error(true));
//         } else {
//             let data = await response.json();
//             if (((type || prevFilter) !== prevFilter) || query) {
//                 dispatch(pages(data));
//                 dispatch(filter(data));
//             }
//             prevFilter = type;
//             counter = page;
//             type? prevQuery = undefined: prevQuery = query;
//             dispatch(loadData(data));
//         }
//     };
// }

