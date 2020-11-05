import { gql } from '@apollo/client';

const GET_MOVIES = gql`
{
    newMovies {
        id
        poster_path
        title
        vote_average
    }
}
`

export default GET_MOVIES;