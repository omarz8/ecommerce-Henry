import { getProducts, getOneProduct, editProduct } from "./productActions";
import { getCategory, cleanCategory } from "./categoryActions";

const allActions = {
  getProducts,
  getOneProduct,
  editProduct,
  getCategory,
  cleanCategory,
};

export default allActions;
