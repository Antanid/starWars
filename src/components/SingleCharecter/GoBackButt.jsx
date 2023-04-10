import React from "react";
import arrowBtn from "../../assets/next.png";
import style from "./single.module.scss";

const GoBackButt = ({ onBackButt }) => {
  return (
    <div className={style.button_container}>
      <button onClick={onBackButt}>
        <img src={arrowBtn} alt="arrow_back" />
        Go back
      </button>
    </div>
  );
};

export default GoBackButt;
