/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountry }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited && "visited"}`}>
      <h3 style={{ color: visited ? "black" : "white" }}>
        Name : {name?.common}
      </h3>
      <img src={flags.png} alt="" />
      <p>population : {population}</p>
      <p>area : {area}</p>
      <small>Code : {cca3}</small>
      <button onClick={handleVisitedCountry}>Mark Visited</button>
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I have visited" : " I want to visit"}
    </div>
  );
};

export default Country;
