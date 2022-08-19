import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../config/request";
import Cardmeteo from "./Cardmeteo";

const LocalMeteo = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = async () => {
    await axios
      .get(requests.trending)
      .then((res) => {
        setData(data.results);
      });
  

  return (
    <div>
      <h1>Bonjour</h1>

      {/* {data !== undefined && data !== null ? (
        <Cardmeteo data={data} />
      ) : (
        <div>
          <p>LOADER</p>
        </div>
      )} */}
    </div>
  );
};

export default LocalMeteo;
