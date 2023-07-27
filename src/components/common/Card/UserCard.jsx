import React from "react";
import UserList from "./UserList";
import { Dialog, Grid, IconButton, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import UserTableHeader from "./UserTableHeader";
import { useService } from "../../../helpers/useService";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const UserCard = ({
  userDetails,
  showAssetDetails = false,
  isActive = false,
  showuSERAssetDetails = false,
}) => {
  const { enableSlider, id, allUserAssetsDetails } = useSelector(
    (state) => state.user
  );

  const filterImageNameById =
    allUserAssetsDetails.length > 0 &&
    allUserAssetsDetails
      .filter((item) => {
        return item.id === id;
      })
      .map((item) => item.imageUrl);

  const url = useService();
  return (
    <>
      <Grid
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <UserTableHeader
          showuSERAssetDetails={showuSERAssetDetails}
          showAssetDetails={showAssetDetails}
        />
        <Grid
          sx={{
            margin: 1,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflowY: "scroll",
          }}
        >
          {userDetails.length > 0 ? (
            userDetails.map((item, index) => {
              return (
                <UserList
                  showAssetDetails={showAssetDetails}
                  showuSERAssetDetails={showuSERAssetDetails}
                  item={item}
                  id={index}
                  isActive={isActive}
                />
              );
            })
          ) : (
            <p>No Data Available</p>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default UserCard;
