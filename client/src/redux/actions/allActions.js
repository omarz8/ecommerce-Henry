import {
  getProducts,
  getOneProduct,
  postProduct,
  putProduct,
  deleteProduct,
} from "./productActions";
import { getCategory, cleanCategory } from "./categoryActions";

const allActions = {
  getProducts,
  getOneProduct,
  postProduct,
  putProduct,
  deleteProduct,
  getCategory,
  cleanCategory,
  postCategory,
  putCategory,
  deleteCategory,
  // getCategories
};

export default allActions;
