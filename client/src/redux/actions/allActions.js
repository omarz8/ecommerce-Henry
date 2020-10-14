import {getProducts, getOneProduct, postProduct} from './productActions';
import {getCategory, cleanCategory, putCategory, postCategory, deleteCategory} from './categoryActions';


const allActions={
    getProducts,
    getOneProduct,
    postProduct,
    getCategory,
    cleanCategory,
    postCategory,
    putCategory,
    deleteCategory
   // getCategories
    
}

export default allActions;