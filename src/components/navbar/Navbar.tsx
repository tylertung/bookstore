import React from 'react';

import { AppBar, Button, Toolbar, Menu, MenuItem, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../base/hook';
import { logout } from '../../redux/auth/authAction';

const useStyles = makeStyles({
  button: {
    borderRadius: '25px !important',
  },
});

function Navbar() {
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
    <AppBar position="sticky" sx={{ backgroundColor: '#F7B2AD' }}>
      <Toolbar>
        <Box style={{ flex: '1' }}>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 'bold',
            }}
          >
            BookStore
          </Link>
        </Box>
        {userInfo ? (
          <>
            <Button
              variant="contained"
              color="success"
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              className={classes.button}
            >
              {`${userInfo.first_name} ${userInfo.last_name}`}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleLogOut}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Link to="/sign-in" style={{ textDecoration: 'none' }}>
              <Button
                variant="outlined"
                sx={{
                  marginRight: '1rem',
                  color: 'white',
                  outline: '1px solid #84BC9C',
                }}
                className={classes.button}
              >
                Log in
              </Button>
            </Link>
            <Link to="/registration" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="info" className={classes.button}>
                Sign up
              </Button>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
