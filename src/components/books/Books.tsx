import React from "react";
import Book from "./Book";
import Grid from "@mui/material/Grid";
import { useAppDispatch, useAppSelector } from "../../base/hook";
import { getListBook,getListGenres } from "../../redux/book/bookAction";
import { Link } from "react-router-dom";
import * as urls from "../../constant/urlRequest";

function Books() {
  const dispatch = useAppDispatch();

  const { books } = useAppSelector((state) => state.bookList);

  React.useMemo(() => {
    getListBook()(dispatch);
  }, [dispatch]);

  React.useEffect(() => {
    getListGenres()(dispatch);
  }, [dispatch]);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="left"
      spacing={3}
      sx={{
        width: 3 / 4,
        margin: "auto",
        marginTop: "1rem",
      }}
    >
      {books?.map((book) => {
        return (
          <Grid item md={3} xs={6} sx={{ padding: "1rem" }} key={book.id}>
            <Link
              to={`${urls.booksUrl}/${book.id}`}
              style={{ textDecoration: "none" }}
            >
              <Book title={book.title}></Book>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Books;
