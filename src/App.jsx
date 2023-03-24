import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux/es/exports";

import { setPeople } from "@redux/peopleSlice";
import { SWAPI_ROOT, SWAPI_PEOPLE } from "@services/network";
import { getId, getPeopleIdImage } from "@services/getPeopleData";
import ErrorPage from "@components/Error/ErrorPage";
import PeoplePage from "@pages/PeoplePage/PeoplePage";
import Home from "@pages/Home/Home";

import style from "@styles/App.module.css";
import HomeThemeChange from "@components/Home/HomeThemeChange";

function App() {
  const [errorApi, setErrorApi] = useState(false);
  const dispatch = useDispatch();
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
      } catch (error) {
        setErrorApi(true);
        console.log("FUCK", error);
      }
    }
    getApiResourse(SWAPI_ROOT + SWAPI_PEOPLE);
  }, []);

  return (
    <div className={style.wrapper}>
      <Home />
      <Routes>
      
      <Route path="" element={<HomeThemeChange />} />
      <Route path="error" element={<ErrorPage />} />
        {errorApi ? (
          <Route path="error" element={<ErrorPage />} />
        ) : (
          <Route path="people" element={<PeoplePage />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
