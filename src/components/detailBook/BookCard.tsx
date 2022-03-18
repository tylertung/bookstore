import React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import { Card, CardMedia, Grid, Paper, Typography, Box, Rating, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import coverBook from '../../assets/images/coverBook.jpg';
import axiosInstance from '../../base/axios';
import { useAppSelector } from '../../base/hook';
import * as urls from '../../constant/urlRequest';

function BookCard() {
  const { book } = useAppSelector((state) => state.detailBook);
  const { userInfo } = useAppSelector((state) => state.userLogin);
  const [value, setValue] = React.useState<number | null | undefined>(0);
  const flag = React.useRef<boolean>(false);
  const navigate = useNavigate();

  const rate_id = React.useMemo(() => {
    const rate = book?.rates.find((rate) => rate.user_id === userInfo?.id);
    return rate?.id;
  }, [book?.rates, userInfo?.id]);

  const deleteBook = async (book_id: number | undefined) => {
    try {
      await axiosInstance.delete(`${urls.booksUrl}/${book_id}`);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const rateBook = async (rateValue: number | undefined | null, book_id: number | undefined) => {
    try {
      await axiosInstance.post(`${urls.booksUrl}/${book_id}/rates`, null, {
        params: {
          user_id: userInfo?.id,
          quantity: rateValue,
        },
      });
      console.log('rated successfully');
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const deleteRateBook = async (
    rate_id: number | undefined,
    book_id: number | undefined,
    user_id: number | undefined
  ) => {
    try {
      await axiosInstance.delete(`${urls.booksUrl}/${book_id}/rates/${rate_id}`, { data: { user_id } });
      console.log('unrate successfully');
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleRate = (rateValue: number | undefined | null) => {
    if (flag.current === false) {
      rateBook(rateValue, book?.id);
      flag.current = true;
    } else if (rate_id) {
      deleteRateBook(rate_id, book?.id, userInfo?.id);
      flag.current = false;
    }
  };
  const handleDelete = () => {
    deleteBook(book?.id);
    navigate('/');
  };

  React.useEffect(() => {
    setValue(book?.rate);
  }, [book?.rate]);

  console.log(flag.current);
  console.log(value);
  return (
    <Grid container alignItems="center" spacing={3} sx={{ width: 3 / 4, margin: '2rem auto' }} direction="row">
      <Grid item sx={{ padding: '1rem' }}>
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '1000px',
            borderRadius: '25px',
          }}
          elevation={5}
        >
          <Card sx={{ maxWidth: '300px', height: '400px', borderRadius: '25px' }}>
            <CardMedia component="img" height="400px" image={coverBook} alt={book?.title} />
          </Card>
          <Box
            sx={{
              '& > legend': { mt: 2 },
              marginLeft: '3rem',
              flex: '1',
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginTop: '1rem' }}>
              {book?.title}
            </Typography>
            <Typography component="legend" sx={{ fontWeight: 'bold' }}>
              Rating
            </Typography>
            <Rating
              name="simple-controlled"
              value={value || 0}
              precision={0.1}
              onChange={(_event, newValue) => {
                setValue(newValue);
                handleRate(newValue);
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Description:
            </Typography>
            <Typography variant="body1" sx={{}}>
              {book?.description}
            </Typography>
          </Box>
          {userInfo?.role === 'admin' ? (
            <IconButton sx={{ width: '50px', height: '50px' }} onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          ) : null}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default React.memo(BookCard);
