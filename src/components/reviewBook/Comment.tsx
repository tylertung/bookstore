import { Avatar, Box, Paper, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import GroupAction from "../shared/GroupAction";
import { useAppSelector } from "../../base/hook";

interface CommentProps {
  name: string;
  content: string;
  id: number;
  setFlag: React.Dispatch<React.SetStateAction<any>>;
}

const Comment = ({ name, content, id,setFlag }: CommentProps) => {
  const { userInfo } = useAppSelector((state) => state.userLogin);
  const { book } = useAppSelector((state) => state.detailBook);
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "1rem",
        margin: "5px",
        borderRadius: "15px",
        alignItems: "center",
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
          {name}
        </Typography>
      </Box>
      <Box sx={{ width: "850px" }}>
        <Typography sx={{ marginLeft: "1rem", wordWrap: "break-word" }}>
          {content}
        </Typography>
      </Box>
      {userInfo?.last_name === name ? (
        <GroupAction book_id={book?.id} comment_id={id} setFlag={setFlag} />
      ) : null}
    </Paper>
  );
};

export default React.memo(Comment);
