import React from "react";
import UserList from "./UserList";
import { Dialog, Grid, IconButton, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import UserTableHeader from "./UserTableHeader";
import { DISABLE_IMAGE_SLIDER } from "../../../redux/actionType";
import Slider from "react-slick";
import { useService } from "../../../helpers/useService";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { close } from "../../../helpers/icon";
import { width } from "@mui/system";
const UserCard = ({
  userDetails,
  showAssetDetails = false,
  isActive = false,
}) => {
  const { enableSlider, id, allUserAssetsDetails } = useSelector(
    (state) => state.user
  );
  console.log(id, "id");
  const dispatch = useDispatch();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const filterImageNameById =
    allUserAssetsDetails.length > 0 &&
    allUserAssetsDetails
      .filter((item) => {
        return item.id === id;
      })
      .map((item) => item.imageUrl);
  console.log(filterImageNameById);
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
        <UserTableHeader showAssetDetails={showAssetDetails} />
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
