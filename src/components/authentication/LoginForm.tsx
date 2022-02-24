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
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

interface UserProps {
  first_name: string,
  last_name: string,
  username: string,
  dob: string | undefined,
  gender: string,
  email:string,
  password: string
}



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
  const [user,setUser] = React.useState<UserProps | undefined>();
  const handleLogin = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await axios
      .post("http://localhost:3000/login", {
        user: input,
      })
      .then(async function (response) {
        if(response.data.token)
        {
          axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
          const res = await axios.get('http://localhost:3000/auth');
          setUser(res.data.user);
          navigate('/')
          
        }
      })
      .catch(function (error) {
        console.log(error.response);
      });
  };

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
