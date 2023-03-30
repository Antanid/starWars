import React from 'react';
import style from './single.module.scss'

const SingleInfo = ({ characterInfo }) => {
    return (
        <div className={style.wrapper}>
            <ul className={style.list}>
                <li><span>Height: </span>{characterInfo.height}</li>
                <li><span>Mass:</span> {characterInfo.mass}</li>
                <li><span>Hair Color:</span> {characterInfo.hair_color}</li>
                <li><span>Skin Color:</span> {characterInfo.skin_color}</li>
                <li><span>Eye Color:</span> {characterInfo.eye_color}</li>
                <li><span>Birth Year:</span> {characterInfo.birth_year}</li>
                <li><span>Gender:</span> {characterInfo.gender}</li>
            </ul>
        </div>
    )
}

export default SingleInfo