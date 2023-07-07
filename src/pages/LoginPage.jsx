import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useDispatch, useSelector } from "react-redux";
import { loginAdminUser } from "../redux/action/userAction";

const initialState = () => {
  return {
    email: "",
    password: "",
    error: {
      emailErr: "",
      passwordErr: "",
      isemailError: false,
      ispasswordError: false,
    },
  };
};
const LoginPage = () => {
  const [state, setState] = React.useState(initialState());
  const [hidePassword, setHidePassword] = React.useState(true);
  const { email, password, error } = state;
  const { emailErr, isemailError, ispasswordError, passwordErr } = error;
  const { isLoggedin } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(isLoggedin);
  const navigate = useNavigate();
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    e.preventDefault();
    setState((prev) => ({
      ...prev,
      [name]: value,
      error: {
        ...prev.error,
        [name + "Err"]: "",
        ["is" + name + "Error"]: false,
      },
    }));
  };
  const checkValidation = () => {
    if (email === "") {
      setState((prev) => ({
        ...prev,
        error: {
          ...prev.error,
          emailErr: "Please Type Your Email (abc@am.amrita.edu)",
          isemailError: true,
        },
      }));
      return;
    }
    if (email !== "") {
      const domai = "am.amrita.edu";
      const pattern = /@am\.amrita\.edu$/;
      const isValid = pattern.test(email);
      if (!isValid) {
        setState((prev) => ({
          ...prev,
          error: {
            ...prev.error,
            emailErr: "Enter Your Amrita Email",
            isemailError: true,
          },
        }));
      }
    }
    if (password === "") {
      setState((prev) => ({
        ...prev,
        error: {
          ...prev.error,
          passwordErr: "Please Type Your password",
          ispasswordError: true,
        },
      }));
      return;
    }
    return true;
  };

  const onHandleClick = () => {
    const isValid = checkValidation();
    if (isValid) {
      const data = {
        email,
        password,
      };
      const isValid = checkValidation();
      dispatch(loginAdminUser(data));
    }
  };
  React.useEffect(() => {
    if (isLoggedin || localStorage.getItem("isLoggedIn")) {
      navigate("/dashboard", { replace: true });
    }
  }, [isLoggedin]);
  return (
    <Grid
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: 400, height: 400 }}>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            // justifyContent: "center",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            borderRadius: 10,
            position: "relative",
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "19px",
              letterSpacing: "1px",
              marginBottom: [4, "!important"],
              paddingTop: 2,
            }}
          >
            Log In
          </Typography>
          <TextField
            name="email"
            value={email}
            sx={{
              marginBlock: 1,
              borderRadius: 5,
              width: 300,
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: 2,
                borderColor: "#fbd9c9",
              },
              "& .MuiOutlinedInput-root": {
                " &.Mui-focused fieldset": {
                  borderColor: "#fbd9c9",
                },
                "&:hover fieldset": {
                  borderColor: "#fbd9c950",
                },
              },
            }}
            helperText={emailErr}
            error={isemailError}
            placeholder="abc@am.amrita.edu"
            onChange={onHandleChange}
          />
          <TextField
            sx={{
              marginBlock: 2,
              width: 300,
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: 2.5,
                borderColor: "#fbd9c9",
              },
              "& .MuiOutlinedInput-root": {
                " &.Mui-focused fieldset": {
                  borderColor: "#fbd9c9",
                },
                "&:hover fieldset": {
                  borderColor: "#fbd9c950",
                },
              },
            }}
            helperText={passwordErr}
            error={ispasswordError}
            type={hidePassword ? "password" : "text"}
            placeholder="Password"
            name="password"
            value={password}
            onChange={onHandleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{
                    "& .MuiTypography-root": {
                      color: "green",
                      fontSize: 12,
                      cursor: "pointer",
                    },
                  }}
                >
                  <IconButton onClick={() => setHidePassword(!hidePassword)}>
                    {hidePassword ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            sx={{
              marginBlock: 2,
              backgroundColor: "#fbd9c9",
              width: "223px",
              color: "white",
              fontWeight: "700",
              "&:hover": {
                backgroundColor: "#fbd9c9",
                color: "white",
              },
            }}
            onClick={onHandleClick}
          >
            Login
          </Button>
          <Grid
            sx={{
              position: "absolute",
              width: "100%",
              backgroundColor: "#fbd9c990",
              height: "50px",
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: 12 }}>
              Create an account?{" "}
              <Link
                to={"/signup"}
                style={{ fontWeight: "600", color: "tomato" }}
              >
                Sign Up
              </Link>
            </Typography>
          </Grid>
        </Card>
      </Box>
    </Grid>
  );
};

export default LoginPage;
