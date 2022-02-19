import axios from "axios";
import React, { useEffect, useState } from "react";
import Book from "./Book";
import Grid from "@mui/material/Grid";
function Books() {
  const [books, setBooks] = useState([
    {
      title: "",
      description: "",
      author_id: 0,
      author: { name: "" },
      genres: [{ name: "" }],
    },
  ]);

  useEffect(() => {
    const getBookAPI = async () => {
      const bookAPI = await axios.get("http://localhost:3000/books");
      setBooks(bookAPI.data);
    };
    getBookAPI();
  }, []);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="left"
      spacing={3}
      sx={{ width: 3 / 4, margin: "auto", outline: "solid" }}
    >
      {books.map((book) => {
        return (
          <Grid item md={3} xs={6} sx={{ padding: "1rem" }}>
            <Book title={book.title}></Book>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Books;
