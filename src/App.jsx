import { Route, Routes, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux/es/exports";

import { setPeople } from "@redux/peopleSlice";
import { SWAPI_ROOT, SWAPI_PEOPLE } from "@services/network";
import { getId, getPeopleIdImage } from "@services/getPeopleData";
import ErrorPage from "@components/Error/ErrorPage";
import PeoplePage from "@pages/PeoplePage/PeoplePage";
import Home from "@pages/Home/Home";

import style from "@styles/App.module.css";
import HomeThemeChange from "@components/Home/HomeThemeChange";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { NEXT_PAGE } from "./services/network";
import SinglePerson from "./pages/SinglePerson/SinglePerson";

function App() {
  const [errorApi, setErrorApi] = useState(false);
  const dispatch = useDispatch();
  const charecterID = useSelector(state => state.characterSlice.id)

  const [searchParams, setSearchParams] = useSearchParams();
  const [pages, setPages] = useState(1);

  useEffect(() => {
    async function getApiResourse(url) {
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
        setErrorApi(false);
        dispatch(setPeople(peopleList));
        setSearchParams({ page: pages })
      } catch (error) {
        setErrorApi(true);
        console.log("OOPS we have error", error);
      }
    }
    getApiResourse(SWAPI_ROOT + SWAPI_PEOPLE + NEXT_PAGE + searchParams.get('page') );
  }, [searchParams, dispatch, setSearchParams, pages]);

  return (
    <div className={style.wrapper}>
      <Home />
      <Routes>

        <Route path="/" element={<HomeThemeChange />} />
        <Route path="*" exact={false} element={<NotFoundPage />} />
        <Route path="/Not Found" element={<NotFoundPage />} />
        <Route path="error" element={<ErrorPage />} />
        <Route path={`character/${charecterID}`} exact={false} element={<SinglePerson />} />
        {errorApi ? (
          <Route path="error" element={<ErrorPage />} />
        ) : (
          <Route path='people' element={<PeoplePage 
            pages={pages}
            setPages={setPages}/>} />
        )}
      </Routes>
    </div>
  );
}

export default App;
