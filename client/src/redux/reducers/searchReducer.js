import { SEARCH_BY_QUERY, SEARCH_ALL, SEARCH_BY_CATEGORY } from '../actions/actionTypes';

const initialState = {
    results: []
}

function searchReducers(state = initialState, action) {
    switch (action.type) {
        case SEARCH_BY_QUERY:
            return {
                ...state,
                results: action.results
            }
        case SEARCH_BY_CATEGORY:
            return {
                ...state,
                results: action.results
            }
        case SEARCH_ALL:
            return {
                ...state,
                results: action.results
            }
        default:
            return state;
    }
}

export default searchReducers;