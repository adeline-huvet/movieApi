import React, { useEffect, useState } from "react";
import axios from "axios";

const LocalMeteo = () => {
  const [movies, setMovies] = useState();
  const URL = `https://api.themoviedb.org/trending/movie/week?api_key=$b2f819654f88ce04e5535b6b501a6a10`;

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    await axios.get(URL).then((res) => {
      console.log(res.data);
      setMovies(res.data);
    });
  };
  return <div></div>;
};

export default LocalMeteo;
