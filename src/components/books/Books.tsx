import axios from "axios";
import React, { useEffect, useState } from "react";
import Book from "./Book";
import Grid from "@mui/material/Grid";
import { useAppDispatch, useAppSelector } from "../../base/hook";
import { getListBook } from "../../redux/actions/bookAction";

function Books() {
  const dispatch = useAppDispatch();

  const bookList = useAppSelector((state) => state.bookList);
  const { books } = bookList;

  useEffect(() => {
    getListBook()(dispatch);
  }, []);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="left"
      spacing={3}
      sx={{ width: 3 / 4, margin: "auto", outline: "solid" }}
    >
      {books?.map((book) => {
        return (
          <Grid item md={3} xs={6} sx={{ padding: "1rem" }} key={book.id}>
            <Book title={book.title}></Book>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Books;
