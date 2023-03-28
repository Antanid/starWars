import React from 'react';

import style from "./PeoplePage.module.scss";

const ButtonPage = ({ onNextPage, onPrevPage, peopleArray, pages }) => {
    return (
        <div className={style.buttonPage}>
            <button
                 className={pages === 1 ? style.disabled : ''}
                onClick={onPrevPage}>Prev</button>
            <button
                className={pages === 9 ? style.disabled : ''}
                onClick={onNextPage}>Next</button>
        </div>
    )
}

export default ButtonPage