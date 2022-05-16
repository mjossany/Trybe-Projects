import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList, NewMovie, MovieDetails, EditMovie, NotFound } from './pages';

// Nos momentos que tive dúvidas e dificuldade nesse projeto consultei o repositório dos colegas de Trybe Erick Kreis e Miguel Retroz. Segue link para o repositório de ambos respectivamente: https://github.com/tryber/sd-012-project-movie-card-library-crud/pull/3 e https://github.com/tryber/sd-012-project-movie-card-library-crud/tree/eric-kreis-project-movie-card-library-crud

function App() {
  return (
    <div>
      <div>Movie Card Library CRUD</div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
          <Route exact path="/*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
