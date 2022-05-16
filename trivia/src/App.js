import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Login, Game, Settings, Feedback, Ranking, NotFound } from './pages';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/playGame" component={ Game } />
        <Route path="/settings" component={ Settings } />
        <Route path="/feedback" component={ Feedback } />
        <Route path="/ranking" component={ Ranking } />
        <Route component={ NotFound } />

        {/* <Route path="/playGame" /> */}
      </Switch>
    </div>
  );
}
