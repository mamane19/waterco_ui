import React, { useState } from "react";
import { Navbar } from "react-bulma-components";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";

export default function Header(props) {
  const [isVisbile, setVisibility] = useState(false);

  const navItems = [
    { title: "Water Co.", url: "/" },
    { title: "Clients", url: "/members" },
    { title: "Payments", url: "/payments" },
    { title: "Primises", url: "/primises" },
    { title: "Routes", url: "/routes" },
  ];

  return (
    <div className="header">
      <Navbar active={isVisbile} onClick={() => setVisibility(!isVisbile)}>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="/">
            <img src="images/logo.png" height={50} />
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container>
            {navItems.map((nav, index) => {
              return (
                <Navbar.Item
                  hoverable={true}
                  href={nav.url}
                  key={index}
                  className="title is-size-5"
                >
                  {nav.title}
                </Navbar.Item>
              );
            })}
          </Navbar.Container>
          <Navbar.Container position="end">
            <Navbar.Item
              className="profile_container dropdown"
              data-for="settingsTip"
            >
              <div className="dropdown is-hoverable">
                <div className="dropdown-trigger">
                  <button
                    className="button"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu4"
                  >
                    <span>{props.username}</span>
                    <span className="icon is-small">
                      <BsChevronDown />
                    </span>
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                  <div className="dropdown-content">
                    <div className="dropdown-item">
                      <Link href="/profile">
                        <p className="is-size-6">Edit Profile</p>
                      </Link>
                    </div>
                    <div className="dropdown-item">
                      <p className="is-size-6">Manage users</p>
                    </div>
                    <hr className="dropdown-divider" />
                    <div
                      className="dropdown-item"
                      onClick={props.handleSignOut}
                    >
                      <p className="is-size-6 has-text-danger">Sign Out</p>
                    </div>
                  </div>
                </div>
              </div>
            </Navbar.Item>
            <ReactTooltip id="settingsTip" place="top" effect="solid">
              Settings
            </ReactTooltip>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    </div>
  );
}

Header.propTypes = {
  username: PropTypes.string.isRequired,
  profileURL: PropTypes.string,
  handleSignOut: PropTypes.func,
};
