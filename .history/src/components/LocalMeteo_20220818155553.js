import React, { useEffect, useState } from "react";
import axios from "axios";

const LocalMeteo = () => {
  const [movies, setMovies] = useState();
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=b2f819654f88ce04e5535b6b501a6a10&language=fr-FR&page=1`;

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    await axios.get(URL).then((res) => {
      setMovies(res.data.results);
      console.log(movies);
    });
  };
  return (
    <div>
      <ul>
        {/* {movies.map((movie) => { */}

        {/* return <li>{movie.id}</li>; */}
        {/* })} */}
      </ul>
    </div>
  );
};

export default LocalMeteo;
