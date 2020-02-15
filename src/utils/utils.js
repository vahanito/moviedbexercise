export const handleResponse = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  } else {
    throw response;
  }
};

export const getFavoriteMoviesJson = () => {
  const favoriteMovies = localStorage.getItem('favoriteMovies');
  return favoriteMovies === null ? {} : JSON.parse(favoriteMovies);
};
