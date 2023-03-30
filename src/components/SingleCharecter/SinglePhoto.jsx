import React from 'react';
import { GUIDE_IMG_EXTENSION, URL_IMG_PERSON } from '../../services/network';
import style from './single.module.scss'

const SinglePhoto = ({ id }) => {
    return (
        <div className={style.container}>
            <img className={style.photo} src={`${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`} alt='photoPerson' />
        </div>
    )
}

export default SinglePhoto