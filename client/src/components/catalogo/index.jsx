import React, { useState, useEffect } from "react";
import Category from "../categoria";
import "./catalogo.css";
import ProductCard from "../productCard/ProductCard";
import MenuButton from "./button/button.jsx";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux/actions/allActions";

const Catalogue = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.category);

  useEffect(() => {
    dispatch(allActions.getProducts(products));
    dispatch(allActions.getCategory(category));
  }, []);

  console.log(products);
  const [drop, setDrop] = useState(false);

  const toggleMenu = () => {
    setDrop(!drop);
  };

  const handleMouseDown = (e) => {
    toggleMenu();
    e.stopPropagation();
  };

  return (
    <div className="container-ppal">
      <MenuButton handleMouseDown={handleMouseDown} menuVisibility={drop} />
      <Category
        category={category}
        handleMouseDown={handleMouseDown}
        menuVisibility={drop}
      />
      <div className="container">
        <div className="cat-ppal">
          <div className="catalogo">
            {products.map((fit) => {
              return (
                <motion.div
                  className="cont"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 1, rotate: -5 }}
                >
                  <li key={fit.id}>
                    {" "}
                    <ProductCard product={fit} />{" "}
                  </li>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
