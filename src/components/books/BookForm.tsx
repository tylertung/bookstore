import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import { IconButton, Dialog, TextField, DialogTitle, DialogContent, Button, MenuItem } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../base/hook';
import { createBook, getListBook } from '../../redux/book/bookAction';

interface bookStates {
  title: string;
  description: string;
  author_id: number;
  genres: string;
}

const buttonStyle = {
  width: '50px',
  height: '50px',
  backgroundColor: '#EEEEFF',
  border: '1px solid #ADADFF',
};

const dialogStyle = {
  minWidth: 350,
};

function CreateBook() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useAppDispatch();

  const { errors, book } = useAppSelector((state) => state.createBook);

  const { genres } = useAppSelector((state) => state.genresList);
  const [valueGenre, setGenre] = React.useState('Romance');

  const handleChangeGenre = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenre(event.target.value);
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const [input, setInput] = React.useState<bookStates>({
    title: '',
    description: '',
    genres: '',
    author_id: 0,
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setInput({ ...input, [id]: value });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    createBook(input)(dispatch);
    setOpen(false);
  };

  React.useEffect(() => {
    if (book) getListBook()(dispatch);
  }, [dispatch, book]);

  return (
    <>
      <IconButton
        aria-label="Add book"
        color="primary"
        style={buttonStyle}
        onClick={handleOpen}
        sx={{ marginTop: '1rem', marginRight: '1rem' }}
      >
        <AddIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} style={dialogStyle}>
        <DialogTitle>Add a new book</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title book"
            fullWidth
            variant="standard"
            onChange={handleInput}
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            multiline
            fullWidth
            variant="standard"
            onChange={handleInput}
          />
          <TextField
            id="genres"
            name="genres"
            select
            label="Genres"
            value={valueGenre}
            onChange={handleChangeGenre}
            sx={{ marginTop: '1rem' }}
            fullWidth
          >
            {genres?.map((option) => (
              <MenuItem key={option.id} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            autoFocus
            margin="dense"
            id="author_id"
            label="Author id"
            fullWidth
            variant="standard"
            type="number"
            onChange={(e) => setInput({ ...input, author_id: parseInt(e.target.value, 10) })}
            InputProps={{ inputProps: { min: 0 } }}
            required
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            sx={{ marginTop: '1rem', float: 'right' }}
            onClick={handleSubmit}
          >
            Add
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CreateBook;
