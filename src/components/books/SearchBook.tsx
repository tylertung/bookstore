import { Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useAppDispatch } from "../../base/hook";
import { searchByTitle } from "../../redux/book/bookAction";

const SearchBook = () => {
  const [keyword, setKeyWord] = React.useState("");
  const dispatch = useAppDispatch();

  const handleKeyWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyWord(event.target.value);
  };

  const handleSearch = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (keyword !== "") searchByTitle(keyword)(dispatch);
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        marginTop: "1rem",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search by Title"
        inputProps={{ "aria-label": "search by title" }}
        onChange={handleKeyWord}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={handleSearch}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBook;
