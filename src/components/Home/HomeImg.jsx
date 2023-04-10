import React from "react";
import style from "./Home.module.scss";

const HomeImg = ({icon}) => {
  return (
    <div className={style.logo_container}>
      <img className={style.img} src={icon} alt="logoImg" />
    </div>
  );
};

export default HomeImg;
