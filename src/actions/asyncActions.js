import fetch from 'isomorphic-fetch';
import {
    setData,
    setPages,
    setGenres,
    setFilter,
    setQuery,
    error,
    isLoading
} from './actions';
let key = `&api_key=696d475c5616f9c15214877fbdf5bd6e&language=en-US`;
let src = `https://api.themoviedb.org/3`;

export function fetchGenres() {
    return async (dispatch) => {
        let response = await fetch(`https://api.themoviedb.org/3/genre/tv/list?&api_key=696d475c5616f9c15214877fbdf5bd6e&language=en-US`);
        if (response.status !== 200) {
            dispatch(error(true));
        } else {
            let data = await response.json();
            dispatch(setGenres(data));
        }
    };
}

let prevFilter = 'popular';
let counter = 1;
let prevQuery;
let prevId;
let initial = true;

function fetchTableDataDecorator(func) {
    return function () {
        //if obj.filterType does not exist (obj.filterType || prevFilter) means that we use the same filter type and can go to any page
        // (obj.filterType || prevFilter) - if obj.filterType and prevFilter exist, return obj.filterType (- current filter type)
        //compare with prev filter type
        //if they are different, we want to see new filtered table from the first page
        // another case: exist current query that different from prev query
        //in this case we want to see new table of query data from the first page
        let obj = arguments[0];
        obj.page = obj.page || counter;
        obj.query = obj.query || prevQuery;
        obj.id = obj.id || prevId;
        if (((obj.filterType || prevFilter) !== prevFilter) || (obj.query !== prevQuery) || (obj.id !== prevId)) {
            obj.page = 1;
        }
        (obj.query && !obj.filterType) ?
        obj.url = `${src}/search/tv?query=${obj.query}&page=${obj.page}${key}`: 
        obj.id ? obj.url = `${src}/tv/${obj.id}/${obj.filterType?obj.filterType:prevFilter?prevFilter:'recommendations'}?page=${obj.page}${key}`:
        obj.url = `${src}/tv/${obj.filterType?obj.filterType:prevFilter?prevFilter:'popular'}?page=${ obj.page }${key}`;

        return func.apply(this, [obj]);
    }
}

function fetchData({
    filterType,
    page,
    query,
    url,
    id,
    name
}) {
    return async (dispatch) => {
        dispatch(isLoading(true));
        let response = await fetch(url);
        if (response.status !== 200) {
            dispatch(error(true));
        } else {
            let data = await response.json();
            if (((filterType || prevFilter) !== prevFilter) || query || initial) {
                dispatch(setPages(data));
                query ? dispatch(setQuery(query)) : dispatch(setFilter((filterType || prevFilter), name));
            }
            
            prevFilter = filterType;
            counter = page;
            filterType ? prevQuery = undefined : prevQuery = query;
            filterType === 'recommendations' || filterType === 'similar' ? prevId = id :  prevId = undefined;
            initial = false;
            dispatch(setData(data));
        }
    };
}
export const fetchTableData = fetchTableDataDecorator(fetchData);