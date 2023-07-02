import React from "react";
import Header, { DrawerHeader } from "./common/Header";
import ListComponent from "./ListComponent";
import ActivityChart from "./ActivityChart";
import { useDispatch } from "react-redux";
import {
  fetchAllUserAssetsDetails,
  fetchAllUserDetails,
} from "../redux/action/userAction";

const MainContainer = () => {
  const dispatch = useDispatch();
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
    </div>
  );
};

export default MainContainer;
