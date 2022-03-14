import React from "react";
import { IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axiosInstance from "../../base/axios";
import * as urls from "../../constant/urlRequest";
interface GroupActionProps {
  book_id?: number;
  comment_id?: number;
  setFlag: React.Dispatch<React.SetStateAction<any>>;
}

const GroupAction = ({ book_id, comment_id, setFlag }: GroupActionProps) => {
  const deleteComment = async (book_id?: number, comment_id?: number) => {
    try {
      const response = await axiosInstance.delete(
        `${urls.booksUrl}/${book_id}/comments/${comment_id}`
      );
      console.log(response.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleDelete = () => {
    deleteComment(book_id, comment_id);
    setFlag(true);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default GroupAction;
