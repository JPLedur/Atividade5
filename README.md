# Movie Finder App 🎬

## Descrição

Este projeto é uma aplicação React para buscar filmes utilizando a **API do TMDB (The Movie Database)**. Permite ao usuário:

- Buscar filmes por título.
- Visualizar detalhes completos de cada filme.
- Favoritar filmes para consulta futura.

A aplicação é construída com **React 18**, **React Router DOM 6** e utiliza **Context API** para gerenciar os filmes favoritos.

---

## Funcionalidades

1. **Busca de filmes**:  
   - Digite o nome do filme no campo de busca e clique em "Buscar" ou pressione **Enter**.  
   - Resultados paginados com navegação entre páginas.

2. **Detalhes do filme**:  
   - Mostra título, imagem, sinopse, diretor, elenco e avaliação.  
   - Possibilidade de favoritar ou remover favoritos.

3. **Favoritos**:  
   - Lista de filmes adicionados aos favoritos.  
   - Permite remover filmes da lista de favoritos.

4. **Persistência**:  
   - Filmes favoritados são armazenados no **localStorage**, garantindo que os favoritos não se percam ao atualizar a página.

---

## Tecnologias Utilizadas

- **React 18**
- **React Router DOM 6**
- **Context API**
- **Fetch API** para comunicação com o TMDB
- **Vite** como bundler (opcional)

---

## Estrutura de Pastas

/src

├─ /components

│ ├─ MovieCard.jsx

│ └─ Pagination.jsx

├─ /context

│ └─ FavoritesContext.jsx

├─ /pages

│ ├─ Search.jsx

│ ├─ Details.jsx

│ └─ Favorites.jsx

├─ /services

│ └─ api.js

├─ App.jsx

└─ main.jsx


---

## Configuração e Instalação

1. Clone o repositório:

git clone <url-do-repo>
cd <nome-do-projeto>

2. Instale as dependências:

npm install

3. Execute a aplicação em modo de desenvolvimento:

npm run dev

4. Abra no navegador:

http://localhost:5173

