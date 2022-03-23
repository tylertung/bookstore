import React from 'react';

import { Grid } from '@mui/material';

import { useAppSelector } from '../base/hook';
import CreateBook from '../components/books/BookForm';
import Books from '../components/books/Books';
import Filter from '../components/books/Filter';
import SearchBook from '../components/books/SearchBook';

function Home() {
  const userLogin = useAppSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {userInfo?.role === 'admin' ? <CreateBook /> : null}
        <SearchBook />
      </div>
      <Grid sx={{ display: 'flex' }}>
        <Filter />
        <Books />
      </Grid>
    </>
  );
}

export default Home;
