import PropTypes from "prop-types"

function Movie(movie) {
    return (
        <div>
            <img src={movie.coverImg} alt={movie.title}/>
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul>
                {movie.genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    )
}


Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;