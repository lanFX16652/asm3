import React from "react";
import Title from "../Title/Title";
import classes from "./Categories.module.css";

import product_1 from "../../../../assets/images/product_1.png";
import product_2 from "../../../../assets/images/product_2.png";
import product_3 from "../../../../assets/images/product_3.png";
import product_4 from "../../../../assets/images/product_4.png";
import product_5 from "../../../../assets/images/product_5.png";

const dummy = [
  {
    name: "apple",
    image: product_1,
  },
  {
    name: "iphone",
    image: product_2,
  },
  {
    name: "ipad",
    image: product_3,
  },
  {
    name: "watch",
    image: product_4,
  },
  {
    name: "airpods",
    image: product_5,
  },
];

const Categories = () => {
  return (
    <div>
      <Title
        title="CAREFULLY CREATE COLLECTIONS"
        subtitle="BROWSE OUR CATEGORIES"
        className={classes.title}
      />

      <div className={classes["category-wrapper"]}>
        {dummy.map((item, index) => {
          const classname =
            index < 2 ? classes["big-image"] : classes["small-image"];

          return (
            <div key={item.image} className={classname}>
              <img src={item.image} />
              <button>View</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
