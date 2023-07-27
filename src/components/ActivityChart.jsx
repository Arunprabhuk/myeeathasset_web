import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

const ActivityChart = () => {
  const { allUserDetails } = useSelector((state) => state.user);
  const categories =
    allUserDetails.length > 0 &&
    allUserDetails.map((item) => {
      return item.email;
    });
  const data =
    allUserDetails.length > 0 &&
    allUserDetails.map((item) => {
      return item.noOfAssets;
    });
  const options = {
    chart: {
      type: "bar",
    },
    title: {
      text: "Assets Posted by Users",
      align: "left",
    },
    subtitle: {},
    xAxis: {
      min: 0,
      categories,
      title: {
        text: null,
      },
      gridLineWidth: 1,
      lineWidth: 0,
    },
    yAxis: {
      min: 1,
      max: 100,
      title: {
        text: "No of Assets (numbers)",
        align: "high",
      },
      labels: {
        overflow: "justify",
      },
      gridLineWidth: 0,
    },

    plotOptions: {
      bar: {
        borderRadius: "50%",
        dataLabels: {
          enabled: true,
        },
        groupPadding: 0.1,
      },
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "top",
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
      shadow: true,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Assets",
        data,
      },
    ],
  };
  return (
    <Grid
      sx={{
        height: "60vh",
        width: "100%",
        paddingBlock: 5,
      }}
    >
      {!data ? (
        <p>No data available</p>
      ) : (
        <HighchartsReact options={options} highcharts={Highcharts} />
      )}
    </Grid>
  );
};

export default ActivityChart;
