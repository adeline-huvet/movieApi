import React, { useEffect } from "react";

const Cardmeteo = ({ data }) => {
  useEffect(() => console.log(data));
  return (
    <div>
      <ul>
        <li>{data.name}</li>
        <li> Température : {data.main.temp} C° </li>
        <li> Ressenti : {data.main.feels_like} C° </li>
        <li> Humidité : {data.main.humidity}% </li>
        <li>{data.weather[0].description}</li>
      </ul>
    </div>
  );
};

export default Cardmeteo;
