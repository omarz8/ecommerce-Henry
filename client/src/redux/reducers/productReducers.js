import { GET_PRODUCTS, GET_PRODUCT, POST_PRODUCT, PUT_PRODUCT, DELETE_PRODUCT } from "../actions/actionTypes";

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
        case PUT_PRODUCT:
            return {
                ...state,
                product: action.productDetail
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                product: state.filter(prod => prod.id===action.productDetail.id)
            }
        default:
      return state
    }
}

export default productReducers;