import React from "react";
import { useSelector } from "react-redux";
import PuffLoader from "react-spinners/PuffLoader";
import PeopleMain from "../../components/AllCharacters/PeopleMain";

import style from './peoplePage.module.scss'

const PeoplePage = ({ setPages, pages }) => {
  const loading = useSelector(state => state.peopleSlice.loading)
  return (
    <>{
      loading ?
        <div className={style.loader}>
          <PuffLoader
            size={90}
            color="#ffffff"
          />
        </div>
        : <PeopleMain
          setPages={setPages}
          pages={pages}
        />
    }

    </>
  );
};

export default PeoplePage;
