import React, { useEffect, useState } from "react";
import axios from "axios";

const LocalMeteo = () => {
  // const URL = "https://api.meteo-concept.com/api/";
  //const TOKEN =
  //"165f07166111d457f0ef77bcd2455671a7460e9dd6737264f57d811117f4d1e8";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.meteo-concept.com/api/location/city?insee=29019&token=165f07166111d457f0ef77bcd2455671a7460e9dd6737264f57d811117f4d1e8"
      )
      .then((res) => console.log(res));
  }, []);
  return <div></div>;
};

export default LocalMeteo;
