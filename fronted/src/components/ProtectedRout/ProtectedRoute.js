import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Outlet } from "react-router";

function ProtectedRoute({ children, isLoggedIn, isLoading, ...props }) {
  if (isLoading) {
    return "";
  }
  return isLoggedIn ? <Outlet /> : <Navigate replace to={"/"} />;
}

export default ProtectedRoute;
