import React from "react";
import Books from "../components/books/Books";
import CreateBook from "../components/books/BookForm";
import { useAppSelector } from "../base/hook";
import SearchBook from "../components/books/SearchBook";
import { Grid } from "@mui/material";
import Filter from "../components/books/Filter";


function Home() {
  const userLogin = useAppSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {userInfo?.role === "admin" ? <CreateBook /> : null}
        <SearchBook />
      </div>
      <Grid sx={{display: "flex"}}>
        <Filter/>
        <Books />
      </Grid>
    </React.Fragment>
  );
}

export default Home;
