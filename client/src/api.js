import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
// export const getTodayShows = () => {
//   return axios({
//     method: "GET",
//     url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
//     headers: {
//       "content-type": "application/octet-stream",
//       "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
//       "x-rapidapi-key": process.env.REACT_APP_API_URL,
//       useQueryString: true,
//     },
//     params: {
//       page: "1",
//       type: "get-airingtoday-shows",
//     },
//   })
//     .then((response) => {
//       console.log(response.data.tv_results);
//       return response.data.tv_results;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
