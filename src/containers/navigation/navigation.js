import React from "react";
import "./navigation.scss";
function Navigation() {
  return (
    <div className="navigation-container">
      <div className="navigation-container_first">
        <div className="navigation-container_first_logo">
          <img src={`${process.env.PUBLIC_URL}/images/Logo.svg`} />
        </div>
        <div className="navigation-container_first_text">
            Organick
        </div>
      </div>
      <div className="navigation-container_nav_bar">
        <a className="navigation-container_nav_bar_item" href="#">
          Home
        </a>
        <a className="navigation-container_nav_bar_item" href="#">
          About
        </a>
        <a className="navigation-container_nav_bar_item" href="#">
          Pages <img className="navigation-container_nav_bar_item_st" src={`${process.env.PUBLIC_URL}/images/st.svg`}/>
        </a>
        <a className="navigation-container_nav_bar_item" href="#">
          Shop
        </a>
        <a className="navigation-container_nav_bar_item" href="#">
          Projects
        </a>
        <a className="navigation-container_nav_bar_item" href="#">
          News
        </a>
      </div>
      <div className="navigation-container_btn">
        <div className="navigation-container_btn_search">
          <input type="text" placeholder=" " />
          <button>
              <img src={`${process.env.PUBLIC_URL}/images/Vector.svg`} />
          </button>
        </div>
        <div className="navigation-container_btn_basket">
          <button>
            <img src={`${process.env.PUBLIC_URL}/images/Icon.svg`}/>
          </button>
          <p>Cart (0)</p>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
