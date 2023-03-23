import React from 'react';
import style from "./PeoplePage.module.scss";


const PeoplePage = ({ t }) => {

  return (
    <ul className={style.list_container}>
      {
        t.map(({ name, id, img }) => {
          return (
            <li
              className={style.list_item}
              key={id}>
                <a href='#'>
              <img
                className={style.list_img}
                src={img}
                alt={name + 'Img'}
              />
              <p>{name}</p>
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}


export default PeoplePage; 