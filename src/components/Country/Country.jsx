/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetail/CountryDetail";
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
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
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Add Flag
      </button>
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I have visited" : " I want to visit"}
      <hr />
      <CountryDetail></CountryDetail>
    </div>
  );
};

export default Country;
