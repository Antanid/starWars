import React from 'react';
import PropTypes from "prop-types";
import style from './style.module.scss';

const NotFoundComp = ({ img, text, brText }) => {

    return (
        <div className={style.not_Found_container}>
            <img src={img} alt="not-found" />
            <p>
                {text}
                <span>{brText}</span>
            </p>
        </div>
    )
}


NotFoundComp.propTypes = {
    img: PropTypes.string,
    text: PropTypes.string
}

export default NotFoundComp;