import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function LoginSuccess({ children }) {
  const auth = useSelector((state) => state.netflix.auth);
  //   const test = true;

  return auth ? <Navigate to="/welcome" /> : children;
}

export default LoginSuccess;
