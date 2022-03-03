import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import coverBook from "../../assets/images/coverBook.jpg";



interface Props {
  title: string;
}

function Book({ title }: Props) {
  return (
    <Card sx={{ maxWidth: 350, height: 350 }} className="book">
      <CardMedia component="img" height="250" image={coverBook} alt={title} />
      <CardContent>
        <Typography
          sx={{
            fontSize: 15,
            fontWeight: "600",
          }}
          component="div"
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Book;
