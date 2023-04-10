import React from 'react'
import { useSelector } from 'react-redux'
import FavoriteList from './FavoriteList';
import style from './favorite.module.scss'

const Favorite = () => {
    const favorite = useSelector((state) => state.favoriteSlice.favorite);

    return (
        <div className={style.favorite_container}>
            <FavoriteList favorite={favorite} />
        </div>
    )
}

export default Favorite