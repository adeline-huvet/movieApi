import React, { useEffect } from "react";

const Cardmeteo = ({ data }) => {
  useEffect(() => console.log(data.main.temp));
  return (
    <div>
      <li>
        <h4>{data.name}</h4>
        {data.main.temp !== undefined ? (
          <div>
            {" "}
            <h5> Température : {data.main.temp} C° </h5>
            <h5> Ressenti : {data.feels_like} C° </h5>
            <h5> Humidité : {data.humidity}% </h5>
            <h5>{data.weather[0].description}</h5>
          </div>
        ) : (
          <div></div>
        )}
      </li>
    </div>
  );
};

export default Cardmeteo;
