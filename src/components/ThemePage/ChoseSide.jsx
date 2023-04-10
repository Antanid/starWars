import React from "react";
import { THEME_LIGHT, THEME_NEITRAL, THEME_DARK } from "../../context/ThemeProvider";
import style from "./style.module.scss";

import lightImg from "../../assets/buttLight.jpg";
import darkImg from "../../assets/ButtDark.jpg";
import neitralImg from "../../assets/NeitralButt.jpg";

const ChoseSide = ({ isTheme }) => {
  return (
    <div className={style.theme_wrapper}>
      <div 
      onClick={() => isTheme.changeTheme(THEME_LIGHT)}
      className={style.item_light}
      >
        <div className={style.header_light}>
          Light side
        </div>
          <img src={lightImg} alt="Light_Butt" />
      </div>

      <div 
      onClick={() => isTheme.changeTheme(THEME_DARK)}
      className={style.item_dark}>
        <div className={style.header_dark}>
          Dark side
        </div>
          <img src={darkImg} alt="Light_Butt" />
      </div>

      <div 
      onClick={() => isTheme.changeTheme(THEME_NEITRAL)}
      className={style.item_neit}>
        <div className={style.header_neit}>
          I a'm Han Solo
        </div>
          <img src={neitralImg} alt="Light_Butt" />
      </div>
    </div>
  );
};

export default ChoseSide;
