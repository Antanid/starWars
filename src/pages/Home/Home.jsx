import React, { useState } from "react";
import HomeLi from "@components/Home/HomeLi";

const Home = () => {
  const [menu] = useState([
    {
      title: "Home",
      path: "",
    },
    {
      title: "People",
      path: "people",
    },
    {
      title: "Error",
      path: "error",
    },
  ]);
  const [selectedLi, setSelectedLi] = useState(0);
  const onSelectLi = (index) => {
    console.log(index);
    setSelectedLi(index)
  }
  return (
    <div>
      <HomeLi
        selectedLi={selectedLi}
        onSelectLi={onSelectLi}
        menu={menu}
      />
    </div>
  );
};

export default Home;
