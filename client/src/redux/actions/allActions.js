import { getProducts, getOneProduct, editProduct } from "./productActions";
import { getCategory, putCategory, postCategory, deleteCategory } from "./categoryActions";

const allActions = {
  getProducts,
  getOneProduct,
  editProduct,
  getCategory,
  putCategory,
  postCategory,
  deleteCategory,
};

export default allActions;
