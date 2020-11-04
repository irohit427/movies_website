import { gql } from '@apollo/client';

const GET_SHOWS = gql`
query {
    newShows {
        id
        poster_path
        name
    }
}
`

export default GET_SHOWS;