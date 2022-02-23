import {
  Avatar,
  Grid,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Button,
  Link,
  Box,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DateAdapter from "@mui/lab/AdapterLuxon";
import React, { useState } from "react";
import { LocalizationProvider } from "@mui/lab";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { DateTime } from "luxon";
import axios from "axios";

const genders = [{ value: "Male" }, { value: "Female" }];

interface ErrorProps{
  
    first_name: String[],
    last_name: String[],
    dob: String[],
    gender: String[],
    email: String[],
    password: String[],
    password_confirmation: String[]
  
};
  



const SignupForm = () => {
  const PaperStyle = {
    height: "70vh",
    width: "360px",
    margin: "20px auto",
    padding: 20,
  };

  const [valueDate, setValueDate] = React.useState<DateTime | null>(
    DateTime.now()
  );

  const handleChangeDate = (newValue: DateTime | null) => {
    setValueDate(newValue);
    const datePicker = input;
    datePicker.dob = newValue?.toFormat("dd-MM-yyyy");
    setInput(datePicker);
  };

  const [valueGender, setGender] = React.useState("Male");

  const handleChangeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const [input, setInput] = React.useState({
    first_name: "",
    last_name: "",
    username: "",
    dob: valueDate?.toFormat("dd-MM-yyyy"),
    gender: valueGender,
    email: "",
    password: "",
    confirmation_password: "",
  });

  const handleAccountSignUp = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setInput({ ...input, [id]: value });
  };

  const [errors, setErrors] = React.useState<ErrorProps | null>();

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await axios
      .post("http://localhost:3000/sign-up", {
        user: input,
      })
      .then(function (response) {
        
      })
      .catch(function (error) {
        console.log(error.response.data)
        setErrors(error.response.data.errors);
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
            Sign up
          </Typography>
        </Box>
        <TextField
          error={errors?.hasOwnProperty('first_name')}
          id="first_name"
          label="First Name"
          placeholder="Enter First Name"
          variant="standard"
          helperText={errors?.hasOwnProperty('first_name') ? errors.first_name : ''}
          onChange={handleAccountSignUp}
          required
        />
        <TextField
          error={errors?.hasOwnProperty('last_name')}
          id="last_name"
          label="Last Name"
          placeholder="Enter Last Name"
          variant="standard"
          onChange={handleAccountSignUp}
          helperText={errors?.hasOwnProperty('last_name') ? errors.last_name : ''}
          required
          sx={{ marginLeft: "1rem" }}
        />
        <TextField
          id="username"
          label="Username"
          placeholder="Enter username"
          onChange={handleAccountSignUp}
          variant="standard"
          fullWidth
        />
        <LocalizationProvider dateAdapter={DateAdapter}>
          {" "}
          <DesktopDatePicker
            label="Birthday"
            inputFormat="dd/MM/yyyy"
            value={valueDate}
            views={["day", "month", "year"]}
            onChange={handleChangeDate}
            renderInput={(params) => (
              <TextField {...params} sx={{ marginTop: "1rem" }} id="dob" />
            )}
          />{" "}
        </LocalizationProvider>
        <TextField
          id="gender"
          name="gender"
          select
          label="Gender"
          value={valueGender}
          onChange={handleChangeGender}
          sx={{ marginTop: "1rem", width: "120px" }}
        >
          {genders.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          error={errors?.hasOwnProperty('email')}
          id="email"
          label="Email"
          placeholder="Enter Email"
          variant="standard"
          onChange={handleAccountSignUp}
          helperText={errors?.hasOwnProperty('email') ? errors.email : ''}
          fullWidth
          required
        />
        <TextField
          error={errors?.hasOwnProperty('password')}
          id="password"
          label="Password"
          placeholder="Enter Password"
          variant="standard"
          type="password"
          helperText={errors?.hasOwnProperty('password') ? errors.password[1] : ''}
          onChange={handleAccountSignUp}
          fullWidth
          required
        />
        <TextField
          error={errors?.hasOwnProperty('password_confirmation')}
          id="confirmation_password"
          label="Confirm Password"
          placeholder="Confirm password"
          variant="standard"
          type="password"
          helperText={errors?.hasOwnProperty('password_confirmation') ? errors.password_confirmation : ''}
          onChange={handleAccountSignUp}
          fullWidth
          required
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          sx={{ marginTop: "1rem" }}
          onClick={handleSubmit}
        >
          Sign up
        </Button>
        <Typography sx={{ marginTop: "1rem" }}>
          <Link href="/" underline="none">
            Forgot your password?
          </Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account?
          <Link href="/sign-in" underline="none">
            Log in
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default SignupForm;
