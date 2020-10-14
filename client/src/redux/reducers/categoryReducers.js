import {GET_CATEGORY, CLEAR_ITEMS, PUT_CATEGORY, DELETE_CATEGORY, POST_CATEGORY } from '../actions/actionTypes';

const initialState={
    category:[]
}

function categoryReducers(state=initialState, action) {
    switch(action.type) {
        case GET_CATEGORY:
            return {
                ...state,
                category: action.category.map (cat => ({
                    name: cat.name,
                    id: cat.id,
                    description: cat.description
                }))
            }
        case CLEAR_ITEMS: 
            return {
                ...state,
                category: []
            }
         
        case PUT_CATEGORY:
            return {
                ...state, 
                category: action.category
            }  
        case DELETE_CATEGORY:
            return {
                ...state,
                category: action.category
            }

        case POST_CATEGORY:
            return {
                ...state,
                category: action.category
            }

        default:
            return state;
    }
}

export default categoryReducers;