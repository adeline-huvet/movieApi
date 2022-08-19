import React from "react";

const Cardmeteo = ({ data }) => {
  return (
    <div>
      <li>
        <h4>{data.name}</h4>
        <h5> Température : {data.main.temp} C° </h5>
        <h5> Ressenti : {data.main.feels_like} C° </h5>
        <h5> Humidité : {data.main.humidity} % </h5>
      </li>
    </div>
  );
};

export default Cardmeteo;
