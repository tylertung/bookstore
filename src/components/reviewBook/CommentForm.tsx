import { Avatar, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../base/hook";
import { createComment } from "../../redux/review/commentAction";
import { useLocation } from "react-router-dom";
import * as urls from "../../constant/urlRequest";
import { getDetailBook } from "../../redux/book/bookAction";

const CommentForm = () => {
  const { userInfo } = useAppSelector((state) => state.userLogin);
  const [input, setInput] = React.useState<string>("");

  const location = useLocation();
  const book_id = location.pathname.replace(`${urls.booksUrl}/`, "");

  const { comment } = useAppSelector((state) => state.createComment);
  const dispatch = useAppDispatch();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInput(value);
  };

  const handleSubmitComment = (event: React.SyntheticEvent) => {
    event.preventDefault();
    createComment(input, book_id, userInfo?.id)(dispatch);
    setInput("");
  };

  React.useEffect(() => {
    if (comment) getDetailBook(book_id)(dispatch);
  }, [dispatch, book_id, comment]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ width: "25px", height: "25px" }}>
          <AccountCircleIcon></AccountCircleIcon>
        </Avatar>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          {userInfo?.last_name}
        </Typography>
      </Box>
      <TextField
        id="content"
        label="comment"
        variant="outlined"
        value={input}
        placeholder="Enter Comment for this book"
        sx={{ marginLeft: "1rem", width: "800px", borderRadius: "15px" }}
        onChange={handleInput}
      ></TextField>
      <Button
        sx={{ marginLeft: "1rem", backgroundColor: "#B2FF9E" }}
        onClick={handleSubmitComment}
      >
        Add
        <ChatIcon />
      </Button>
    </Box>
  );
};

export default CommentForm;
