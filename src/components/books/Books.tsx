import React from 'react';

import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../base/hook';
import * as urls from '../../constant/urlRequest';
import { getListBook, getListGenres } from '../../redux/book/bookAction';
import Book from './Book';

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
        margin: 'auto',
        marginTop: '1rem',
      }}
    >
      {books?.map((book) => {
        return (
          <Grid item md={3} xs={6} sx={{ padding: '1rem' }} key={book.id}>
            <Link to={`${urls.booksUrl}/${book.id}`} style={{ textDecoration: 'none' }}>
              <Book title={book.title} />
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Books;
