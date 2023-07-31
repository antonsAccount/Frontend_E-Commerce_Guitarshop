import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { /*  dayjs, */ Dayjs } from "dayjs";
import validator from "validator";

import "./stylesheets/Signup.css";
function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Antons Rare Guitars
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

type SignupProps = {
  token?: String;
  setToken: (string) => void;
};

export default function SignUp({ token, setToken }: SignupProps) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [birthday, setBirthday] = useState<Dayjs | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [alertType, setAlertType] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setAlertType("");

    if (!firstName || !lastName || !birthday || !email || !password)
      setAlertType("warning1");
    else if (!validator.isEmail(email)) {
      setAlertType("warning2");
    } else if (!validator.isStrongPassword(password)) {
      setAlertType("warning3");
    } else {
      try {
        const newUser = {
          first_name: firstName,
          last_name: lastName,
          birthday: birthday.toDate(),
          email,
          password,
        };

        // const date: Date = birthday.toDate();
        const res = await fetch("http://localhost:5000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
        const data = await res.json();
        console.log(data);

        if (res.ok) {
          setToken(data.token);
          setAlertType("success");
          setBirthday(null);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          console.log("Success ran", res);
          navigate("/shop");
        } else {
          setAlertType("error");
          setError(data.msg);
        }
      } catch (error) {
        console.log(error);
        setAlertType("error");
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{ width: "100%" }}
                  label="Birthday *"
                  value={birthday}
                  format="DD/MM/YYYY"
                  onChange={(e) => setBirthday(e)}
                />
              </LocalizationProvider>
              {/* <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              /> */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          {alertType === "error" ? (
            <Alert className="signupAlert" severity="error">
              An Error has ocurred! {error}
            </Alert>
          ) : null}
          {alertType === "success" ? (
            <Alert className="signupAlert" severity="success">
              Your Account has successfully been created!
            </Alert>
          ) : null}
          {alertType === "warning1" ? (
            <Alert className="signupAlert" severity="warning">
              Please fill in all fields!
            </Alert>
          ) : null}
          {alertType === "warning2" ? (
            <Alert className="signupAlert" severity="warning">
              Please enter a valid Email!
            </Alert>
          ) : null}
          {alertType === "warning3" ? (
            <Alert className="signupAlert" severity="warning">
              Your password must be at least 8 characters long, contain at least
              one number, one symbol, one uppercase and one lowercase letter.
            </Alert>
          ) : null}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
