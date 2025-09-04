import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/api";
import { useFavorites } from "../context/FavoritesContext";

export default function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch {
        setMovie(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (!movie) return <p>Erro ao carregar filme</p>;

  const isFav = favorites.some((f) => f.id === movie.id);

  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <p>Diretor: {movie.credits.crew.find((c) => c.job === "Director")?.name}</p>
      <p>
        Elenco: {movie.credits.cast.slice(0, 5).map((c) => c.name).join(", ")}
      </p>
      <p>Avaliação: {movie.vote_average}</p>
      <button onClick={() => toggleFavorite(movie)}>
        {isFav ? "Remover Favorito" : "Adicionar Favorito"}
      </button>
    </div>
  );
}
