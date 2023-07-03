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
const UserCard = ({ userDetails, showAssetDetails = false }) => {
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
                />
              );
            })
          ) : (
            <p>No Data Available</p>
          )}
        </Grid>
      </Grid>
      {enableSlider && (
        <Dialog
          fullScreen
          open={enableSlider}
          style={{
            marginTop: 140,
            height: 600,
            width: "19%",
            marginInline: "auto",
            borderRadius: "10px",
          }}
          onClose={() => dispatch({ type: DISABLE_IMAGE_SLIDER })}
        >
          <Paper
            style={{
              height: "100%",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <IconButton
              onClick={() => dispatch({ type: DISABLE_IMAGE_SLIDER })}
            >
              <img style={{ width: 25, height: 25 }} src={close} />
            </IconButton>

            <Slider>
              {filterImageNameById.length > 0 &&
                filterImageNameById.map((item) => {
                  return (
                    <div>
                      <img src={`${url}/${item.split("/").pop()}`} />
                    </div>
                  );
                })}
            </Slider>
          </Paper>
        </Dialog>
      )}
    </>
  );
};

export default UserCard;
