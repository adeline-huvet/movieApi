import React, { useEffect } from "react";

const Cardmeteo = ({ data }) => {
  useEffect(() => console.log(data));
  return (
    <div>
      <li>
        <h4>{data.name}</h4>
        {/* <h5> Température : {data.temp} C° </h5> */}
        {/* <h5> Ressenti : {data.feels_like} C° </h5> */}
        {/* <h5> Humidité : {data.humidity}% </h5> */}
        {/* <h5>{data.weather[0].description}</h5> */}
      </li>
    </div>
  );
};

export default Cardmeteo;
