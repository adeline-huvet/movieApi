import React, { useEffect, useState } from "react";
import axios from "axios";
import Cardmeteo from "./Cardmeteo";

const LocalMeteo = () => {
  const [data, setData] = useState();
  const [location, setLocation] = useState("");
  // const [inseeCode, setInseeCode] = useState("29019");
  //2ed6d346e22e43fedff010a2beb62a95

  useEffect(() => {
    searchLocation();
  }, [data]);
  const searchLocation = async (e) => {
    if (e.key === "Enter") {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}t&units=metric&lang=fr&appid=65e7318150ceaf2c40766168697c9288`
        )
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <h1>Bonjour</h1>
      
        <ipnut
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Choissisez une ville"
          onKeyPress={searchLocation}
          type="text"
        />
      
</>
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
