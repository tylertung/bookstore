import { Avatar, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import React from "react";
import { useAppSelector } from "../../base/hook";
import { useLocation } from "react-router-dom";
import * as urls from "../../constant/urlRequest";
import axiosInstance from "../../base/axios";

interface CommentProps {
  checkCreated: boolean;
  setCreated: React.Dispatch<React.SetStateAction<any>>;
}

const CommentForm = ({ checkCreated, setCreated }: CommentProps) => {
  const { userInfo } = useAppSelector((state) => state.userLogin);
  const [input, setInput] = React.useState<string>("");

  const location = useLocation();
  const book_id = React.useMemo(() => {
    return location.pathname.replace(`${urls.booksUrl}/`, "");
  }, [location.pathname]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInput(value);
  };

  const createComment = async (
    content: string,
    book_id: string,
    user_id: number | undefined
  ) => {
    try {
      const response = await axiosInstance.post(
        `${urls.booksUrl}/${book_id}/comments`,
        { comment: { content: content, book_id: book_id, user_id: user_id } }
      );
      console.log(response.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleSubmitComment = React.useCallback(() => {
    createComment(input, book_id, userInfo?.id);
    setCreated(true);
    setInput("");
  }, [book_id, input, userInfo?.id, setCreated]);

  
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
          <AccountCircleIcon />
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
