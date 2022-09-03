import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const auth = useSelector((state) => state.netflix.auth);
  //   const test = true;

  return auth ? children : <Navigate to="/" />;
}

export default PrivateRoute;
