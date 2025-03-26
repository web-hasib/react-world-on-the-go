import React, { useState } from "react";
import "./Country.css";

const Country = ({ country,handleVisitedCountries,handleVisitedFlags }) => {
  const [visited, setVisited] = useState(false);
//   console.log(visited);
// console.log(handleVisitedCountries);

  const handleVisited = () => {
    // console.log('Country visited');
    // setVisited(true);

    // if(visited === true){
    //     setVisited(false);
    // }
    // else{
    //     setVisited(true);
    // }
    setVisited(!visited); // toggle visited state.
    handleVisitedCountries(country)
   
  };
  // console.log(country)
  return (
    <div className={`country ${visited && "country-visited"}`}>
      {/* // {visited ? "country-visited" : "country"} */}
      <h3>Name: {country.name.common}</h3>
      <img src={country?.flags?.png} alt={country.flags.alt} />
      <p>Independent: {country.independent ? "free" : "not free"}</p>
      <p>Population : {country.population}</p>
      <button
        className={visited ? "btn-visited" : "btn-not-visited"}
        onClick={handleVisited}
      >
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button onClick={()=>handleVisitedFlags(country?.flags?.png)}>Add visited Flag</button>
    </div>
  );
};

export default Country;
