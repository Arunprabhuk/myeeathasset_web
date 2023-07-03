import React from "react";
import { Box, Grid, IconButton } from "@mui/material";
import OutlinedCard from "./common/Card/Card";
import { cardItems } from "../data/ComponentData";
import {
  activeUsers,
  assets,
  leftArrow,
  rightArrow,
  users,
} from "../helpers/icon";
import Slider from "react-slick";
import FullScreenDialog from "./common/Dialoge";
import UserCard from "./common/Card/UserCard";
import { useSelector } from "react-redux";
const ListComponent = () => {
  const [sliderRef, setSliderRef] = React.useState(null);
  const [state, setState] = React.useState({
    isUserDetails: false,
    isUserActive: false,
    isAssests: false,
  });
  const { allUserDetails, allUserAssetsDetails } = useSelector(
    (state) => state.user
  );

  const { isAssests, isUserActive, isUserDetails } = state;
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
  };
  const onHandleOpen = (id) => {
    switch (id) {
      case 1:
        setState((prev) => ({
          ...prev,
          isUserDetails: true,
        }));
        break;
      case 2:
        setState((prev) => ({
          ...prev,
          isUserActive: true,
        }));
        break;
      case 3:
        setState((prev) => ({
          ...prev,
          isAssests: true,
        }));
        break;
      default:
        return null;
    }
  };
  const onCloseUserDetails = () => {
    setState((prev) => ({
      ...prev,
      isUserActive: false,
      isAssests: false,
      isUserDetails: false,
    }));
  };
  const filterActiveUser =
    allUserDetails.length > 0 &&
    allUserDetails.filter((item) => item.Active === true);
  console.log(filterActiveUser);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f8f9fd",
          width: "100vw",
          height: "30vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            width: "60%",
            justifyContent: "center",
            position: "relative",
            //   backgroundColor: "#ffffff02",
            padding: 3,
            //   boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
            height: 300,
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              width: 50,
              height: 50,
              borderRadius: 50,
              top: "38%",
              left: -25,
              backgroundColor: "#FF9A6257",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={sliderRef?.slickNext}
          >
            <img src={leftArrow} style={{ width: 15, height: 19 }} alt="left" />
          </IconButton>
          <IconButton
            onClick={sliderRef?.slickPrev}
            sx={{
              position: "absolute",
              width: 50,
              height: 50,
              borderRadius: 50,
              top: "38%",
              right: -25,
              backgroundColor: "#FF9A6257",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={rightArrow} alt="left" />
          </IconButton>
          <Slider className="slider" ref={setSliderRef} {...sliderSettings}>
            {cardItems.map(({ title, id, image, color, shadow }) => {
              return (
                <OutlinedCard
                  title={title}
                  image={image}
                  id={id}
                  color={color}
                  shadow={shadow}
                  onHandleOpen={onHandleOpen}
                />
              );
            })}
          </Slider>
        </Grid>
      </Box>
      {isUserDetails && (
        <FullScreenDialog
          open={isUserDetails}
          handleClose={onCloseUserDetails}
          title="USER DETAILS"
          children={<UserCard userDetails={allUserDetails} />}
          icon={users}
        />
      )}
      {isUserActive && (
        <FullScreenDialog
          open={isUserActive}
          handleClose={onCloseUserDetails}
          title="ACTIVE USERS"
          children={<UserCard userDetails={filterActiveUser} isActive />}
          icon={activeUsers}
          isActive
        />
      )}
      {isAssests && (
        <FullScreenDialog
          open={isAssests}
          handleClose={onCloseUserDetails}
          title="USER ASSETS"
          children={<UserCard showAssetDetails userDetails={allUserDetails} />}
          icon={assets}
        />
      )}
    </>
  );
};

export default ListComponent;
