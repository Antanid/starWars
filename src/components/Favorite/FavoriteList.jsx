import React from 'react';
import style from './favorite.module.scss'

const FavoriteList = ({ favorite }) => {
    return (
        <ul className={style.ul_container}>
            {
                favorite.map(({ name }) => {
                    return (
                        <li key={name}>
                            {name}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default FavoriteList