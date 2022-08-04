import React, { createContext, useState} from 'react'

export const MovieCo = createContext();

export function MovieProvider(props) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme ((curr) => (curr === 'light' ? 'dark' : 'light'))}
    const [movies, setMovies] = useState([
        {
          name: "Harry Potter",
          price: "$10",
          id: 23124,
        },
        {
          name: "Prison Break",
          price: "$10",
          id: 2566124,
        },
        {
          name: "GOT",
          price: "$10",
          id: 23524,
        },
      ]);
  return (
    <MovieCo.Provider value={[movies, setMovies]( theme, toggleTheme)}>
    {props.children}
    
    </MovieCo.Provider>
  )
}

