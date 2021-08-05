import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import {Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/index";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Movie from "./pages/movie";
import AddMovie from './pages/add-movie';
import About from './pages/about-us';
import MovieDetail from './pages/movie-detail';
import AddReview from "./pages/add-review";


const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/movie" component={Movie} />
      <Route exact path="/add-movie" component={AddMovie} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/movie/:name" component={MovieDetail} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
