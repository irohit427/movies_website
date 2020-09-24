import React from 'react'
import { Link } from 'react-router-dom';

export default function MovieList({movies}) {
  return (
    <div className="row">
      {movies.map(movie => (
          <article key={movie.id} className="movie_list">
            <Link to={"/info/"+movie.id}> 
                <img src={movie.poster_path} alt={movie.poster_path} />
            </Link>
            <h1 >{movie.title}</h1>
          </article>
      ))}
    </div>
  )
}

MovieList.defaultProps = {
  movies: []
}