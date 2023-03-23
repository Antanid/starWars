import { useEffect } from "react";
import axios from "axios";
import { SWAPI_ROOT, SWAPI_PEOPLE } from "./services/network";
import style from "./styles/App.module.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setPeople } from './redux/peopleSlice';
import PeoplePage from "./pages/PeoplePages";
import { getId, getPeopleIdImage } from './services/getPeopleData';

function App() {
  const dispatch = useDispatch();
  const t = useSelector((state) => state.peopleSlice.people);
  useEffect(() => {
    try {
      const getApiResourse = async (url) => {
        const { data } = await axios.get(url);
        const peopleList = data.results.map(({ name, url}) => {
          const id = getId(url)
          const img = getPeopleIdImage(id)
          return {
            name, 
            url,
            img,
            id
          }
        });
        dispatch(setPeople(peopleList))
      };
     
      getApiResourse(SWAPI_ROOT + SWAPI_PEOPLE);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return <div className={style.header}>
    {
      t &&
      <PeoplePage t={t} />
    }
  </div>;
}

export default App;
