import React from "react";
import PropTypes from "prop-types";
import style from "./PeoplePage.module.scss";

const PeopleList = ({ peopleArray }) => {
  return (
    <ul className={style.list_container}>
      {peopleArray.map(({ name, id, img }) => {
        return (
          <li className={style.list_item} key={id}>
            <a href="/#">
              <img className={style.list_img} src={img} alt={name + "Img"} />
              <p>{name}</p>
            </a>
          </li>
        );
      })}
    </ul>
  );
};



export default PeopleList;
