import { gql } from '@apollo/client';

const GET_SHOWS = gql`
{
    newShows {
        id
        poster_path
        original_name
    }
}
`

export default GET_SHOWS;