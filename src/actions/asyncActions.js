import fetch from 'isomorphic-fetch';
import {
    setData,
    setPages,
    setGenres,
    error,
    isLoading
} from './actions';

export function loadGenres() {
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

export function loadData({
    page = 1,
    url
    }) {
    return async (dispatch) => {
        dispatch(isLoading(true));
        let response = await fetch(`${url}&page=${page}`);
        if (response.status !== 200) {
            dispatch(error(true));
        } else {
            let data = await response.json();
            if (data.results.length < 1) {
                dispatch(error(true));
            } else {
                dispatch(setPages(data));
                dispatch(setData(data));
            }
        }
    };
}