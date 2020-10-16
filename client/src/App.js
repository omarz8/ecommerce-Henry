import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

//Components
import Navbar from "./components/navbar";
import ProductDetail from "./components/productDetail";
import Catalogue from "./components/catalogo";
import FormCategory from "./components/categoryForm";
import FormUser from "./components/userForm"
//Pages
import SearchPage from "./pages/SearchPage";
import AdminMenu from "./components/admin";

function App() {
  return (
    //No modifique ni elimine las rutas existentes
    <div className="col-lg-12">
      <Navbar />
      <Switch>
        <Route path="/search/q/:searchTerm" component={SearchPage} />

        <Route exact path="/products">
          <Catalogue />
        </Route>

        <Route exact path="/product/:id">
          <ProductDetail />
        </Route>

        <Route exact path="/admin">
          <AdminMenu />
        </Route>

        <Route
          exact
          path="/admin/category/add"
          render={() => (
            <FormCategory
              action="post"
              icon="success"
              message="La categoria fue creada:"
            />
          )}
        />
        <Route
          exact
          path="/admin/category/edit/:categoryId"
          render={() => (
            <FormCategory
              action="put"
              icon="success"
              message="La categoria fue editada:"
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
