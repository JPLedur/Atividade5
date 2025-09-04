import { useFavorites } from "../context/FavoritesContext";
import {MovieCard} from "../components/MovieCard";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div>
      <h1>Meus Favoritos</h1>
      {favorites.length === 0 && <p>Nenhum filme favoritado ainda.</p>}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

