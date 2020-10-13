import {getProducts} from './productActions';
import {getCategory, cleanCategory, putCategory, postCategory} from './categoryActions';


const allActions={
    getCategory,
    putCategory,
    postCategory,
    getProducts,
    cleanCategory
}

export default allActions;