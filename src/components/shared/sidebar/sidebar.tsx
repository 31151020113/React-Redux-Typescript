import React from "react";
import "./sidebar.scss";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PersonIcon from "@material-ui/icons/Person";
// import HeadsetIcon from "@material-ui/icons/Headset";
// import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import ButtonDrawer from "../drawer/drawer";
import { Link } from "react-router-dom";
import NavItem from "../nav-item/nav-item";

const Sidebar = ({ handleDrawerToggle }: any) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggleBack = () => {
    setMobileOpen(!mobileOpen);
  };
  const navItem = [
    {
      to: "/",
      label: "Home",
      iconClass: <HomeOutlinedIcon />,
      handleClick: () => {},
    },
    {
      to: "/product",
      label: "Product",
      iconClass: <HomeOutlinedIcon />,
      handleClick: () => {},
    },
    {
      label: "About",
      handleClick: () => handleDrawerToggleBack(),
      iconClass: <PersonIcon />,
    },
  ];

  const infoSupport = () => {
    return [
      {
        name: "Contact",
        icon: "headset_mic",
        title: "Contact",
        description: "Kieu Huynh Nhu Phuong",
        phoneNumber: "613.503.2365",
        email: "phuongkieu97.k41@st.ueh.edu.vn",
      },
      {
        name: "Info",
        icon: "verified_user",
        title: "Information",
        description: "Kieu Huynh Nhu Phuong",
        phoneNumber: "613.503.2365",
        email: "phuongkieu@futurify.vn",
      },
    ];
  };
  return (
    <div id="side-bar">
      <div className="form-background">
        <div className="background-image" />
        <div className="backdrop"></div>
      </div>

      <ul className="nav mt-3 flex-column position-relative">
        {navItem.map((item) => (
          <NavItem
            key={item.label}
            to={item.to}
            label={item.label}
            handleDrawerToggle={handleDrawerToggle}
            iconClass={item.iconClass}
            handleClick={item.handleClick}
          />
        ))}
      </ul>

      <ButtonDrawer
        title={"Test"}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggleBack}
        content={
          <div className="support">
            <div className="mt-5">
              {infoSupport().map((support) => (
                <div className="box-support mt-3" key={support.name}>
                  <div className="box-support-content">
                    <div className="box-support-content-left">
                      <span>
                        <i className="material-icons">{support.icon}</i>
                      </span>
                    </div>
                    <div className="box-support-content-right">
                      <div className="title text-left">{support.title}</div>
                      <div className="description">{support.description}</div>
                      <div className="contact">
                        <div>
                          <a href={`tel:${support.phoneNumber}`}>
                            <i className="material-icons mr-2">local_phone</i>
                            {"Phone number"}
                          </a>
                        </div>
                        <div>
                          <a href={`mailto:${support.email}`}>
                            <i className="material-icons mr-2">email</i>
                            {"Email"}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-3 text-back">
              <Link to={"/"} onClick={handleDrawerToggleBack}>
                Back Home
              </Link>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Sidebar;
