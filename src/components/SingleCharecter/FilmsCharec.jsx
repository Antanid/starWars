import React from "react";
import style from "./single.module.scss";

const FilmsCharec = ({ characterFilms }) => {
  return (
    <div className={style.film_container}>
      <ul className={style.ul_films}>
        {characterFilms &&
          characterFilms.map((item) => (
            <li>
              <span>Episode {item.episode_id}</span>: {item.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FilmsCharec;
