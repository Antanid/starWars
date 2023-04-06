import React from 'react'
import { Link } from 'react-router-dom';
import style from './styleSearch.module.scss';

const SearchLi = ({ searchList, onSinglePerson }) => {
    return (
        <ul className={style.ul_people}>
            {
                searchList.map(({ name, id, img }) => (
                    <Link to={`/character/${id}`}>
                        <li onClick={() => onSinglePerson(id)} key={id}>
                            <img src={img} alt="" />
                            <p>{name}</p>
                        </li>
                    </Link>
                ))
            }
        </ul>
    )
}

export default SearchLi