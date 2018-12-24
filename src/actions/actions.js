import {
    START_REQUEST,
    COUNT_OF_PAGES,
    FILTER,
    GET_ERROR,
    GET_RESPONSE,
    GET_OPTIONAL_DATA,
    GET_GENRES
} from '../constants/constants';
import fetch from 'isomorphic-fetch';

export const response = ({ results, page }) => ({
    type: GET_RESPONSE,
    payload: {
        results,
        page
    }
})
export const pages = ({ total_pages }) => ({
    type: COUNT_OF_PAGES,
    payload: {
        countOfPages: total_pages
    }
})
export const genres = ({ genres }) => ({
    type: GET_GENRES,
    payload: genres

})
export const filter = (filter) => ({
    type: FILTER,
    payload: filter
})
export const optional= (index, page = 1) => ({
    type: GET_OPTIONAL_DATA,
})

export const error = (err) => ({
    type: GET_ERROR,
    payload: err
})
export const isLoading = (loading) => ({
    type: START_REQUEST,
    payload: loading
})
// export function errorAfterFiveSeconds() {
//   return (dispatch) => {
//       setTimeout(() => {
//           dispatch(error());
//       }, 5000);
//   };
// }
export function fetchGenres() {
    return (dispatch) => {
        fetch(`https://api.themoviedb.org/3/genre/tv/list?&api_key=696d475c5616f9c15214877fbdf5bd6e&language=en-US`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                dispatch(genres(res));
            })
            .catch(() => dispatch(error(true)));
    };
}

let prevFilter = 'popular';
let counter = 1;
export function fetchTableData({type = prevFilter, prev, page = counter, next, query}) {
    console.log(arguments);
    let url;
    if (prev && page > 1)
        --page;
    if (next && page)
        ++page;
    if (type !== prevFilter)
        page = 1;
    if (query)
        url = `https://api.themoviedb.org/3/search?query=${query}&api_key=696d475c5616f9c15214877fbdf5bd6e&language=en-US`
    return (dispatch) => {
        dispatch(isLoading(true));
        fetch(url || `https://api.themoviedb.org/3/tv/${type}?page=${ page }&api_key=696d475c5616f9c15214877fbdf5bd6e&language=en-US`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                if (type !== prevFilter) {
                    dispatch(pages(res));
                    dispatch(filter(res))
                }
                dispatch(response(res));
                prevFilter = type;
                counter = page;

            })
            .catch(() => dispatch(error(true)));
    };
}