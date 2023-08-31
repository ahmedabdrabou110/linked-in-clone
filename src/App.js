import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Header from "./components/Header/Header";
import RequiredAuth from "./components/Auth/RequiredAuth";
import Home from "./components/Home/Home";
import { getUserAuth } from "./redux/actions";
import { connect } from "react-redux";
const App = (props) => {
  useEffect(() => {
    props.getUserAuth();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <RequiredAuth>
              <Header />
              <Home />
            </RequiredAuth>
          }
        />
      </Routes>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDtspatchesToProps = (dispatch) => {
  return {
    getUserAuth: () => dispatch(getUserAuth()),
  };
};

export default connect(mapStateToProps, mapDtspatchesToProps)(App);
