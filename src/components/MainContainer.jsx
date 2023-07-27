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
import {
  DISABLE_IMAGE_SLIDER,
  DISABLE_USER_ASSET_DETAILS_SLIDER,
} from "../redux/actionType";
import ImageViewer from "./ImageViewer";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import FullScreenDialog from "./common/Dialoge";
import UserCard from "./common/Card/UserCard";
import { assets } from "../helpers/icon";
const MainContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { enableSlider, enableUserAssetDetails, allUserAssetsDetails, id } =
    useSelector((state) => state.user);
  React.useEffect(() => {
    const id = localStorage.getItem("id");
    dispatch(fetchAllUserDetails(1));
    dispatch(fetchAllUserAssetsDetails(1));
    dispatch(fetchAdminDetails(id));
  }, []);
  const access = localStorage.getItem("isLoggedIn");
  const filterAssestDetailsById = allUserAssetsDetails.filter((item, index) => {
    return item.id === id;
  });
  console.log(filterAssestDetailsById, id);

  return (
    <div>
      <>
        {access ? (
          <>
            <ToastContainer />
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
      {enableUserAssetDetails && (
        <FullScreenDialog
          open={enableUserAssetDetails}
          handleClose={() =>
            dispatch({ type: DISABLE_USER_ASSET_DETAILS_SLIDER })
          }
          title="ASSET DETAILS"
          children={
            <UserCard
              showuSERAssetDetails={true}
              userDetails={filterAssestDetailsById}
            />
          }
          icon={assets}
        />
      )}
    </div>
  );
};

export default MainContainer;
