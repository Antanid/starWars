import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { PuffLoader } from "react-spinners";
import FilmsCharec from "../../components/SingleCharecter/FilmsCharec";
import GoBackButt from "../../components/SingleCharecter/GoBackButt";
import SingleInfo from "../../components/SingleCharecter/SingleInfo";
import SinglePhoto from "../../components/SingleCharecter/SinglePhoto";
import { setFilms } from "../../redux/characterSlice";
import { setAddFavorite } from "../../redux/favoriteSlice";
import style from "./singlePerson.module.scss";

import addImg from "../../assets/add_favorite.png";
import noAddImg from "../../assets/no_add.png";

const SinglePerson = () => {
  const characterInfo = useSelector((state) => state.characterSlice.character);
  const characterId = useSelector((state) => state.characterSlice.id);
  const characterFilms = useSelector((state) => state.characterSlice.films);
  const favorite = useSelector((state) => state.favoriteSlice.favorite);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function getFilms() {
      const res = await characterInfo.films.map(async (i) => {
        const { data } = await axios.get(i);
        return dispatch(setFilms(data));
      });
      return res;
    }
    getFilms();
  
  }, []);

  const onAddFavorite = (obj) => {
    dispatch(setAddFavorite(obj));
    console.log(favorite.some((i) => i.name === characterInfo.name));
  };

  const onBackButt = () => {
    navigate(-1);
  };

  return (
    <div className={style.wrapper}>
      <GoBackButt onBackButt={onBackButt} />
      <span className={style.person__name}>{characterInfo.name}</span>
      <button onClick={() => onAddFavorite(characterInfo)} className={style.favorite_butt}>
        <img
          src={favorite.some((i) => i.name === characterInfo.name) ? addImg : noAddImg}
          alt="addImg"
        />
      </button>
      {characterFilms.length === 0 ? (
        <PuffLoader size={90} color="#ffffff" />
      ) : (
        <div className={style.container}>
          <SinglePhoto id={characterId} />
          <SingleInfo characterInfo={characterInfo} />
          <FilmsCharec characterFilms={characterFilms} />
        </div>
      )}
    </div>
  );
};

export default SinglePerson;
