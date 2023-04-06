import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import favoriteImg from '../../assets/bookmark.svg';
import style from './style.module.scss';

const FavoriteHome = () => {
    const counter = useSelector((state) => state.favoriteSlice.favorite)
    return (
        <div className={style.favorite_wrapp}>
            <Link to='/favorite'>
                <span className={style.counter}>{counter.length}</span>
                <img
                    className={style.img_favorite}
                    src={favoriteImg}
                    alt='favorite_img'
                />
            </Link>
        </div>
    )
}

export default FavoriteHome