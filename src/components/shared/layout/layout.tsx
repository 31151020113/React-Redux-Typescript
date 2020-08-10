import React from "react";
import "./layout.scss";
import {
  makeStyles,
  useTheme,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import Theme from "../../../utils/theme";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import NavItemForDesktop from "../nav-item-for-desktop/nav-item-for-desktop";
import SideBar from "../sidebar/sidebar";
import NavRight from "../nav-right-for-desktop/nav-right-for-desktop";
import AccountCircle from "@material-ui/icons/AccountCircle";
// import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";

const drawerWidth = "100%";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    "& .MuiToolbar-root.MuiToolbar-regular.MuiToolbar-gutters": {
      padding: 0,
    },
    "& button:focus": {
      outline: "none",
    },
    "& .MuiToolbar-regular": {
      height: 76,
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    // background: "#6CEC6C",
    background:
      "linear-gradient(90deg, #FFCC00 3.02%, #FFCC00 29.86%, #FFDE59 71.33%, #FFF0B2 96.7%)",
    // boxShadow: "none",
    boxShadow: "0px 4px 4px rgba(147, 147, 147, 0.2)",
    color: "#2F2F30",
    position: "fixed",
    top: 0,
    padding: "0 15px",
    zIndex: 300,
    height: 60,
    [theme.breakpoints.up("sm")]: {
      marginLeft: "auto",
      display: "none",
    },
    "& .MuiToolbar-root": {
      display: "flex",
      justifyContent: "space-between",
    },
    "& svg": {
      width: "1.5em",
      height: "1.5em",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    position: "relative",
    zIndex: 1,
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    margin: "auto",
    position: "relative",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: "100%",
    minHeight: "calc(100vh - 156px)",
  },
  title: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    left: 0,
    width: "100%",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  closeIcon: {
    fontSize: "20px",
    top: "2px",
    left: "6px",
    position: "relative",
    color: Theme.primaryColor,
  },
  toolbarShow: {
    height: "125px",
    position: "relative",
    zIndex: 1,
    display: "flex",
  },
  category: {
    color: "#fff",
    fontSize: "18px",
    position: "absolute",
    bottom: "15px",
    left: "15px",
    top: "44px",
  },
  span: {
    backgroundColor: "#5B5551",
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    position: "absolute",
    top: "44px",
    right: "15px",
    cursor: "pointer",
  },
  divider: {
    position: "relative",
    zIndex: 1,
    padding: "0 15px",
    "& hr": {
      margin: 0,
      borderColor: "#C2C2C2",
    },
  },
  main: {
    paddingTop: "98px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "auto",
      paddingTop: 98,
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "auto",
      paddingTop: 98,
    },
  },
}));

const Layout = ({ children }: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navItem = [
    {
      to: "/",
      label: "Home",
      handleClick: () => {},
    },
    {
      to: "/product",
      label: "Product",
      handleClick: () => {},
    },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className="main-page">
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              onClick={handleDrawerToggle}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {children.props.title}
            </Typography>
            <div className="d-flex">
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton aria-label="account of current user" color="inherit">
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        <header className="app-header">
          <div className="headers">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="navigate">
                    <div className="left">
                      <div className="left-header">Spy Gian</div>
                    </div>
                    <div className="mid">
                      <div className="right-header">
                        <ul className="nav nav-for-desktop position-relative">
                          {navItem.map((item) => (
                            <NavItemForDesktop
                              key={item.label}
                              to={item.to}
                              label={item.label}
                              handleDrawerToggle={() => {}}
                              handleClick={item.handleClick}
                            />
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="right">
                      <NavRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <nav className={classes.drawer} aria-label="mailbox folders">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <div>
              <div className={classes.toolbarShow}>
                <span className={classes.span} onClick={handleDrawerToggle}>
                  <CloseIcon className={classes.closeIcon} />
                </span>

                <div className={classes.category}>Spy Gian</div>
              </div>

              <div className={classes.divider}>
                <hr />
              </div>

              <SideBar handleDrawerToggle={handleDrawerToggle} />
            </div>
          </Drawer>
        </nav>

        <div className={classes.main}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
