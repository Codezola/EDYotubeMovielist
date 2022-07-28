import React, { Component } from 'react'
import MovieList from './MovieList'
import NavMovie from './Nav'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MovieProvider } from './MovieCo'
import AddMovies from './AddMovies'



class App extends Component {
  render() {
    return (
      <MovieProvider>
      <div className='App'>
      <NavMovie />
      <AddMovies />
      <MovieList />
      </div>
      </MovieProvider>
    )
  }
}
export default App
