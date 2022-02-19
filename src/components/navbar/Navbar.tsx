import { AppBar, Button, Link, Toolbar, Typography } from '@mui/material'
import {makeStyles} from '@mui/styles'
import {styled} from '@mui/material/styles'
import React from 'react'

const useStyles = makeStyles({
  buttonStyle: {
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    '&:hover': {
      backgroundColor: '#488462 !important',
    }
  },
});


const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" >
      <Toolbar>
        <Typography 
          variant="h5"
          noWrap
          component="div"
          sx={{flexGrow: 1, margin: '1rem', fontWeight: "bold"}}
        >
          BookStore
        </Typography>
        <Link href='/sign-in' underline='none'>
          <Button variant="outlined" sx={{marginRight: '1rem',color: "white", outline: "1px solid #84BC9C"}} className={classes.buttonStyle}>
              Log in
            </Button>
        </Link>
        <Link href="/registration" underline="none">
          <Button variant="contained" color="info">
            Sign up
          </Button>
        </Link>
        
      </Toolbar>
    </AppBar>
  )
}

export default Navbar