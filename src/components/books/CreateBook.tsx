import {
  IconButton,
  Dialog,
  TextField,
  DialogTitle,
  DialogContent,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { useAppSelector } from "../../base/hook";
import axios from "axios";

interface bookProps {
  title: string;
  description: string;
  author_id: number;
}

const CreateBook = () => {
  const buttonStyle = {
    width: "50px",
    height: "50px",
    backgroundColor: "#EEEEFF",
    border: "1px solid #ADADFF",
  };

  const dialogStyle = {
    minWidth: 350,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [input, setInput] = React.useState<bookProps>({
    title: "",
    description: "",
    author_id: 0,
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setInput({ ...input, [id]: value });
  };


  const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token') || '{}') : null

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      common: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios
      .post(
        "http://localhost:3000/books",
        {
          book: input,
        },
        config
      )
      .then(function (response) {
        console.log("created success");
      })
      .catch(function (error) {
        console.log(error.response);
      });
  };

  return (
    <>
      <IconButton
        aria-label="Add book"
        color="primary"
        style={buttonStyle}
        onClick={handleOpen}
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
            fullWidth
            variant="standard"
            onChange={handleInput}
          />
          <TextField
            autoFocus
            margin="dense"
            id="author_id"
            label="Author id"
            fullWidth
            variant="standard"
            type="number"
            onChange={(e) =>
              setInput({ ...input, author_id: parseInt(e.target.value) })
            }
            InputProps={{ inputProps: { min: 0 } }}
            required
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            sx={{ marginTop: "1rem", float: "right" }}
            onClick={handleSubmit}
          >
            Add
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateBook;
