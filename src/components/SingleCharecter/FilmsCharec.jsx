import React from 'react';
import style from './single.module.scss'

const FilmsCharec = ({ characterFilms }) => {
    return (
        <ul className={style.ul_films}>
            {
                characterFilms && characterFilms.map((item) => (
                    <li><span>Episode {item.episode_id}</span>: {item.title}</li>
                ))
            }
        </ul>
    )
}

export default FilmsCharec