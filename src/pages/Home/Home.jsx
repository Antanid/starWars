import React, { useState } from "react";
import HomeLi from "@components/Home/HomeLi";
import FavoriteHome from "../Favorite/FavoriteHome";
import style from './styleHome.module.scss'

const Home = () => {

  const [menu] = useState([
    {
      title: "Home",
      path: "",
    },
    {
      title: "People",
      path: 'people/?page=',
    },
    {
      title: "Search",
      path: '/search',
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

  const [selectedLi, setSelectedLi] = useState(0);
  const onSelectLi = (index) => {
    setSelectedLi(index)
  }
  return (
    <div className={style.home_wrapper}>
      <HomeLi
        selectedLi={selectedLi}
        onSelectLi={onSelectLi}
        menu={menu}
      />
      <FavoriteHome />
    </div>
  );
};

export default Home;
