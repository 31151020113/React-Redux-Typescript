import React from "react";
import "./nav-right-for-desktop.scss";
import { ReactComponent as BellIcon } from "../../../assets/icons/bell.svg";
import { ReactComponent as MessengerIcon } from "../../../assets/icons/messenger.svg";
import { ReactComponent as CaretIcon } from "../../../assets/icons/caret.svg";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus.svg";
import { ReactComponent as CogIcon } from "../../../assets/icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../../../assets/icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow.svg";
import { ReactComponent as BoltIcon } from "../../../assets/icons/bolt.svg";
import { CSSTransition } from "react-transition-group";

const NavRight: React.FC<any> = () => {
  return (
    <div className="nav-right-desktop">
      <Navbar>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessengerIcon />} />

        <NavItem icon={<CaretIcon />}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
    </div>
  );
};

const Navbar: React.FC<any> = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
};

const NavItem: React.FC<any> = (props) => {
  const [open, setOpen] = React.useState(false);
  const nodeRef = React.useRef<HTMLLIElement>(null);

  const handleClick = (event: any) => {
    if (nodeRef.current) {
      if (nodeRef.current.contains(event.target)) {
        // inside click
        return;
      }
      // outside click
      setOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <li className="nav-item" ref={nodeRef}>
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
};

const DropdownMenu: React.FC<any> = () => {
  const [activeMenu, setActiveMenu] = React.useState("main");
  const [menuHeight, setMenuHeight] = React.useState(120);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (dropdownRef.current) {
      setMenuHeight(dropdownRef.current.offsetHeight);
    }
  }, []);

  const calcHeight = (el: any) => {
    const height = el.offsetHeight;
    console.log("height", height);
    setMenuHeight(height);
  };

  const DropdownItem: React.FC<any> = (props) => {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  };

  return (
    <div
      className="dropdown"
      style={{ height: menuHeight + 30 }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon="🦔">My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="animals"
          >
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Hobby</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Sleeping</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Eating</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Playing</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "animals"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default NavRight;
