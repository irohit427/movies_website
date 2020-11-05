import { gql } from '@apollo/client';

const TOP_RATED_MOVIES = gql`
{
    topRatedMovies {
        id
        poster_path
        title
        vote_average
    }
}
`

export default TOP_RATED_MOVIES;