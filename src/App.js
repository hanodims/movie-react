import React, { useEffect, useState } from "react";
import './App.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';


//components
import MoviesList from "./components/MoviesList";
import WatchedList from "./components/WatchedList";
import Input from "./components/input";


function App() {

  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  
  const selectWatched = watchedMovie => {
    let watchedMoviesList = movies.filter(movie => movie != watchedMovie);
    setMovies(watchedMoviesList);
    setWatched(watched.concat([watchedMovie]));
  };
  
  const unSelectWatched  = unWatchedMovie => {
    let newMovies = watched.filter(movie => movie != unWatchedMovie);
    setWatched(newMovies);
    setMovies(movies.concat([unWatchedMovie]));
  };

const deleteMovie = deleteMovie => {
  let newMovies = movies.filter(movie => movie != deleteMovie);
  setMovies(newMovies);
  let watchedMoviesList = watched.filter(movie => movie != deleteMovie);
  setWatched(watchedMoviesList);
};

  return (
    <div className="App">
      <Container className="mt-5" >
      <Row className="justify-content-md-center">
        <Input movies={movies} setMovies={setMovies}/>
      </Row>
      <Row className="justify-content-md-center">
      <Col>
     <MoviesList movies={movies} selectWatched={selectWatched} deleteMovie={deleteMovie}/>
     </Col>
     <Col>
     <WatchedList watchedMovie={watched} unSelectWatched={unSelectWatched} deleteMovie={deleteMovie}/>
     </Col>
     </Row>
    </Container>
    </div>
  );
}

export default App;
