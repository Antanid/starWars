import React from 'react';
import { Link } from 'react-router-dom';
import arrowBtn from '../../assets/next.png';
import style from './single.module.scss'

const GoBackButt = () => {
    return (
        <div className={style.button_container}>
            <Link to='/people/?page='>
                <button>
                    <img src={arrowBtn} alt="arrow_back" />
                    Go back
                </button>
            </Link>
        </div>
    )
}

export default GoBackButt