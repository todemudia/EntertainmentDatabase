const API_KEY = "b6f3a13caa54a0e544d52a76e92318d7";

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTrendingMovies: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  fetchTrendingTVShows: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
  fetchTrendingActors: `/trending/person/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedTV: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,

  fetchSearchRequest: `/search/multi?api_key=${API_KEY}&language=en-US&query=`,

  fetchNetflixLogo: `/network/213/images?api_key=${API_KEY}`,
};

export default requests;
