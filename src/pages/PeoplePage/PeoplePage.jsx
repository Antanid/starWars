import React from "react";
import { useSelector } from "react-redux/es/exports";
import PeopleList from "@components/AllCharacters/PeopleList";

const PeoplePage = () => {
    const peopleArray = useSelector((state) => state.peopleSlice.people);
  return (
    <>
      <PeopleList peopleArray={peopleArray} />
    </>
  );
};

export default PeoplePage;
