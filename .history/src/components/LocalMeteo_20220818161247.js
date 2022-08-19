import React, { useEffect, useState } from "react";
import axios from "axios";

const LocalMeteo = () => {
  const [movies, setMovies] = useState();
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=b2f819654f88ce04e5535b6b501a6a10&language=fr-FR&page=1`;

  useEffect(() => {
    getMovies();
    console.log(movies);
  }, []);

  const getMovies = async () => {
    await axios
      .get(URL)
      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data.results);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {movies !== undefined ? (
        <div>
          <ul>
            {movies.map((movie) => {
              console.log(movie);
            })}
          </ul>
        </div>
      ) : (
        <div>LOARD</div>
      )}
      <ul>
        {/* {movies.map((movie) => { */}

        {/* return <li>{movie.id}</li>; */}
        {/* })} */}
      </ul>
    </div>
  );
};

export default LocalMeteo;
