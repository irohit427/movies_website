import { gql } from '@apollo/client';

const GET_MOVIES = gql`
{
    newMovies {
        id
        poster_path
        title
    }
}
`

export default GET_MOVIES;