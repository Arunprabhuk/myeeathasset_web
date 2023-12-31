import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Avatar, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { dashboard, logo, menu } from "../../helpers/icon";

const drawerWidth = 240;

export const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));
const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    width: "100%",
    padding: "10px 20px",
    boxShadow: "0px 4px 4px 0px rgba(53, 243, 255, 0.07)",
    borderRadius: "5px 0px 0px 5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gridArea: "header",
    height: 65,
  },
  header: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  image: {
    width: 37,
    height: 37,
  },
  title: {
    fontSize: ["1.5rem", "!important"],
    color: "#00000060",
    fontWeight: "bold",
    marginLeft: [10, "!important"],
  },
  menu: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className={classes.root}>
          <Grid className={classes.header}>
            <img src={dashboard} className={classes.image} alt="dashboard" />
            <Typography className={classes.title}>Dashboard</Typography>
          </Grid>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <img src={menu} className={classes.image} alt="dashboard" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          <img style={{ marginLeft: "40px" }} src={logo} />
        </DrawerHeader>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            paddingTop: "60px",
          }}
        >
          <Avatar />
          <Typography sx={{ fontSize: 15, fontWeight: "900" }}>
            FullName
          </Typography>
          <Typography
            sx={{ fontSize: 14, fontWeight: "bold", color: "#00000045" }}
          >
            Admin
          </Typography>
        </Grid>
      </Drawer>
    </Box>
  );
}
