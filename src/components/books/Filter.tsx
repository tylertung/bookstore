import {
  Button,
  Typography,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import axiosInstance from "../../base/axios";
import { useAppDispatch, useAppSelector } from "../../base/hook";
import * as urls from "../../constant/urlRequest";
import { searchByGenre } from "../../redux/book/bookAction";
const useStyle = makeStyles({
  root: {
    padding: "1rem",
    margin: "1rem auto",
    width: "250px",
    height: "300px",
  },
  button: {
    color: "whitesmoke !important",
    backgroundColor: "#6C9D7F !important",
    "&:hover": {
      backgroundColor: "#B6CEBF !important",
    },
  },
  title: {
    fontWeight: "bold !important",
    marginTop: "1rem !important",
    marginBotton: "1rem !important",
  },
});

const Filter = () => {
  const classes = useStyle();
  const { genres } = useAppSelector((state) => state.genresList);

  const [input, setInput] = React.useState("");
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const dispatch = useAppDispatch();
  const handleSearch = () => {
    searchByGenre(input)(dispatch);
  };

  console.log(input);
  return (
    <Box className={classes.root}>
      <Button fullWidth className={classes.button} onClick={handleSearch}>
        Apply Filter
      </Button>
      <Typography variant="h6" className={classes.title}>
        Genres
      </Typography>
      <FormGroup sx={{ maxHeight: "200px", overflowY: "auto" }}>
        {genres?.map((genre) => {
          return (
            <FormControlLabel
              control={<Checkbox onChange={handleInput} value={genre.name} />}
              label={genre.name}
              key={genre.id}
            />
          );
        })}
      </FormGroup>
    </Box>
  );
};

export default Filter;
