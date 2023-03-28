import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useGetDashboardQuery } from "redux/api";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-max: 1200px)");
  const {data, isLoading} = useGetDashboardQuery();

  console.log(data, 'data===>');

  return <div>Dashboard</div>;
};

export default Dashboard;
