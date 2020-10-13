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

export const postProduct=(id, action, values)=>(dispatch)=>{
  return axios
    .post(url+`/products/${id ? id : ""}`, action === "delete" ? null : values)
    .then(res=>{
       dispatch({
        type: actionTypes.POST_PRODUCT,
        productDetail: res.data
      })      
    })
    .catch(err=>console.log(err))
}

export const putProduct=()=>(dispatch)=>{
  axios
    .put()
    .then(res=>{
      dispatch({
        type: actionTypes.PUT_PRODUCT,
        productDetail: res.data
      })
    })
}
