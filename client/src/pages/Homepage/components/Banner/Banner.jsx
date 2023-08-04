import React from "react";
import classes from "./Banner.module.css";
import banner from "../../../../assets/images/banner1.jpg";

const Banner = () => {
  return (
    <div className={`${classes.banner}`}>
      <img src={banner} />
      <div className={classes["banner-content-wrapper"]}>
        <h6>NEW INSPIRATION 2020</h6>
        <h1>20% OFF ON NEW SEASON</h1>
        <button className={classes["banner-button"]}>Browse Collections</button>
      </div>
    </div>
  );
};

export default Banner;
