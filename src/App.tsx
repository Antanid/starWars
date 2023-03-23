import { useEffect, useState } from "react";
import axios from "axios";
import { SWAPI_ROOT, SWAPI_PEOPLE } from "./utils/network";
import style from "./styles/App.module.css";

function App() {
  const [people, setPeple] = useState([]);
  useEffect(() => {
    try {
      const getApiResourse = async (url: string) => {
        const { data } = await axios.get(url);
        return setPeple(data);
      };
      getApiResourse(SWAPI_ROOT + SWAPI_PEOPLE);
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(people);
  return <div className={style.header}>11</div>;
}

export default App;
