import axios from 'axios';
import * as actionTypes from './actionTypes';

const url='http://localhost:3001';

export const getCategory =()=>(dispatch)=>{

    axios.get(url + '/category/')
        .then((res)=>{
            dispatch({
                type: actionTypes.GET_CATEGORY,
                category: res.data.category
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

export const cleanCategory = () => (dispatch)=>{
    return {
        type: actionTypes.CLEAR_ITEMS,
    }
}

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

export const postCategory =(id, action, values)=>(dispatch)=>{
    axios
    .post(url+`/category/${id ? id : ""}`, action === "delete" ? null : values)
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
    .put(url+ `/category/${id}`)
    .then((res)=>{
        dispatch({
            type: actionTypes.DELETE_CATEGORY,
            category: res.data
        })
    }).catch((err)=> {
        console.log(err)
    }); 
};