import {
  Avatar,
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import React, { useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../base/hook";
import { login } from "../../redux/actions/authAction";

const LoginForm = () => {
  const PaperStyle = {
    height: "70vh",
    width: "360px",
    margin: "20px auto",
    padding: 20,
  };

  const [input, setInput] = React.useState({
    email: "",
    password: "",
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setInput({ ...input, [id]: value });
  };
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const userLogin = useAppSelector((state) => state.userLogin);
  const { errors, userInfo } = userLogin;

  const handleLogin = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await login(input)(dispatch);
  };

  
  useEffect(() => {
    if (userInfo) navigate("/");
  }, [userInfo]);

  return (
    <Grid sx={{ marginTop: "2rem" }}>
      <Paper elevation={10} style={PaperStyle}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar>
            <AccountCircleIcon></AccountCircleIcon>
          </Avatar>
          <Typography variant="h4" noWrap>
            Log in
          </Typography>
        </Box>
        <TextField
          id="email"
          label="Email"
          placeholder="Enter Email"
          variant="standard"
          onChange={handleInput}
          fullWidth
          required
        />
        <TextField
          id="password"
          label="Password"
          placeholder="Enter Password"
          variant="standard"
          type="password"
          onChange={handleInput}
          fullWidth
          required
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          onClick={handleLogin}
          sx={{ marginTop: "1rem" }}
        >
          Login
        </Button>
        <Typography sx={{ marginTop: "1rem" }}>
          <Link href="/" underline="none">
            Forgot your password?
          </Link>
        </Typography>
        <Typography>
          {" "}
          Don't have account?
          <Link href="/sign-in" underline="none">
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default LoginForm;
