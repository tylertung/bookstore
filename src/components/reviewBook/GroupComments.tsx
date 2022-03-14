import { Grid, Paper, Box } from "@mui/material";
import React from "react";
import axiosInstance from "../../base/axios";
import { useAppSelector } from "../../base/hook";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import * as urls from "../../constant/urlRequest";
import { CommentProps } from "../../constant/types";
import { useLocation } from "react-router-dom";
import { debounce } from "lodash";

const GroupComments = () => {
  const { userInfo } = useAppSelector((state) => state.userLogin);

  const location = useLocation();
  const book_id = React.useMemo(() => {
    return location.pathname.replace(`${urls.booksUrl}/`, "");
  }, [location.pathname]);

  const [comments, setComments] = React.useState<CommentProps[] | null>();
  const [flag, setFlag] = React.useState<boolean>(false);
  const previousFlag = React.useRef<boolean>(false);

  const getComment = React.useCallback(async () => {
    const response = await axiosInstance.get(
      `${urls.booksUrl}/${book_id}/comments`
    );
    setComments(response.data);
  }, [book_id]);

  const debounceGetComment = React.useCallback(
    debounce(() => getComment(),100),[]
  );

  React.useEffect(() => {
    if (flag !== previousFlag.current && flag) {
      debounceGetComment();
    }
    previousFlag.current = flag;
    return function cleanup() {
      setFlag(false);
    };
  }, [flag, debounceGetComment, previousFlag]);

  React.useEffect(() => {
    debounceGetComment();
  }, [debounceGetComment]);
  
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
          <Box>{userInfo ? <CommentForm setCreated={setFlag} /> : null}</Box>
          <Box sx={{ marginTop: "1rem" }}>
            {comments?.map((comment: CommentProps) => {
              return (
                <Comment
                  name={comment.username}
                  content={comment.content}
                  id={comment.id}
                  setFlag={setFlag}
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
