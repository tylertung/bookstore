import { Grid, Paper, Box } from "@mui/material";
import React from "react";
import axiosInstance from "../../base/axios";
import { useAppSelector } from "../../base/hook";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import * as urls from "../../constant/urlRequest";
import { CommentProps } from "../../constant/types";
import { useLocation } from "react-router-dom";

const GroupComments = () => {
  const { userInfo } = useAppSelector((state) => state.userLogin);

  const location = useLocation();
  const book_id = React.useMemo(() => {
    return location.pathname.replace(`${urls.booksUrl}/`, "");
  }, [location.pathname]);

  const [comments, setComments] = React.useState<CommentProps[] | null>();
  const [created, setCreated] = React.useState<boolean>(false);
  const previousCreated = React.useRef<boolean>(false);

  const getComment = React.useCallback(async () => {
    const response = await axiosInstance.get(
      `${urls.booksUrl}/${book_id}/comments`
    );
    setComments(response.data);
  }, [book_id]);

  React.useEffect(() => {
    if (created !== previousCreated.current && created) {
      getComment();
    }
    previousCreated.current = created;
    return function cleanup() {
      setCreated(false);
    };
  }, [created, getComment, previousCreated]);

  React.useEffect(() => {
    getComment();
  }, [getComment]);

  console.log("previous: ", previousCreated.current);
  console.log("created: ", created);

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
          <Box>
            {userInfo ? (
              <CommentForm checkCreated={created} setCreated={setCreated} />
            ) : null}
          </Box>
          <Box sx={{ marginTop: "1rem" }}>
            {comments?.map((comment: CommentProps) => {
              return (
                <Comment
                  name={comment.username}
                  content={comment.content}
                  key={comment.id}
                />
              );
            })}
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default GroupComments;
