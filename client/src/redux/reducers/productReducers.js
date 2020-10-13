import { GET_PRODUCTS } from "../actions/actionTypes";

const initialState={
    products: []
}


function productReducers(state=initialState, action){
    console.log(action.products)
    switch (action.type) {
        case GET_PRODUCTS:
        return {
            ...state,
            products: action.products.map((prod)=> ({
                id: prod.id,
                name: prod.name,    
                description: prod.description,
                price: prod.price,
                stock: prod.stock,
                image: prod.image,
                enter_date: prod.enter_date
            }))
        }
        default:
      return state
    }
}

export default productReducers;