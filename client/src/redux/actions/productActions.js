import axios from "axios";
import * as actionTypes from "./actionTypes";

const url = `http://localhost:3001`;

export const getProducts = () => (dispatch) => {
  axios
    .get(url+'/products/')
    .then((res) => {
      dispatch({
        type: actionTypes.GET_PRODUCTS,
        products: res.data.products,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

 
export const getOneProduct=(id)=>(dispatch)=>{
  axios
  .get(url+`/products/`+`${id}`)
  .then((res)=>{
    dispatch({
      type: actionTypes.GET_PRODUCT,
      productDetail: res.data.products
    })
  })
  .catch(err=> console.log(err));
}


export const postProduct=()=>(dispatch)=>{
  axios
    .post(url+'/admin/product/add', {
      responseType: 'json'
    })
    .then(res=>{
      dispatch({
        type: actionTypes.POST_PRODUCT,
        productDetail: {

        }
      })
    })

}

