const API_KEY = "4c0eea0cc9977cbbd290e2f6271a0050";
const BASE_URL = "https://api.themoviedb.org/3";

export const searchMovie = async (query,page = 1) => {
    const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}&language=pt-BR`
    );
    if(!res.ok) throw new Error("Erro ao buscar filme!");
        return res.json();
};

export const getMovieDetails = async (id) => {
    const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR&append_to_response=credits`
    );
    if (!res.ok) throw new Error("Erro ao buscar detalhes");
  return res.json();
};