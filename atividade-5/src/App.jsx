import { Routes, Route, Link } from "react-router-dom";
import Search from "./pages/Search";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import { FavoritesProvider } from "./context/FavoritesContext";

function App() {
  return (
    <FavoritesProvider>
      <nav>
        <Link to="/">Buscar</Link> | <Link to="/favorites">Favoritos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/movie/:id" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<p>Página não encontrada</p>} />
      </Routes>
    </FavoritesProvider>
  );
}

export default App;