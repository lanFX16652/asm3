import React from "react";

const Title = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <p>{title}</p>
      <p>{subtitle}</p>
    </div>
  );
};

export default Title;
