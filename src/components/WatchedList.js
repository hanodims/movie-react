import React from "react";

// Components
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


const WatchedList = props => {
    const watchedMovie = props.watchedMovie.map(movie => (
        <tr className="text-left">
        <td>{movie}</td>
        <td><Button key ={movie.imdbID} onClick={() => props.unSelectWatched(movie)}>UnWatched</Button></td>
        <td><Button key ={movie.imdbID} onClick={() => props.deleteMovie(movie)}>Delete</Button></td>
        </tr>
    ));
  
    return (
        <div>
        <h3>Watched</h3>
        <Table striped bordered hover size="sm">
        <tbody>
        {watchedMovie}
        </tbody>
        </Table>
        </div>
     
    );
  };
  
  export default WatchedList;