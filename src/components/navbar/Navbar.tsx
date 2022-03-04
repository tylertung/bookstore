import { AppBar, Button, Toolbar, Menu, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../base/hook";
import { logout } from "../../redux/auth/authAction";
import { Link } from "react-router-dom";

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
  const dispatch = useAppDispatch();

  const { userInfo } = useAppSelector((state) => state.userLogin);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    setAnchorEl(null);
    logout()(dispatch);
  };
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            flex: "1",
            color: "white",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          BookStore
        </Link>
        {userInfo ? (
          <>
            <Button
              variant="contained"
              color="success"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {userInfo.first_name + " " + userInfo.last_name}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleLogOut}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Link to="/sign-in" style={{ textDecoration: "none" }}>
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
            <Link to="/registration" style={{ textDecoration: "none" }}>
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
