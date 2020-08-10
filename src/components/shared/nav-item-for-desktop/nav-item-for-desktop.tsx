import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./nav-item-for-desktop.scss";

const NavItemForDesktop = ({
  isActive,
  to,
  label,
  handleDrawerToggle,
  handleClick,
}: any) => {
  let classes = ["nav-link", "cur"];
  if (isActive) classes.push("active");

  return (
    <li className="nav-item nav-item-for-desktop" onClick={handleDrawerToggle}>
      {to ? (
        <Link
          onClick={(e) => {
            if (handleClick) handleClick();
            isActive && e.preventDefault();
          }}
          className={classes.join(" ")}
          to={to}
        >
          <span className="nav-label">{label}</span>
        </Link>
      ) : (
        <div
          onClick={() => {
            if (handleClick) handleClick();
          }}
          className={classes.join(" ")}
        >
          <span className="nav-label">{label}</span>
        </div>
      )}
    </li>
  );
};

export default withRouter(({ location, ...props }: any) => {
  let isActive = false;

  if (props.to) {
    isActive = location.pathname === props.to.split("?")[0];
  }

  return <NavItemForDesktop {...props} isActive={isActive} />;
});
