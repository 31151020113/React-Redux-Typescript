import React from "react";
import { makeStyles, useTheme, Drawer } from "@material-ui/core";
import "./drawer.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      flexShrink: 0,
    },
  },

  drawerPaper: {
    [theme.breakpoints.up("sm")]: {
      width: "600px",
      margin: "0 auto",
      position: "relative",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "0",
    },
  },
}));

const ButtonDrawer = ({
  mobileOpen,
  handleDrawerToggle,
  title,
  content,
}: any) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      variant="temporary"
      anchor={theme.direction === "rtl" ? "left" : "right"}
      open={mobileOpen}
      onClose={handleDrawerToggle}
      classes={{
        paper: classes.drawerPaper,
      }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <div className="drawer">
        <div className="title title-drawer">
          <ArrowBackIcon
            className="cur"
            fontSize="inherit"
            onClick={handleDrawerToggle}
          />{" "}
          {title}
        </div>

        <div className="content-drawer">{content}</div>
      </div>
    </Drawer>
  );
};

export default ButtonDrawer;
