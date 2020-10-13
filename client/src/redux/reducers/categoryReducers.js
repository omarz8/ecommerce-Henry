import {GET_CATEGORY, CLEAR_ITEMS} from '../actions/actionTypes';

const initialState={
    category:[]
}

function categoryReducers(state=initialState, action) {
    switch(action.type) {
        case GET_CATEGORY:
            return {
                ...state,
                category: action.category.map(cat=>({
                    name: cat.name,
                    id: cat.id,
                    description: cat.description
                }))
            }
        case CLEAR_ITEMS: {
            return {
                ...state,
                category: []
            }
        }   
            default:
                return state;
    }
}

export default categoryReducers;