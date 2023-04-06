import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PuffLoader } from 'react-spinners';
import FilmsCharec from '../../components/SingleCharecter/FilmsCharec';
import GoBackButt from '../../components/SingleCharecter/GoBackButt';
import SingleInfo from '../../components/SingleCharecter/SingleInfo';
import SinglePhoto from '../../components/SingleCharecter/SinglePhoto';
import { setFilms } from '../../redux/characterSlice';
import { setAddFavorite } from '../../redux/favoriteSlice';
import style from './singlePerson.module.scss'

const SinglePerson = () => {
    const characterInfo = useSelector((state) => state.characterSlice.character);
    const characterId = useSelector((state) => state.characterSlice.id);
    const characterFilms = useSelector((state) => state.characterSlice.films);
    const dispatch = useDispatch();

    useEffect(() => {
        characterInfo.films.map((i) => {
            return axios.get(i).then(({ data }) => dispatch(setFilms(data)))
        })
    }, [])

    const onAddFavorite = (obj) => {
        dispatch(setAddFavorite(obj))
    }
    return (
        <div className={style.wrapper}>
            <GoBackButt />
            <span className={style.person__name}>{characterInfo.name}</span>
            <button
                onClick={() => onAddFavorite(characterInfo)}
                className={style.person__name}>
                add to fav
            </button>
            {characterFilms.length === 0 ? <PuffLoader
                size={90}
                color="#ffffff"
            />
                : <div className={style.container}>
                    <SinglePhoto id={characterId} />
                    <SingleInfo characterInfo={characterInfo} />
                    <FilmsCharec characterFilms={characterFilms} />
                </div>}

        </div>
    )
}

export default SinglePerson