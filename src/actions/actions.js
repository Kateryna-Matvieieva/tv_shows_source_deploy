import {
    START_REQUEST,
    GET_COUNT_OF_PAGES,
    GET_PAGE,
    GET_URL,
    GET_FILTER,
    GET_QUERY,
    GET_ERROR,
    GET_RESPONSE,
    GET_GENRES
} from '../constants/constants';

export const setData = ({ results }) => ({
    type: GET_RESPONSE,
    payload: results
})
export const setPage = ({ page }) => ({
    type: GET_PAGE,
    payload: page
})
export const setPages = ({ total_pages }) => ({
    type: GET_COUNT_OF_PAGES,
    payload: total_pages
})
export const setURL = (url) => ({
    type: GET_URL,
    payload: url
})
export const setGenres = ({ genres }) => ({
    type: GET_GENRES,
    payload: genres

})
export const setFilter = (filter, name) => ({
    type: GET_FILTER,
    payload: {filter, name}
})
export const setQuery = (query) => ({
    type: GET_QUERY,
    payload: query
})
export const error = (err) => ({
    type: GET_ERROR,
    payload: err
})
export const isLoading = (loading) => ({
    type: START_REQUEST,
    payload: loading
})

