import { Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useAppDispatch } from "../../base/hook";
import { searchByTitle } from "../../redux/book/bookAction";
import { debounce } from "lodash";

const SearchBook = () => {
  const [keyword, setKeyWord] = React.useState("");
  const dispatch = useAppDispatch();

  const handleKeyWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyWord(event.target.value);
  };

  const handleSearch = (event: React.SyntheticEvent) => {
    event.preventDefault();
    debounceSearch(keyword);
  };

  const debounceSearch = React.useCallback(
    debounce((keyword: string) => searchByTitle(keyword)(dispatch), 1000),
    [dispatch, searchByTitle, keyword]
  );

  React.useEffect(() => {
    if (keyword !== "") debounceSearch(keyword);
  }, [keyword, debounceSearch]);

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
