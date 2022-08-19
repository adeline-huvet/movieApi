import React, { useEffect, useState } from "react";
import axios from "axios";
import Cardmeteo from "./Cardmeteo";

const LocalMeteo = () => {
  const [data, setData] = useState([]);
  const [inseeCode, setInseeCode] = useState("29019");

  useEffect(() => {
    axios
      .get(
        `https://api.meteo-concept.com/api/forecast/daily?insee=${inseeCode}&token=165f07166111d457f0ef77bcd2455671a7460e9dd6737264f57d811117f4d1e8`
      )
      .then((res) => setData(res));
    console.log(data);
  }, []);
  return (
    <div>
      <ul>
        {data.map((prevision, index) => (
          <Cardmeteo key={index} prevision={prevision} />
        ))}
      </ul>
    </div>
  );
};

export default LocalMeteo;
