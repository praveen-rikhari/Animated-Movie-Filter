import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import Filter from './Filter';
import { motion } from 'framer-motion';
import './App.css'

function App() {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular()
  }, [])

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=a75e1181d80839959a836a832ba82016&language=en-US&page=1');
    const movies = await data.json();
    setPopular(movies.results)
    setFiltered(movies.results)
    // console.log(movies.results);
  }

  return (
    <>
      <div className="App">
        <h1>Movies List</h1>
        <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
        <motion.div layout className="popular-movies">
          {
            filtered.map((movie) => {
              return <Movie key={movie.id} movie={movie} />
            })
          }
        </motion.div>
      </div>
    </>
  )
}

export default App;