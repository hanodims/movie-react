import React, { useEffect, useState } from "react";

// Components
import SearchBar from "./SearchBar";

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


const MoviesList = props => {
    const [lst,setLst] = useState(props.movies)
    const [query,setQuery] = useState("")

    useEffect(()=>{
        let moviesList = props.movies.filter(movie =>
            movie.toLowerCase().includes(query.toLowerCase()));
            setLst(moviesList);
    },[query,props.movies])

    const moviesList = lst.map(movie => (
        <tr className="text-left">
        <td>{movie}</td>
        <td><Button onClick={() => props.selectWatched(movie)}>Watched</Button></td>
        <td><Button key ={movie.imdbID} onClick={() => props.deleteMovie(movie)}>Delete</Button></td>
        </tr>
    ));
  
    return (

        <div>
        <h3>Watch List</h3>
        <SearchBar setQuery={setQuery}/>
        <Table striped bordered hover size="sm">
            <tbody>
            {moviesList}
            </tbody>
        </Table>
        </div>
     
    );
  };
  
  export default MoviesList;