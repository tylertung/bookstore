import { Avatar, Box, Paper, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";

interface CommentProps {
  name: string;
  content: string;
}

const Comment = ({ name, content }: CommentProps) => {
  
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
          <AccountCircleIcon/>
        </Avatar>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          {name}
        </Typography>
      </Box>
      <Box sx={{ width: "800px" }}>
        <Typography sx={{ marginLeft: "1rem", wordWrap: "break-word" }}>
          {content}
        </Typography>
      </Box>
    </Paper>
  );
};

export default React.memo(Comment);
