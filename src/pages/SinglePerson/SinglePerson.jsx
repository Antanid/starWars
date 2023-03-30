import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilmsCharec from '../../components/SingleCharecter/FilmsCharec';
import GoBackButt from '../../components/SingleCharecter/GoBackButt';
import SingleInfo from '../../components/SingleCharecter/SingleInfo';
import SinglePhoto from '../../components/SingleCharecter/SinglePhoto';
import { setFilms } from '../../redux/characterSlice';
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
    return (
        <div className={style.wrapper}>
            <GoBackButt />
            <span className={style.person__name}>{characterInfo.name}</span>
            <div className={style.container}>
                <SinglePhoto id={characterId} />
                <SingleInfo characterInfo={characterInfo} />
                <FilmsCharec characterFilms={characterFilms} />
            </div>
        </div>
    )
}

export default SinglePerson