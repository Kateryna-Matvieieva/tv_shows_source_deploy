import {
    START_REQUEST,
    COUNT_OF_PAGES,
    FILTER,
    GET_ERROR,
    GET_RESPONSE,
    GET_OPTIONAL_DATA,
    GET_GENRES
} from '../constants/constants';

export const loadData = ({ results, page }) => ({
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

