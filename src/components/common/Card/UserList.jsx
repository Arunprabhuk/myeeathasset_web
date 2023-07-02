import { Avatar, Grid, IconButton, Paper, Typography } from "@mui/material";
import moment from "moment";
import React from "react";
import { useService } from "../../../helpers/useService";
import { viewGreen } from "../../../helpers/icon";
import { useDispatch } from "react-redux";
import { ENABLE_IMAGE_SLIDER } from "../../../redux/actionType";

const UserList = ({ item, id, showAssetDetails }) => {
  const dispatch = useDispatch();
  console.log(`${useService()}/${item?.profilePicture.split("\\").pop()}`);
  const flexWidth = showAssetDetails ? 0.25 : 0.2;
  // const getImage = (process.env.REACT_APP_MODE = "production" ? "/" : "\\");
  const onHandleOpen = (id) => {
    dispatch({ type: ENABLE_IMAGE_SLIDER, payload: id });
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
            boxShadow: "0px 4px 4px 0px rgba(136, 238, 152, 0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
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
              src={`${useService()}/${item?.profilePicture.split("/").pop()}`}
            />
            <Grid sx={{ marginLeft: 3 }}>
              <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
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
            <Typography>{item.role}</Typography>
          </Grid>
          <Grid
            sx={{
              flex: flexWidth,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography>{item.email}</Typography>
          </Grid>
          {!showAssetDetails && (
            <>
              <Grid
                sx={{
                  flex: flexWidth,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography>
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
                <Typography>{item.contactNumber}</Typography>
              </Grid>
            </>
          )}
          {showAssetDetails && (
            <Grid
              sx={{
                flex: flexWidth,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ cursor: "pointer", marginLeft: 5 }}>
                {item.noOfAssets}
              </Typography>
              <IconButton onClick={() => onHandleOpen(item.id)}>
                {item.noOfAssets !== 0 && <img src={viewGreen} />}
              </IconButton>
            </Grid>
          )}
        </Paper>
      </Grid>
    </>
  );
};

export default UserList;
