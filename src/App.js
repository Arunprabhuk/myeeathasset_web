import "./App.css";
import MainContainer from "./components/MainContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { Grid, Typography } from "@mui/material";

function App() {
  const access = localStorage.getItem("isLoggedIn");

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route element={<MainContainer />} path="/admin/dashboard" />
            <Route element={<LoginPage />} path="/" />
            <Route element={<SignUpPage />} path="/admin/signup" />
            <Route
              element={
                <Grid
                  sx={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 19,
                      fontWeight: 800,
                      color: "#00000090",
                    }}
                  >
                    404 Page Not Found
                  </Typography>
                </Grid>
              }
              path="*"
            />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
