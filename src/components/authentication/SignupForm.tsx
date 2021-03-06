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
import React from "react";
import { LocalizationProvider } from "@mui/lab";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { DateTime } from "luxon";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../base/hook";
import {
  register,
  cleanError,
  USER_RESET_STATE,
} from "../../redux/auth/authAction";
import { PaperStyle } from "./LoginForm";

const genders = [{ value: "Male" }, { value: "Female" }];

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { errors, userInfo } = useAppSelector((state) => state.userLogin);

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
    password_confirmation: "",
  });

  const handleAccountSignUp = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setInput({ ...input, [id]: value });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await register(input)(dispatch);
  };

  React.useEffect(() => {
    if (userInfo) navigate("/");
  }, [dispatch, navigate, userInfo]);

  React.useEffect(() => {
    <h1>tttt</h1>;
  }, [dispatch, errors, pathname]);

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
          error={errors?.hasOwnProperty("first_name")}
          id="first_name"
          label="First Name"
          placeholder="Enter First Name"
          variant="standard"
          helperText={
            errors?.hasOwnProperty("first_name") ? errors.first_name : ""
          }
          onChange={handleAccountSignUp}
          required
        />
        <TextField
          error={errors?.hasOwnProperty("last_name")}
          id="last_name"
          label="Last Name"
          placeholder="Enter Last Name"
          variant="standard"
          onChange={handleAccountSignUp}
          helperText={
            errors?.hasOwnProperty("last_name") ? errors.last_name : ""
          }
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
          error={errors?.hasOwnProperty("email")}
          id="email"
          label="Email"
          placeholder="Enter Email"
          variant="standard"
          onChange={handleAccountSignUp}
          helperText={errors?.hasOwnProperty("email") ? errors.email : ""}
          fullWidth
          required
        />
        <TextField
          error={errors?.hasOwnProperty("password")}
          id="password"
          label="Password"
          placeholder="Enter Password"
          variant="standard"
          type="password"
          helperText={errors?.hasOwnProperty("password") ? errors.password : ""}
          onChange={handleAccountSignUp}
          fullWidth
          required
        />
        <TextField
          error={errors?.hasOwnProperty("password_confirmation")}
          id="password_confirmation"
          label="Confirm Password"
          placeholder="Confirm password"
          variant="standard"
          type="password"
          helperText={
            errors?.hasOwnProperty("password_confirmation")
              ? errors?.password_confirmation
              : ""
          }
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
