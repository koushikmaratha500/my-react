import { Routes, Route, Navigate } from "react-router-dom";
// importing Pages
import Home from "./Pages/Home";
import Tasks from "./Pages/Tasks";
import Products from "./Pages/Dashboard/Products";
import Contact from "./Pages/Contact";
import { Page404 } from "./Pages/Page404";
import Login from "./Pages/Auth/Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/tasks" element={<Tasks />} />
    <Route path="*" element={<Page404 />} />
    <Route path="/login" element={<Login />} />
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />

    <Route
      path="/products"
      element={
        <ProtectedRoute>
          <Products />
        </ProtectedRoute>
      }
    />
    <Route path="/home" element={<Navigate to={"/"} />} />
  </Routes>
);

export default Router;
