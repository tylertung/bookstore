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

const genders = [{ value: "Male" }, { value: "Female" }];

const SignupForm = () => {
  const PaperStyle = {
    height: "70vh",
    width: "360px",
    margin: "20px auto",
    padding: 20,
  };

  const [valueDate, setValueDate] = React.useState<Date | null>(
    new Date("2022-02-21")
  );

  const handleChangeDate = (newValue: Date | null) => {
    setValueDate(newValue);
  };

  const [gender, setGender] = React.useState("Male");

  const handleChangeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
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
          label="First Name"
          placeholder="Enter First Name"
          variant="standard"
          required
        />
        <TextField
          label="Last Name"
          placeholder="Enter Last Name"
          variant="standard"
          required
          sx={{ marginLeft: "1rem" }}
        />
        <TextField
          label="Username"
          placeholder="Enter username"
          variant="standard"
          fullWidth
        />
        <LocalizationProvider dateAdapter={DateAdapter}>
          {" "}
          <DesktopDatePicker
            label="Birthday"
            inputFormat="dd/MM/yyyy"
            value={valueDate}
            onChange={handleChangeDate}
            renderInput={(params) => (
              <TextField {...params} sx={{ marginTop: "1rem" }} />
            )}
          />{" "}
        </LocalizationProvider>
        <TextField
          select
          label="Gender"
          value={gender}
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
          label="Email"
          placeholder="Enter Email"
          variant="standard"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter Password"
          variant="standard"
          type="password"
          fullWidth
          required
        />
        <TextField
          label="Confirm Password"
          placeholder="Confirm password"
          variant="standard"
          type="password"
          fullWidth
          required
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          sx={{ marginTop: "1rem" }}
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
