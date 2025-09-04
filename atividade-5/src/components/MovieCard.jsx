import {Link} from "react-router-dom"
import {useFavorites} from "../context/FavoritesContext.jsx"

export function MovieCard({movie}){
    const {favorites, toggleFavorite} = useFavorites()
    const isFav = favorites.some((f) => f.id === movie.id)

    return (
    <div style={{border: "1px solid #ccc",padding: "10px"}}> 
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.slice(0,4)}</p>
        <Link to={`/movie/${movie.id}`}>Detalhes</Link>
        <button onClick={() => toggleFavorite(movie)}>
        {isFav ? "Remover Favorito" : "Favoritar"}
        </button>
    </div>
  );
}