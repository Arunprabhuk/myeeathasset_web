import React from "react";
import Header, { DrawerHeader } from "./common/Header";
import ListComponent from "./ListComponent";
import ActivityChart from "./ActivityChart";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllUserAssetsDetails,
  fetchAllUserDetails,
} from "../redux/action/userAction";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Paper,
} from "@mui/material";
import { DISABLE_IMAGE_SLIDER } from "../redux/actionType";
import ImageViewer from "./ImageViewer";

const MainContainer = () => {
  const dispatch = useDispatch();

  const { enableSlider } = useSelector((state) => state.user);
  React.useEffect(() => {
    dispatch(fetchAllUserDetails(1));
    dispatch(fetchAllUserAssetsDetails(1));
  }, []);
  return (
    <div>
      <Header />
      <DrawerHeader />
      <ListComponent />
      <ActivityChart />

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
