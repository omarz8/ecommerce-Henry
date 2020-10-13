import { GET_PRODUCTS, GET_PRODUCT, POST_PRODUCT } from "../actions/actionTypes";

const initialState={
    products: [],
    productDetail: [],
}


function productReducers(state=initialState, action){
    console.log(action)
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
        case GET_PRODUCT:
            return {
                ...state,
                productDetail: action.productDetail
            }
        case POST_PRODUCT:
            return {
                ...state,
                products: action.productDetail
            }
        default:
      return state
    }
}

export default productReducers;