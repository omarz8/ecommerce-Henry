import axios from 'axios';
import apiCall from '../../redux/api';
import GET_PRODUCT from './actionTypes';
import GET_PRODUCTS from './actionTypes';
import PUT_PRODUCT from './actionTypes';
import POST_PRODUCT  from './actionTypes';
import DELETE_PRODUCT from './actionTypes';

const url = `/products/`;

export const getProducts = ()=> dispatch =>{
    return axios.get(``) 
}


export function getMovies(titulo) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=20dac387&s=${titulo}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  };