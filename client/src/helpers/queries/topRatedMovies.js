import { gql } from '@apollo/client';

const TOP_RATED_MOVIES = gql`
{
    topRatedMovies {
        id
        poster_path
        title
    }
}
`

export default TOP_RATED_MOVIES;