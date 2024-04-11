const API = "https://api.themoviedb.org/3";
export function get(path) {
  return fetch(API + path, {
    headers: {
      // La clave correcta es 'Authorization' no 'Autorizacion'
      Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTUxMmQ3YzMzN2NjMjY1OWJjYjEzNDM0NjFlOGVmNiIsInN1YiI6IjY2MTFiOTJmMWYzMzE5MDE2M2MxYzM0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rOjL9LKso9De0XEs-bUgejPTh_KiF_QGnTNa8BVxC7I",
      // El tipo de contenido debe ser 'application/json' no 'aplication/json'
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
};

// Componente de React para mostrar las películas
const ContextMovieCard = ({ movies }) => {
  // Si 'movies' es undefined o no es un arreglo, 'mappedMovies' será un arreglo vacío
  const mappedMovies = Array.isArray(movies) ? movies.map(movie => {
    // Retorna los elementos que quieres renderizar
    return <MovieCard key={movie.id} movie={movie} />;
  }) : [];

  return (
    <div>
      {mappedMovies}
    </div>
  );
};

// Ejemplo de uso del componente con datos de la API
get('/ruta/del/recurso').then(movies => {
  ReactDOM.render(
    <ContextMovieCard movies={movies} />,
    document.getElementById('app')
  );
});

