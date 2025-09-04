import { useState } from "react";
import { searchMovie } from "../services/api";
import { MovieCard } from "../components/MovieCard";
import { Pagination } from "../components/Pagination";
import "./Search.css"; // Import do CSS

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (p = 1) => {
    if (!query) return;
    setLoading(true);
    setError(null);

    try {
      const data = await searchMovie(query, p);
      setResults(data.results);
      setTotalPages(data.total_pages);
      setPage(p);
    } catch (err) {
      setError("Erro ao buscar filmes!");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(1);
    }
  };

  return (
    <div className="search-container">
      <h1>Buscar Filmes</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Digite o nome do filme"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => handleSearch(1)}>Buscar</button>
      </div>

      {loading && <p>Carregando...</p>}
      {error && <p className="error">{error}</p>}

      <div className="movies-grid">
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination page={page} totalPages={totalPages} onChange={handleSearch} />
      )}
    </div>
  );
}