import { Grid, Paper, Box } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../base/hook";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const GroupComments = () => {
  const { userInfo } = useAppSelector((state) => state.userLogin);
  const { book } = useAppSelector((state) => state.detailBook);

  return (
    <Grid
      container
      alignItems="center"
      spacing={3}
      sx={{ width: 3 / 4, margin: "2rem auto" }}
      direction="row"
    >
      <Grid item sx={{ padding: "1rem" }}>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "1000px",
            borderRadius: "25px",
          }}
          elevation={5}
        >
          <Box>{userInfo ? <CommentForm /> : null}</Box>
          <Box sx={{marginTop: "1rem"}}>
            {book?.comments.map((comment) => {
              return (
                <Comment name={comment.username} content={comment.content} key={comment.id}/>
              );
            })}
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default GroupComments;
