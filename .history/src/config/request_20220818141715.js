//b2f819654f88ce04e5535b6b501a6a10
//https://api.themoviedb.org/3

const API_KEY = `b2f819654f88ce04e5535b6b501a6a10`;

const BASE_URL = `https://api.themoviedb.org`;

const requests = {
  trending: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
};

export default requests;
