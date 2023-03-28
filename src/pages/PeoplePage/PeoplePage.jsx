import React from "react";
import PeopleMain from "../../components/AllCharacters/PeopleMain";

const PeoplePage = ({ setPages, pages }) => {
  return (
    <>
      <PeopleMain
        setPages={setPages}
        pages={pages}
      />
    </>
  );
};

export default PeoplePage;
