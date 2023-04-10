import React, { useState } from "react";
import HomeLi from "@components/Home/HomeLi";
import FavoriteHome from "../Favorite/FavoriteHome";
import style from "./styleHome.module.scss";
import { useTheme, THEME_LIGHT, THEME_NEITRAL, THEME_DARK } from "../../context/ThemeProvider";

import DarkSideImg from "./img/space-station.svg";
import LightSideImg from "./img/lightsaber.svg";
import NeitralSideImg from "./img/droid.svg";
import { useEffect } from "react";
import HomeImg from "../../components/Home/HomeImg";

const Home = () => {
  const [menu] = useState([
    {
      title: "Home",
      path: "",
    },
    {
      title: "People",
      path: "people/?page=",
    },
    {
      title: "Search",
      path: "/search",
    },
    {
      title: "Error",
      path: "error",
    },
    {
      title: "Not Found",
      path: "NotFound",
    },
  ]);
  const isTheme = useTheme();

  const [selectedLi, setSelectedLi] = useState(0);
  const [icon, setIcon] = useState(LightSideImg);
  const onSelectLi = (index) => {
    setSelectedLi(index);
  };

  useEffect(() => {
    switch (isTheme.selectTheme) {
      case THEME_LIGHT:
        document.body.classList.remove("light");
        document.body.classList.remove("neitral");
        setIcon(LightSideImg);
        document.body.classList.add("dark");
        break;
      case THEME_NEITRAL:
        setIcon(NeitralSideImg);
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        document.body.classList.remove("neitral");
        break;
      case THEME_DARK:
        setIcon(DarkSideImg);
        document.body.classList.add("neitral");
        document.body.classList.remove("dark");
        document.body.classList.remove("light");
        break;

      default:
        setIcon(LightSideImg);
        document.body.classList.add("light");
    }
  }, [isTheme]);

  return (
    <div className={style.home_wrapper}>
      <HomeImg icon={icon}/>
      <HomeLi selectedLi={selectedLi} onSelectLi={onSelectLi} menu={menu} />
      <FavoriteHome />
    </div>
  );
};

export default Home;
