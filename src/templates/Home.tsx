import React from "react";
import Books from "../components/books/Books";
import CreateBook from "../components/books/BookForm";
import { useAppSelector } from "../base/hook";
import SearchBook from "../components/books/SearchBook";


function Home() {
  const userLogin = useAppSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {userInfo?.role === "admin" ? <CreateBook /> : null}
        <SearchBook />
      </div>
      <Books />
    </>
  );
}

export default Home;
