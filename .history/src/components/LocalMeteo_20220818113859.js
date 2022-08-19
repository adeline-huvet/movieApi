import React, { useEffect, useState } from "react";
import axios from "axios";
import Cardmeteo from "./Cardmeteo";

const LocalMeteo = () => {
  const [data, setData] = useState();
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

      {data !== undefined && data !== null ? (
        <Cardmeteo data={data} />
      ) : (
        <div>
          <p>LOADER</p>
        </div>
      )}
    </div>
  );
};

export default LocalMeteo;
