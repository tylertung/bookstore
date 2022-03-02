import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../base/hook";

const useStyles = makeStyles({
  buttonStyle: {
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    "&:hover": {
      backgroundColor: "#488462 !important",
    },
  },
});

const Navbar = () => {
  const classes = useStyles();

  const userLogin = useAppSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link
          href="/"
          underline="none"
          variant="h5"
          sx={{
            color: "white",
            flexGrow: 1,
            margin: "1rem",
            fontWeight: "bold",
          }}
        >
          BookStore
        </Link>
        {userInfo ? (
          <Button variant="contained" color="success">
            {userInfo.first_name + " " + userInfo.last_name}
          </Button>
        ) : (
          <>
            <Link href="/sign-in" underline="none">
              <Button
                variant="outlined"
                sx={{
                  marginRight: "1rem",
                  color: "white",
                  outline: "1px solid #84BC9C",
                }}
                className={classes.buttonStyle}
              >
                Log in
              </Button>
            </Link>
            <Link href="/registration" underline="none">
              <Button variant="contained" color="info">
                Sign up
              </Button>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
