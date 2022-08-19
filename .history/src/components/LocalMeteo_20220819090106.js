import React, { useEffect, useState } from "react";
import axios from "axios";
import Cardmeteo from "../components/Cardmeteo";

const LocalMeteo = () => {
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState("");
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=b2f819654f88ce04e5535b6b501a6a10&language=fr-FR&page=1`;
  const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=b2f819654f88ce04e5535b6b501a6a1&language=fr-FR&page=1&include_adult=false&query=`;
  const adress = useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    await axios
      .get(URL)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((error) => console.log(error));
  };
  const searchMovies = (e) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=b2f819654f88ce04e5535b6b501a6a10&query=${search}`
      )
      .then((response) => {
        console.log(response.data.reslut);
      })
      .catch((error) => console.log(error));
    // let value = e.target.value;
    // setSearch(value);
  };

  console.log(search);
  return (
    <div>
      <form>
        <div className="search-form">
          <input
            type="text"
            className="search-input"
            placeholder="SearchMovies"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
            onKeyPress={searchMovies}
          />
          <button className="search-button">Search</button>
        </div>
      </form>
      {movies !== undefined ? (
        <div>
          <ul>
            {movies.map((movie) => {
              return <Cardmeteo movie={movie} />;
            })}
          </ul>
        </div>
      ) : (
        <div>LOARD</div>
      )}
    </div>
  );
};

export default LocalMeteo;
