export const getFavoriteMoviesJson = () => {
  const favoriteMovies = localStorage.getItem('favoriteMovies');
  return favoriteMovies === null ? {} : JSON.parse(favoriteMovies);
};
