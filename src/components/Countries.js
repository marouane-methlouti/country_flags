import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  // const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
      )
      .then((res) => setData(res.data));
  }, []);

  // const sortedCountry = ()=>{
  //   const countryObj = Object.keys(data).map((i) =>data[i]);
  //   const sortedArray = countryObj.sort((a,b)=> {
  //     return b.population - a.population
  //   });
  // }
  // sortedArray();

  return(
      <div className="countries">
          <ul className="countries-list">
              {data.map((country)=>(
                 <Card country={country} key={country}/>
              ))} 
          </ul>
      </div>
  );
};

export default Countries;
