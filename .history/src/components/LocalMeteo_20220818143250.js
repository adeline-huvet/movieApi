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
    const request = await axios.get(requests.trending);
    setMovies(
      request.data.results[
        Math.floor[Math.random() * request.data.results.length - 1]
      ]
    );
    console.log(movies);
    // .then((res) => {
    //   console.log(res.data.results);
    // })
    // .catch((error) => console.log(error));
  };

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
