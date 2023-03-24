import React, { useState } from "react";
import HomeLi from "@components/HomeLi/HomeLi";

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
  return <HomeLi menu={menu} />;
};

export default Home;
