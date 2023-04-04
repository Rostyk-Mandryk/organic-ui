import React from "react";
import "./aboutUs.scss";

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-container_title">
        <div className="about-us-container_title_img">
          <img
            className="about-us-container_title_img_gl"
            src={`${process.env.PUBLIC_URL}/images/about.svg`}
          />
        </div>
        <div className="about-us-container_title_text">
          <div className="about-us-container_title_text_about">About Us</div>
          <div className="about-us-container_title_text_belive">We Believe in Working Accredited Farmers</div>
          <div className="about-us-container_title_text_simply">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </div>
          <div className="about-us-container_title_text_group">
          <div className="about-us-container_title_text_group_card">
            <div className="about-us-container_title_text_group_card_white">
            <img
              className=""
              src={`${process.env.PUBLIC_URL}/images/Group 1.svg`}
            />
                </div>
            <div className="about-us-container_title_text_group_card_obj">
            <div className="organic">Organic Foods Only</div>
            <div className="lorem">
                Simply dummy text of the printing and typesetting industry. Lorem
                Ipsum
            </div>
            </div>
           
        </div>
            <div className="about-us-container_title_text_group_card">
                <div className="about-us-container_title_text_group_card_white">
                <img
              className=""
              src={`${process.env.PUBLIC_URL}/images/Group 2.svg`}
            />
                </div>
            <div className="about-us-container_title_text_group_card_obj">
            <div className="organic">Quality Standards</div>
            <div className="lorem">
                Simply dummy text of the printing and typesetting industry. Lorem
                Ipsum
            </div>
            </div>
             
        </div>
           
          </div>
          <div className="about-us-container_title_text_low">
          <button
            onclick="window.location.href='#'"
            className="eabout-us-container_title_text_low_button"
          >
            Shop Now
            <img
              className="btn"
              src={`${process.env.PUBLIC_URL}/images/Aerrow.svg`}
            />
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
