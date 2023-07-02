import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

const UserTableHeader = ({ showAssetDetails }) => {
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
          <Typography>Role</Typography>
        </Grid>
        <Grid
          sx={{
            flex: flexWidth,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography>Email</Typography>
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
              <Typography>Created At</Typography>
            </Grid>

            <Grid
              sx={{
                flex: flexWidth,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography>Mobile Number</Typography>
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
              No Of Assets
            </Typography>
          </Grid>
        )}
      </Paper>
    </Grid>
  );
};

export default UserTableHeader;
