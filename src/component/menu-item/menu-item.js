import React from "react";
import "./menu-item.style.scss";

const Menus = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        {/* <img src={imageUrl} alt="" /> */}
        <div className="menu-content">
          <h2>{title}</h2>
          <h3>SHOP NOW</h3>
        </div>
      </div>
    </div>
  );
};
export default Menus;
