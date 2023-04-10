import React from "react";
import ChoseSide from "./ChoseSide";
import style from "./style.module.scss";
import { useTheme, THEME_LIGHT, THEME_NEITRAL, THEME_DARK } from "../../context/ThemeProvider";
import { useEffect } from "react";
import { useState } from "react";

const HomeThemeChange = () => {
  const isTheme = useTheme();
  const [styleTitle, setStyleTitle] = useState({});
  useEffect(() => {
    switch (isTheme.selectTheme) {
      case THEME_NEITRAL:
        setStyleTitle("title_neitral");
        break;
        case THEME_LIGHT:
          setStyleTitle("title_light");
          break;
          case THEME_DARK:
            setStyleTitle("title_dark");
            break;
        default:
          setStyleTitle('title_light');
    }
  }, [isTheme]);
  return (
    <div className={style.changeTheme}>
      <p className={styleTitle}>HomeThemeChange</p>
      <ChoseSide isTheme={isTheme} />
    </div>
  );
};

export default HomeThemeChange;
