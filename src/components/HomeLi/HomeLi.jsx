import React from "react";
import { Link } from "react-router-dom";
import style from "./HomeLi.module.scss";

const HomeLi = ({ menu }) => {
  return (
    <div>
      <ul className={style.ul_menu}>
        {menu.map((item) => (
          <Link to={item.path}>
            <li className={style.li}>{item.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default HomeLi;
