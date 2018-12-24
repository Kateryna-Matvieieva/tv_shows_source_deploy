import {    
      START_REQUEST,
      COUNT_OF_PAGES, FILTER,
      GET_ERROR,
      GET_RESPONSE,
      GET_OPTIONAL_DATA,
      GET_GENRES
  } from '../constants/constants';



export function rootReducer (state, action) {
          switch(action.type) {
            case GET_GENRES:
              let genres = {};
              action.payload.forEach(item => genres[item.id] = item.name)
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
              let imgs = action.payload.results.map(item => {
                  let obj = new Image ();
                  obj.src = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'+item.poster_path;
                  return obj;
              });
              return {
                ...state,
                data: action.payload.results,
                currentPage: action.payload.page,
                imgs,
                loading: false
              };
            case COUNT_OF_PAGES:
              return {
                ...state,
                ...action.payload
              };
            case FILTER:
              return {
                ...state,
                ...action.payload
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
  