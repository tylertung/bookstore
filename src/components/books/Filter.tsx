import React from 'react';

import { Button, Typography, Box, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useAppDispatch, useAppSelector } from '../../base/hook';
import { searchByGenre } from '../../redux/book/bookAction';

const useStyle = makeStyles({
  root: {
    padding: '1rem',
    margin: '1rem auto',
    width: '250px',
    height: '300px',
  },
  button: {
    color: 'whitesmoke !important',
    backgroundColor: '#6C9D7F !important',
    '&:hover': {
      backgroundColor: '#B6CEBF !important',
    },
  },
  title: {
    fontWeight: 'bold !important',
    marginTop: '1rem !important',
    marginBotton: '1rem !important',
  },
});

function Filter() {
  const classes = useStyle();
  const { genres } = useAppSelector((state) => state.genresList);
  const [input, setInput] = React.useState<string[]>([]);

  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setInput([...input, event.target.value]);
    } else {
      setInput(input.filter((name) => name !== event.target.value));
    }
  };

  const handleSearch = () => {
    searchByGenre(input)(dispatch);
  };

  return (
    <Box className={classes.root}>
      <Button fullWidth className={classes.button} onClick={handleSearch}>
        Apply Filter
      </Button>
      <Typography variant="h6" className={classes.title}>
        Genres
      </Typography>
      <FormGroup sx={{ maxHeight: '200px', overflowY: 'auto' }}>
        {genres?.map((genre) => {
          return (
            <FormControlLabel
              control={<Checkbox value={genre.name} onChange={handleChange} id={genre.id.toString()} />}
              label={genre.name}
              key={genre.id}
            />
          );
        })}
      </FormGroup>
    </Box>
  );
}

export default Filter;
