import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./PeoplePage.module.scss";

const PeopleList = ({ peopleArray, onChangePerson }) => {
  return (
    <>
      <ul className={style.list_container}>
        {peopleArray.map(({ name, id, img }) => {
          return (

            <li
              className={style.list_item}
              key={id}
            >
              <Link
                onClick={() => onChangePerson(id)}
                to={`/character/${id}`}
              >
                <img className={style.list_img} src={img} alt={name + "Img"} />
                <p>{name}</p>
              </Link>
            </li>

          );
        })}
      </ul>

    </>
  );
};

PeopleList.propTypes = {
  peopleArray: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    img: PropTypes.string,
  }))
}

export default PeopleList;
