import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

const UserTableHeader = ({ showAssetDetails, showuSERAssetDetails }) => {
  const flexWidth = showAssetDetails ? 0.25 : 0.2;
  return (
    <Grid
      sx={{
        width: "70%",
        height: 70,
        marginBlock: 2,
      }}
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
        }}
      >
        {showuSERAssetDetails && (
          <>
            <Grid
              sx={{
                flex: flexWidth,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Grid sx={{ marginLeft: 10 }}>
                <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                  Asset Name
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
              <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                Type
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
              <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                Tags
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
              <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                Details
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
              <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                Date Received
              </Typography>
            </Grid>
          </>
        )}
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
              <Grid sx={{ marginLeft: 3 }}>
                <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                  Name
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
              <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                Type
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
              <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                Email
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
              <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                Valid At
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
              <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                Mobile Number
              </Typography>
            </Grid>
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
              <Grid sx={{ marginLeft: 3 }}>
                <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                  Name
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
              <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                Type
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
              <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                Email
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
                  fontSize: 16,
                  fontWeight: "bold",
                  cursor: "pointer",
                  marginLeft: 5,
                }}
              >
                No Of Assets
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
                  fontSize: 16,
                  fontWeight: "bold",
                  cursor: "pointer",
                  marginLeft: 5,
                }}
              >
                Asset Details
              </Typography>
            </Grid>
          </>
        )}
      </Paper>
    </Grid>
  );
};

export default UserTableHeader;
