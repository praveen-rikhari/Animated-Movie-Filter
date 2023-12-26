import { motion } from 'framer-motion';

function Movie({ movie }) {
    return (
        <motion.div layout className="movie-card">
            <div className="movie-image-container">
                <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face/" + movie.backdrop_path} alt="" />
            </div>
            <div className="overlay">
                <h2>{movie.original_title}</h2>
            </div>
        </motion.div>
    )
}

export default Movie;