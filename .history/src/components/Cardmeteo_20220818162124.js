import React from "react";

const Cardmeteo = ({ movie }) => {
  return (
    <div>
      <ul>
        <li>{movie.original_title}</li>
        <img src={movie.poster_path} alt="movie" />
        {/* <li> Température : {data.main.temp} C° </li>
        <li> Ressenti : {data.main.feels_like} C° </li>
        <li> Humidité : {data.main.humidity}% </li>
        <li>{data.weather[0].description}</li> */}
      </ul>
    </div>
  );
};

export default Cardmeteo;
