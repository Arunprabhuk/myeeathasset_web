import {
  Avatar,
  Grid,
  IconButton,
  Paper,
  Popover,
  Typography,
} from "@mui/material";
import moment from "moment";
import React from "react";
import { useService } from "../../../helpers/useService";
import { details, viewGreen } from "../../../helpers/icon";
import { useDispatch } from "react-redux";
import {
  ENABLE_IMAGE_SLIDER,
  ENABLE_USER_ASSET_DETAILS_SLIDER,
} from "../../../redux/actionType";

const UserList = ({
  item,
  id,
  showAssetDetails,
  isActive,
  showuSERAssetDetails,
}) => {
  const dispatch = useDispatch();
  const flexWidth = showAssetDetails ? 0.25 : 0.2;
  const URL = useService();
  const onHandleOpen = (e, id) => {
    e.preventDefault();
    dispatch({ type: ENABLE_IMAGE_SLIDER, payload: id });
  };
  const onHandleOpenAssetDetails = (e, id) => {
    e.preventDefault();
    dispatch({ type: ENABLE_USER_ASSET_DETAILS_SLIDER, payload: id });
  };

  return (
    <>
      <Grid
        sx={{
          width: "70%",
          height: 70,
          marginBlock: 2,
        }}
        key={id}
      >
        <Paper
          sx={{
            width: "100%",
            height: "100%",
            padding: 5,
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            position: "relative",
          }}
        >
          {!showAssetDetails && !showuSERAssetDetails && (
            <>
              <Grid
                sx={{
                  flex: flexWidth,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{ width: 50, height: 50 }}
                  src={`${URL}/${item?.profilePicture.split("/").pop()}`}
                />
                <Grid sx={{ marginLeft: 3 }}>
                  <Typography
                    sx={{ fontSize: 16, textTransform: "capitalize" }}
                  >
                    {item.fullname}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                sx={{
                  flex: flexWidth,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: 16, textTransform: "capitalize" }}>
                  {item.role}
                </Typography>
              </Grid>
              <Grid
                sx={{
                  flex: flexWidth,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: 16, textTransform: "capitalize" }}>
                  {item.email}
                </Typography>
              </Grid>
              <Grid
                sx={{
                  flex: flexWidth,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: 16, textTransform: "capitalize" }}>
                  {moment(item.createdAt).format("MMM Do YY")}
                </Typography>
              </Grid>

              <Grid
                sx={{
                  flex: flexWidth,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: 16, textTransform: "capitalize" }}>
                  {item.contactNumber}
                </Typography>
              </Grid>
              {isActive && (
                <Grid
                  sx={{
                    position: "absolute",
                    width: 20,
                    height: 20,
                    right: 25,
                    top: 30,
                    borderRadius: 20,
                    backgroundColor: "green",
                  }}
                />
              )}
            </>
          )}
          {showAssetDetails && (
            <>
              <Grid
                sx={{
                  flex: flexWidth,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{ width: 50, height: 50 }}
                  src={`${URL}/${item?.profilePicture.split("/").pop()}`}
                />
                <Grid sx={{ marginLeft: 3 }}>
                  <Typography
                    sx={{ fontSize: 16, textTransform: "capitalize" }}
                  >
                    {item.fullname}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                sx={{
                  flex: flexWidth,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: 16, textTransform: "capitalize" }}>
                  {item.role}
                </Typography>
              </Grid>
              <Grid
                sx={{
                  flex: flexWidth,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: 16, textTransform: "capitalize" }}>
                  {item.email}
                </Typography>
              </Grid>
              <Grid
                sx={{
                  flex: flexWidth,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    cursor: "pointer",
                    marginLeft: 5,
                    textTransform: "capitalize",
                  }}
                >
                  {item.noOfAssets}
                </Typography>
                <IconButton onClick={(e) => onHandleOpen(e, item.id)}>
                  {item.noOfAssets !== 0 && <img src={viewGreen} />}
                </IconButton>
              </Grid>
              <Grid
                sx={{
                  flex: flexWidth,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconButton
                  style={{ marginLeft: 50 }}
                  onClick={(e) => onHandleOpenAssetDetails(e, item.id)}
                >
                  {item.noOfAssets !== 0 && <img src={details} />}
                </IconButton>
              </Grid>
            </>
          )}
          {showuSERAssetDetails && (
            <>
              <Grid
                sx={{
                  flex: flexWidth,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: 16, textTransform: "capitalize" }}>
                  Image
                </Typography>
              </Grid>
              <Grid
                sx={{
                  flex: flexWidth,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: 16, textTransform: "capitalize" }}>
                  Image
                </Typography>
              </Grid>
              <Grid
                sx={{
                  flex: flexWidth,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: 16, textTransform: "capitalize" }}>
                  {item.tags.length > 0 ? item.tags : "-"}
                </Typography>
              </Grid>
              <Grid
                sx={{
                  flex: flexWidth,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 11,
                    textTransform: "capitalize",
                  }}
                >
                  {item.description}
                </Typography>
              </Grid>
              <Grid
                sx={{
                  flex: flexWidth,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: 16, textTransform: "capitalize" }}>
                  {moment(item.createdAt).format("MMM Do YY")}
                </Typography>
              </Grid>
            </>
          )}
        </Paper>
      </Grid>
    </>
  );
};

export default UserList;
