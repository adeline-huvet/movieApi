import React, { useEffect, useState } from "react";
import axios from "axios";
import Cardmeteo from "./Cardmeteo";

const LocalMeteo = () => {
  const [data, setData] = useState([]);
  // const [inseeCode, setInseeCode] = useState("29019");
  //2ed6d346e22e43fedff010a2beb62a95

  useEffect(() => {
    getMeteo();
  }, [data]);
  const getMeteo = async () => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=brest&units=metric&lang=fr&appid=65e7318150ceaf2c40766168697c9288`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h1>Bonjour</h1>

      <ul>
        {data !== undefined && data !== null ? (
          <div>
      <li>
        <h4>{data.name}</h4>

        <div>
          <h5> Température : {data.main.temp} C° </h5>
          {/* <h5> Ressenti : {data.feels_like} C° </h5> */}
          {/* <h5> Humidité : {data.humidity}% </h5> */}
          {/* <h5>{data.weather[0].description}</h5> */}
        </div>
      </li>
    </div>
          {/* <Cardmeteo data={data} /> */}
        ) : (
          <div></div>
        )}
      </ul>
    </div>
  );
};

export default LocalMeteo;
