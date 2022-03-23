import React from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar, Box, Grid, Paper, Typography, TextField, Button, Link } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../base/hook';
import { cleanError, login } from '../../redux/auth/authAction';

export const PaperStyle = {
  height: '70vh',
  width: '360px',
  margin: '20px auto',
  padding: 20,
};

function LoginForm() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const { errors, userInfo } = useAppSelector((state) => state.userLogin);

  const [input, setInput] = React.useState({
    email: '',
    password: '',
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setInput({ ...input, [id]: value });
  };

  const handleLogin = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await login(input)(dispatch);
  };

  React.useEffect(() => {
    if (userInfo) navigate('/');
  }, [dispatch, navigate, userInfo]);

  React.useEffect(() => {
    if (pathname !== '/sign-in') cleanError()(dispatch);
  }, [dispatch, errors, pathname]);

  return (
    <Grid sx={{ marginTop: '2rem' }}>
      <Paper elevation={10} style={PaperStyle}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
          <Typography variant="h4" noWrap>
            Log in
          </Typography>
        </Box>
        <TextField
          error={errors != null}
          id="email"
          label="Email"
          placeholder="Enter Email"
          variant="standard"
          onChange={handleInput}
          helperText={errors || ''}
          fullWidth
          required
        />
        <TextField
          error={errors != null}
          id="password"
          label="Password"
          placeholder="Enter Password"
          variant="standard"
          type="password"
          onChange={handleInput}
          helperText={errors || ''}
          fullWidth
          required
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          onClick={handleLogin}
          sx={{ marginTop: '1rem' }}
        >
          Login
        </Button>
        <Typography sx={{ marginTop: '1rem' }}>
          <Link href="/" underline="none">
            Forgot your password?
          </Link>
        </Typography>
        <Typography>
          Don&apos;t have account?
          <Link href="/sign-in" underline="none">
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default React.memo(LoginForm);
