import React, { useEffect, useState } from "react";
import style from "./styleSearch.module.scss";
import cancelImg from "../../assets/cancel.svg";
import axios from "axios";
import { getId, getPeopleIdImage } from "../../services/getPeopleData";
import { useDispatch, useSelector } from "react-redux";
import { setCharSearch } from "../../redux/searchSlice";
import SearchLi from "./SearchLi";
import { setCharacter, setDeleteFilms, setId } from "../../redux/characterSlice";
import { useSearchParams } from "react-router-dom";

const SearchCom = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const searchList = useSelector((state) => state.searchSlice.character);
  const [ setSearchParams] = useSearchParams();

  useEffect(() => {
    async function getSearch(url) {
      try {
        const { data } = await axios.get(url);
        const peopleList = data.results.map(({ name, url }) => {
          const id = getId(url);
          const img = getPeopleIdImage(id);
          return {
            name,
            url,
            img,
            id,
          };
        });
        dispatch(setCharSearch(peopleList));
        setSearchParams({ search: input });
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(setDeleteFilms())
    getSearch(`https://swapi.dev/api/people/?search=${input}`);
  }, [input]);

  const onChangeInput = (e) => {
    setInput(e.target.value);
    e.preventDefault();
  };
  const clearInput = () => {
    setInput("");
  };

  const onSinglePerson = (id) => {
    async function searchSingle() {
      try {
        const { data } = await axios.get(`https://swapi.dev/api/people/${id}`);
        dispatch(setCharacter(data));
        dispatch(setId(id));
      } catch (error) {
        console.log(error);
      }
    }
    searchSingle();
  };

  return (
    <div className={style.search_wrapper}>
      <h2 className={style.textH2}>Search</h2>
      <div className={style.div_input}>
        <input value={input} onChange={onChangeInput} placeholder="type name..." />
        <img onClick={clearInput} src={cancelImg} alt="cancelInput" />
      </div>
      <SearchLi onSinglePerson={onSinglePerson} searchList={searchList} />
    </div>
  );
};

export default SearchCom;
