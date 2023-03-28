import React from 'react';
import { useSelector } from "react-redux/es/exports";
import ButtonPage from './ButtonPage';
import PeopleList from './PeopleList';

import style from "./PeoplePage.module.scss";

const PeopleMain = ({ setPages, pages }) => {
    const peopleArray = useSelector((state) => state.peopleSlice.people);


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

    return (
        <div className={style.page_container}>
            <ButtonPage
                pages={pages}
                peopleArray={peopleArray}
                onPrevPage={onPrevPage}
                onNextPage={onNextPage}
            />
            <PeopleList peopleArray={peopleArray} />
        </div>
    )
}

export default PeopleMain