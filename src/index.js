import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MovieList from './components/MovieList';
import NavBar from './components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <NavBar />
      <MovieList />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
