import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setCharacter, setDeleteFilms, setId } from '../../redux/characterSlice';
import ButtonPage from './ButtonPage';
import PeopleList from './PeopleList';

import style from "./PeoplePage.module.scss";

const PeopleMain = ({ setPages, pages }) => {
    const peopleArray = useSelector((state) => state.peopleSlice.people);
    const dispatch = useDispatch();

    useEffect(() => {
dispatch(setDeleteFilms())
    }, [])

    const onNextPage = () => {
        if (pages < 9) {
            setPages(prev => prev + 1)
        }
    }
    const onPrevPage = () => {
        if (pages > 1) {
            setPages(prev => prev - 1)
        }
    }

    const onChangePerson = (id) => {
        async function getApiPerson(id) {
            const { data } = await axios.get(`https://swapi.dev/api/people/${id}`)
            dispatch(setCharacter(data))
            dispatch(setId(id))
        }
        getApiPerson(id);
    }

    return (
        <div className={style.page_container}>
            <ButtonPage
                pages={pages}
                peopleArray={peopleArray}
                onPrevPage={onPrevPage}
                onNextPage={onNextPage}
            />
            <PeopleList
                onChangePerson={onChangePerson}
                peopleArray={peopleArray}
            />
        </div>
    )
}

export default PeopleMain