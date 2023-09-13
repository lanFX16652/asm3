import React, { useState } from "react";
import Title from "../Title/Title";
import classes from "./Categories.module.css";
import { useEffect } from "react";
import axiosInstance from "../../../../apis/axios";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const result = await axiosInstance.get("category");
      setCategory(result.data.category);
    };

    fetchCategory();
  }, []);

  return (
    <div>
      <Title
        title="CAREFULLY CREATE COLLECTIONS"
        subtitle="BROWSE OUR CATEGORIES"
        className={classes.title}
      />

      <div className={classes["category-wrapper"]}>
        {category?.map((item, index) => {
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
