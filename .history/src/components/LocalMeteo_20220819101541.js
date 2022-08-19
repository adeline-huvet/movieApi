import React, { useEffect, useState } from "react";
import axios from "axios";
import Cardmeteo from "../components/Cardmeteo";

let API_key = `&api_key=b2f819654f88ce04e5535b6b501a6a10`;
let base_url = `https://api.themoviedb.org/3`;
let url = base_url + `/discover/movie?sort_by=popularity.desc` + API_key;

const LocalMeteo = () => {
  const [movieData, setMovieData] = useState();
  const [url_set, setUrl] = useState(url);
  const [search, setSearch] = useState();

  useEffect(() => {
    getMovies();
    searchMovies();
  }, []);
  const getMovies = async () => {
    await axios
      .get(url_set)
      .then((res) => {
        setMovieData(res.data.results);
      })
      .catch((error) => console.log(error));
  };

  const searchMovies = (e) => {
    url =
      base_url +
      `/search/movie?api_key=b2f819654f88ce04e5535b6b501a6a10&query=` +
      search;
    setUrl(url);
    setSearch(" ");
  };
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
            onKeyPress={setSearch}
          />
          <button className="search-button">Search</button>
        </div>
      </form>
      {movieData !== undefined ? (
        <div>
          <ul>
            {movieData.map((movie) => {
              return <Cardmeteo movie={movie} />;
            })}
          </ul>
        </div>
      ) : (
        <div>LOARD</div>
      )}
    </div>
  );
  //   const [movies, setMovies] = useState();
  //   const [search, setSearch] = useState("");
  //   const URL = `https://api.themoviedb.org/3/movie/popular?api_key=b2f819654f88ce04e5535b6b501a6a10&language=fr-FR&page=1`;
  //   const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=b2f819654f88ce04e5535b6b501a6a1&language=fr-FR&page=1&include_adult=false&query=`;
  //    useEffect(() => {
  //     getMovies();
  //     // searchMovies();
  //   }, []);

  //   const getMovies = async () => {
  //     await axios
  //       .get(URL)
  //       .then((res) => {
  //         setMovies(res.data.results);
  //       })
  //       .catch((error) => console.log(error));
  //   };
  //   const searchMovies = (e) => {
  //     axios
  //       .get(
  //         `https://api.themoviedb.org/3/search/movie?api_key=b2f819654f88ce04e5535b6b501a6a10&query=${search}`
  //       )
  //       .then((response) => {
  //         setMovies(movies);
  //         setSearch(" ");
  //       })
  //       .catch((error) => console.log(error));
  //     // let value = e.target.value;
  //     // setSearch(value);
  //   };

  //   console.log(search);
  //   return (
  //     <div>
  //       <form>
  //         <div className="search-form">
  //           <input
  //             type="text"
  //             className="search-input"
  //             placeholder="SearchMovies"
  //             onChange={(e) => {
  //               setSearch(e.target.value);
  //             }}
  //             value={search}
  //             onKeyPress={searchMovies}
  //           />
  //           <button className="search-button">Search</button>
  //         </div>
  //       </form>
  //       {movies !== undefined ? (
  //         <div>
  //           <ul>
  //             {movies.map((movie) => {
  //               return <Cardmeteo movie={movie} />;
  //             })}
  //           </ul>
  //         </div>
  //       ) : (
  //         <div>LOARD</div>
  //       )}
  //     </div>
  //   );
};

export default LocalMeteo;
