import React from 'react';

import { Paper } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

import coverBook from '../../assets/images/coverBook.jpg';

interface Props {
  title: string;
}

const useStyles = makeStyles({
  root: {
    '&:hover': {
      transform: 'scale(1.1)',
    },
    maxWidth: '300px',
    height: '350px',
    borderRadius: '15px !important',
  },
});

function Book({ title }: Props) {
  const classes = useStyles();
  return (
    <Paper elevation={4} className={classes.root}>
      <CardMedia component="img" height="250" image={coverBook} alt={title} sx={{ borderRadius: '15px !important' }} />
      <CardContent>
        <Typography
          sx={{
            fontSize: 15,
            fontWeight: '600',
          }}
          component="div"
        >
          {title}
        </Typography>
      </CardContent>
    </Paper>
  );
}

export default React.memo(Book);
