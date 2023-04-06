import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteList from './FavoriteList';
import style from './favorite.module.scss'
import { setCharacter, setId } from '../../redux/characterSlice';
import axios from 'axios';
import { getId } from '../../services/getPeopleData';

const Favorite = () => {
    const favorite = useSelector((state) => state.favoriteSlice.favorite);
    const dispatch = useDispatch()

    return (
        <div className={style.favorite_container}>
            <FavoriteList favorite={favorite} />
        </div>
    )
}

export default Favorite