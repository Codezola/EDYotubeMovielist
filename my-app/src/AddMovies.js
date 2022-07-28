import React, {useContext, useState} from 'react'
import { MovieCo } from './MovieCo';


export default function AddMovies() {
    const [name, setName] = useState ('');
    const [price, setPrice] = useState ('');
    const [movies, setMovies] = useContext (MovieCo);

    const updateName = e => {
        setName(e.target.value);
    };
    const updatePrice = e => {
        setPrice(e.target.value);
    };
    const addMovie = e => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name: name, price:price}])
    };
  return (
    <form onSubmit={addMovie}>
    <input type='text' name='name' value={name} onChange={updateName}/>
    <input type='text' name='name' value={price} onChange={updatePrice}/>
    <button>Submit</button>
    </form>
  )
}
