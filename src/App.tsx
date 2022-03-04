import React, { useEffect, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./templates/Home";
import Registration from "./templates/Registration";
import Login from "./templates/Login";
import Navbar from "../src/components/navbar/Navbar";
import DetailBook from "./templates/DetailBook";
import Layout from "./layouts";
import axiosInstance from "../src/base/axios";
import type { AppDispatch } from "../src/redux/store";
import * as urls from "../src/constant/urlRequest";
import {
  DETAIL_USER_REQUEST,
  DETAIL_USER_SUCCESS,
  DETAIL_USER_FAILURE,
} from "./redux/auth/authAction";
import { useAppDispatch } from "./base/hook";

const getDetailUser = () => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: DETAIL_USER_REQUEST });
    try {
      const response = await axiosInstance.get(`${urls.authUrl}`);
      dispatch({ type: DETAIL_USER_SUCCESS, payload: response.data.user });
    } catch (error: any) {
      dispatch({ type: DETAIL_USER_FAILURE, payload: error.message });
    }
  };
};

function App() {
  const dispatch = useAppDispatch();

  useMemo(() => {
    getDetailUser()(dispatch);
  }, [dispatch]);

  return (
    <Router>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/sign-in" element={<Login />} />
          <Route path="/books/:id" element={<DetailBook />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
