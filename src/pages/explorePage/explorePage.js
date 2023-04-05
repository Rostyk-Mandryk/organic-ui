import React from "react";
import "./explorePage.scss";

function ExplorePage() {
  return (
    // <div style={{ height: 898, backgroundImage: `url(${process.env.PUBLIC_URL}/images/Background.png`}}/>
    <div className="explore-container" style={{ height: 898, backgroundImage: `url(${process.env.PUBLIC_URL}/images/Background.png`}}>
      <div className="explore-container_content">
        <div className="explore-container_content_title">100% Natural Food</div>
        <div className="explore-container_content_description">
          Choose the best healthier way of life
        </div>
        <div className="explore-container_content_low">
          <button
            onclick="window.location.href='#'"
            className="explore-container_content_low_button"
          >
            Explore Now<img className="navigation-container_nav_bar_item_st" src={`${process.env.PUBLIC_URL}/images/Aerrow.svg`}/>
          </button>
        </div>
      </div>
      <div className="explore-container_image">
      <img src={`${process.env.PUBLIC_URL}/images/glv.png`} />
      </div>
    </div>
  );
}
export default ExplorePage;
