import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import { MovieCo } from "./MovieCo";

function NavMovie() {
    const [movies, setMovies] = useContext(MovieCo)
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Group Two</Navbar.Brand>
        <p>List of Movies: {movies.length}</p>
        <button>Click Here</button>
      </Container>
    </Navbar>
  );
}

export default NavMovie;
