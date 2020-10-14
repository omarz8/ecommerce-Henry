import axios from 'axios';
import * as actionTypes from './actionTypes';

const url='http://localhost:3001';

export const getCategory =()=>(dispatch)=>{

    axios
        .get(url + '/category/')
        .then((res)=>{
            dispatch({
                type: actionTypes.GET_CATEGORY,
                category: res.data
            })
        })
        .catch((err)=> {
            console.log(err)
        });             
};

// export const getCategories =()=>(dispatch)=>{

//     axios.get(url)
//         .then((res)=>{
//             dispatch({
//                 type:actionTypes.GET_CATEGORIES,
//                 categories: res.data.categories
//             })
    
//         }).catch((err)=> console.log(err))
// };



export const putCategory =(id)=>(dispatch)=>{
    axios
    .put(url+ `/category/${id}`)
    .then((res)=>{
        dispatch({
            type: actionTypes.PUT_CATEGORY,
            category: res.data
        })
    })
    .catch((err)=>{
        console.log(err)
    }) 
};

export const postCategory =(id, values)=>(dispatch)=>{
    axios
    .post(url+`/category/${id ? id : ""}`, values)
    .then((res)=>{
        dispatch({
            type: actionTypes.POST_CATEGORY,
            category: res.data
        })
    })
    .catch((err)=> {
        console.log(err)
    }) 
};

export const deleteCategory =(id)=>(dispatch)=>{
    axios
    .delete(url+ `/category/${id}`)
    .then((res)=>{
        dispatch({
            type: actionTypes.DELETE_CATEGORY,
            category: null
        })
    }).catch((err)=> {
        console.log(err)
    }); 
};