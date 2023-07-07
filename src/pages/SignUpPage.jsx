import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  InputAdornment,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerAdminUser } from "../redux/action/userAction";
import { ThreeDots } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const initialState = () => {
  return {
    fullname: "",
    email: "",
    password: "",
    role: "ADMIN",
    error: {
      fullnameErr: "",
      emailErr: "",
      passwordErr: "",
      isfullnameError: false,
      isemailError: false,
      ispasswordError: false,
    },
  };
};
const SignUpPage = () => {
  const [state, setState] = React.useState(initialState());
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [hidePassword, setHidePassword] = React.useState(true);
  const { isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { fullname, role, password, email, error } = state;
  const {
    fullnameErr,
    emailErr,
    passwordErr,
    isfullnameError,
    isemailError,
    ispasswordError,
  } = error;
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const onHandleChange = (e) => {
    const { name, value } = e.target;
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

  const open = Boolean(anchorEl);
  const checkValidation = () => {
    if (fullname === "") {
      setState((prev) => ({
        ...prev,
        error: {
          ...prev.error,
          fullnameErr: "Please Type Your Name",
          isfullnameError: true,
        },
      }));
      return;
    }
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
        return;
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
  const onHandleSubmit = () => {
    const isValid = checkValidation();
    if (isValid) {
      const data = {
        fullname,
        email,
        role,
        password,
      };
      console.log(data);
      dispatch(registerAdminUser(data));
    }
  };

  console.log("isLoading", isLoading);
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
      <ToastContainer />
      <Box sx={{ width: 400, height: 500 }}>
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
            Sign Up
          </Typography>
          <TextField
            name="fullname"
            value={fullname}
            onChange={onHandleChange}
            helperText={fullnameErr}
            error={isfullnameError}
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
            placeholder="full name"
            // InputProps={{
            //   endAdornment: (
            //     <InputAdornment
            //       position="end"
            //       sx={{
            //         "& .MuiTypography-root": {
            //           color: "green",
            //           fontSize: 12,
            //           cursor: "pointer",
            //         },
            //       }}
            //     >
            //       Verify
            //     </InputAdornment>
            //   ),
            // }}
          />
          <TextField
            name="email"
            value={email}
            onChange={onHandleChange}
            helperText={emailErr}
            error={isemailError}
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
            placeholder="abc@am.amrita.edu"
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
                  <Popover
                    id="mouse-over-popover"
                    sx={{
                      pointerEvents: "none",
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                  >
                    <Typography sx={{ p: 1, fontSize: 10 }}>
                      Use Amrita Email
                    </Typography>
                  </Popover>
                  <IconButton
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                  >
                    <InfoOutlinedIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            name="password"
            value={password}
            helperText={passwordErr}
            error={ispasswordError}
            onChange={onHandleChange}
            type={hidePassword ? "password" : "text"}
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
            placeholder="Password"
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
            onClick={onHandleSubmit}
          >
            {isLoading ? (
              <ThreeDots
                height="30"
                width="30"
                radius="9"
                color="#F24E1E"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              "Login"
            )}
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
              Already have an account?{" "}
              <Link to={"/"} style={{ fontWeight: "600", color: "tomato" }}>
                Log In
              </Link>
            </Typography>
          </Grid>
        </Card>
      </Box>
    </Grid>
  );
};

export default SignUpPage;
