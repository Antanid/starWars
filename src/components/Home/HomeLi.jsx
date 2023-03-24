import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import style from "./Home.module.scss";

const HomeLi = ({ menu, onSelectLi, selectedLi }) => {
  return (
    <div>
      <ul className={style.ul_menu}>
        {menu.map((item, index) => (
          <Link
            className={style.link_li}
            onClick={() => onSelectLi(index)}
            key={index}
            to={item.path}>
            <li className={index === selectedLi ? style.active : ''}>{item.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

HomeLi.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,

  }))
}

export default HomeLi;
