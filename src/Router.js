import { Routes, Route, Navigate } from "react-router-dom";
// importing Pages
import Home from "./Pages/Home";
import Tasks from "./Pages/Tasks";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import { Page404 } from "./Pages/Page404";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/tasks" element={<Tasks />} />
    <Route path="*" element={<Page404 />} />
    <Route path="/home" element={<Navigate to={"/"} />} />
  </Routes>
);

export default Router;
