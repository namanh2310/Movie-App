import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
// import MovieDetail from "./components/MovieDetail/MovieDetail";
// import MovieListing from "./components/MovieListing/MovieListing";
// import PageNotFound from "./components/PageNotFound/PageNotFound";
import Welcome from "./page/Welcome/Welcome";
import Login from "./page/Login/Login";
import PrivateRoute from "./features/PrivateRoute";
import "./App.scss";
import LoginSuccess from "./features/LoginSuccess";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <LoginSuccess>
                  <Login />
                </LoginSuccess>
              }
            />
            <Route
              path="/welcome"
              element={
                <PrivateRoute>
                  <Welcome />
                </PrivateRoute>
              }
            />
            <Route
              path="/:type/:titleS/:yearS/:page"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
