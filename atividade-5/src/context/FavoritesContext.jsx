import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext()

export const FavoritesProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const stored = localStorage.getItem("favorites")
        if(stored) setFavorites(JSON.parse(stored))
    }, [])

    const toggleFavorite = (movie) => {
        setFavorites((prev) =>
        prev.find((f) => f.id == movie.id)
        ? prev.filter((f) => f.id !== movie.id)
        : [...prev,movie]
    )}

    return(
        <FavoritesContext.Provider value ={{favorites,toggleFavorite}}>
        {children}
        </FavoritesContext.Provider>
        )
}

export const useFavorites = () => useContext(FavoritesContext);
