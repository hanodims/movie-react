import React, {useState } from "react";

function Input(props){
const [newMovie, setNewMovies] = useState("");
const handelClick = () => {
    props.setMovies([...props.movies,newMovie])
};
const handelChange = event => {
    setNewMovies(event.target.value)
}; 

return (
    <div>
        <input type="text" onChange={handelChange}/>
        <button onClick={handelClick}>+add</button>
    </div>
);
} 

export default Input;
