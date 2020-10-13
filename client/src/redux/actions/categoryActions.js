import axios from 'axios';
import * as actionTypes from './actionTypes';

const url='http://localhost:3001/category';

export const getCategory =()=>(dispatch)=>{

    axios.get(url)
        .then((res)=>{
            dispatch({
                type:actionTypes.GET_CATEGORY,
                category: res.data.category
            })
    
        }).catch((err)=> console.log(err))
};

export const cleanCategory = () => (dispatch)=>{
    return {
        type: actionTypes.CLEAR_ITEMS,
    }
}

export const putCategory =()=>(dispatch)=>{
    axios.put(url)
    .then((res)=>{
        dispatch({
            type: actionTypes.PUT_CATEGORY,
            category: res.data.category
        })
    }).catch((err)=> console.log(err))
};

export const postCategory =()=>(dispatch)=>{
    axios.post(url)
    .then((res)=>{
        dispatch({
            type: actionTypes.POST_CATEGORY,
            category: res.data.category
        })
    }).catch((err)=> console.log(err))
};