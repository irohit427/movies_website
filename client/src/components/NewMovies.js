import React from 'react'
import { useQuery } from '@apollo/client'
import Loader from './Loader'
import MovieList from './MovieList'
import GET_MOVIES from '../operations'

function NewMovies() {
    const { loading, error, data } = useQuery(GET_MOVIES);
    if (loading) return <Loader />
    
    if (error) return <p>An error occured!</p>;

    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Latest Movie</h1>
            </div>
            <section>
                <MovieList movies={data.newMovies}/>
            </section>
        </div>
    )
}

export default NewMovies;
