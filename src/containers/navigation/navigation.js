import React from "react";
import "./navigation.scss";
function Navigation() {
  return (
    <div className="navigation-container">
      <div className="logo">
      <img src='process.env.PUBLIC_URL/images/Logo.svg'/>
      </div>
      <div className="navigation-container_nav_bar">
        <a className="navigation-container_nav_bar_item" href="#">
          HOME
        </a>
        <a className="navigation-container_nav_bar_item" href="#">
          PROJECT
        </a>
        <a className="navigation-container_nav_bar_item" href="#">
          SERVICES
        </a>
        <a className="navigation-container_nav_bar_item" href="#">
          ABOUT
        </a>
        <a className="navigation-container_nav_bar_item" href="#">
          BLOG
        </a>
        <a className="navigation-container_nav_bar_item" href="#">
          SHOP
        </a>
        <a className="navigation-container_nav_bar_item" href="#">
          CONTACT
        </a>
      </div>
      <div className="navigation-container_reg">
        <a href="#">Sign up</a>
      </div>
    </div>
  );
}

export default Navigation;
