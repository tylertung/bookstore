import {
  Card,
  CardMedia,
  Grid,
  Paper,
  Typography,
  Box,
  Rating,
} from "@mui/material";
import React from "react";
import { useAppSelector } from "../../base/hook";
import coverBook from "../../assets/images/coverBook.jpg";

const BookCard = () => {
  const { book } = useAppSelector((state) => state.detailBook);

  const [value, setValue] = React.useState<number | null>(0);

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
            flexDirection: "row",
            width: "1000px",
            borderRadius: "25px",
          }}
          elevation={5}
        >
          <Card
            sx={{ maxWidth: "300px", height: "400px", borderRadius: "25px" }}
          >
            <CardMedia
              component="img"
              height="400px"
              image={coverBook}
              alt={book?.title}
            />
          </Card>
          <Box
            sx={{
              "& > legend": { mt: 2 },
              marginLeft: "3rem",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", marginTop: "1rem" }}
            >
              {book?.title}
            </Typography>
            <Typography component="legend" sx={{ fontWeight: "bold" }}>
              Rating
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              precision={0.1}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Description:
            </Typography>
            <Typography variant="body1" sx={{}}>
              {book?.description}
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BookCard;
