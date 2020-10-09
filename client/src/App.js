


import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Navbar from './components/navbar'
import ProductDetail from "./components/productDetail";
import Catalogue from "./components/Catalogo";
import FormProduct from "./components/productForm";
import FormCategory from './components/categories';


//Pages
import SearchPage from './pages/SearchPage';

function App() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  /* ===== Axios Product =====*/

  // let productId = null;

  useEffect(() => {
    axios
      .get(`http://localhost:3001/products/`)
      .then((res) => {
        return setProduct(res.data.products);
      })
      .catch((err) => {
        return;
      });
    axios
      .get(`http://localhost:3001/category/`)
      .then((res) => {
        console.log(res);
        return setCategory(res.data.category);
      })
      .catch((err) => {
        return;
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/products" exact>
          <Catalogue props={product} category={category} />
        </Route>
        <Route exact path="/product/:id">
          <ProductDetail props={product} />
        </Route>
        <Route
          exact
          path="/admin/product"
          render={() => (
            <FormProduct
              action="post"
              icon="success"
              message="Se agregó producto:"
            />
          )}
        />
        <Route
          exact path='/admin/category'
          render={() =>
            <FormCategory
              action='post'
              icon='success'
              message='La categoria fue creada:'
            />
          }
        />
        <Route
          exact path='/admin/category'
          render={() =>
            <FormCategory
              action='post'
              icon='success'
              message='La categoria fue creada:'
            />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
