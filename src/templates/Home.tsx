import axios from "axios";
import React, { useEffect, useState } from "react";
import Books from "../components/books/Books";
import CreateBook from "../components/books/BookForm";
import { useAppSelector } from "../base/hook";
function Home() {
  const userLogin = useAppSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      {userInfo?.role === "admin" ? <CreateBook /> : null}
      <Books></Books>
    </>
  );
}

export default Home;
