import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import {Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/index";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Movie from "./pages/movie";


const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/movie" component={Movie} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
