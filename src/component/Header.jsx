import React from "react";
import Button from "./Button";
import Search from "./Search";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-menu">
        <div className="header-menu-item header-menu-item-box">Hamburger</div>
        <div className="header-menu-item">
          <img src="../images/disney-hotstar-logo-dark.svg" height="95%" />
        </div>
      </div>
      <div className="header-menu">
        <Search className="header-menu-item" />
        <Button
          className="header-menu-item header-menu-item-box"
          bgcolor="#1f80e0"
          color=""
          fontSize="10px"
          text="SUBSCRIBE"
        />
        <div className="header-menu-item header-menu-item-box">Login</div>
      </div>
    </div>
  );
}
