import React, { useEffect, useState } from "react";
import axios from "axios";
import Cardmeteo from "./Cardmeteo";

const LocalMeteo = () => {
  const [obj, setObj] = useState([]);
  const [inseeCode, setInseeCode] = useState("29019");

  useEffect(() => {
    axios
      .get(
        `https://api.meteo-concept.com/api/forecast/daily?insee=${inseeCode}&token=165f07166111d457f0ef77bcd2455671a7460e9dd6737264f57d811117f4d1e8`
      )
      .then((res) => setObj(res.data));
  }, []);
  //   console.log(datas);
  return (
    <div>
      <h1>Bonjour</h1>
      <ul>{obj.map((line) => console.log(line.forecast))}</ul>

      {/* <p>{datas.city.name}</p> */}
    </div>
  );
};

export default LocalMeteo;
