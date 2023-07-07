import React from "react";
import Header, { DrawerHeader } from "./common/Header";
import ListComponent from "./ListComponent";
import ActivityChart from "./ActivityChart";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAdminDetails,
  fetchAllUserAssetsDetails,
  fetchAllUserDetails,
} from "../redux/action/userAction";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { DISABLE_IMAGE_SLIDER } from "../redux/actionType";
import ImageViewer from "./ImageViewer";
import { useNavigate } from "react-router-dom";

const MainContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { enableSlider } = useSelector((state) => state.user);
  React.useEffect(() => {
    const id = localStorage.getItem("id");
    dispatch(fetchAllUserDetails(1));
    dispatch(fetchAllUserAssetsDetails(1));
    dispatch(fetchAdminDetails(id));
  }, []);
  const access = localStorage.getItem("isLoggedIn");

  return (
    <div>
      <>
        {access ? (
          <>
            <Header />
            <DrawerHeader />
            <ListComponent />
            <ActivityChart />
          </>
        ) : (
          <Grid
            sx={{
              width: "100%",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography>
              Don't have an Access. Please{" "}
              <Button
                onClick={() => {
                  navigate("/");
                }}
              >
                Login
              </Button>
            </Typography>
          </Grid>
        )}
      </>

      {enableSlider && (
        <Dialog
          open={enableSlider}
          maxWidth={"xl"}
          fullWidth={"xl"}
          onClose={() => dispatch({ type: DISABLE_IMAGE_SLIDER })}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{ height: "100vh" }}
        >
          <ImageViewer />
        </Dialog>
      )}
    </div>
  );
};

export default MainContainer;
