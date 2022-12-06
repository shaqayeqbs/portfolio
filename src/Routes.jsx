import React from "react";
import Layout from "./components/layout/layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/about";
import NotFound from "./pages/NotFound";
import DetailPage from "./pages/DetailPage";

function RoutesList() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="products/:productId" element={<DetailPage />} />

        <Route path="/about" element={<About />} exact></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Layout>
  );
}

export default RoutesList;
