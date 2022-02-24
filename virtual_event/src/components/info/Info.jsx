import React from "react";
import "./info.css";

const Info = ({ title, link, text }) => {
  return (
    <div className="info__content">
      <div className="info__title">
        <a href={link}>{title}</a>
      </div>
      <div className="info__body">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Info;
