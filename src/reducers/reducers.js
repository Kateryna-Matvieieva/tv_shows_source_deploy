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



export function rootReducer (state, action) {
          switch(action.type) {
            case GET_GENRES:
              let genres = {};
              action.payload.forEach(item => {genres[item.id] = item.name})
              return {
                ...state,
                genres
              }
            case START_REQUEST:
              return {
                ...state,
                loading: action.payload,
                error: null
              };
            case GET_RESPONSE:
              let imgs = action.payload.map(item => {
                  let obj = new Image ();
                  obj.src = item.poster_path ? 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'+item.poster_path : 'download.png';
                  return obj;
              });
              return {
                ...state,
                data: action.payload,
                imgs,
                loading: false
              };
            case GET_PAGE:
              return {
                ...state,
                currentPage: action.payload
              };
            case GET_URL:
              return {
                ...state,
                url: action.payload
              };
            case GET_COUNT_OF_PAGES:
              return {
                ...state,
                countOfPages: action.payload
              };
            case GET_FILTER:
              return {
                ...state,
                filter: action.payload.filter.replace(/_/g, ' '),
                name: action.payload.name,
                query: ''
              };
            case GET_QUERY:
              return {
                ...state,
                query: decodeURIComponent(action.payload),
                filter: '',
              };
            case GET_ERROR:
              return {
                ...state,
                loading: false,
                error: action.payload,
                data: []
              };
        
            default:
              return state;
          }
        }
  