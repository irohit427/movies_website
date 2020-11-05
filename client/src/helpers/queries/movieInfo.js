import { gql } from '@apollo/client';

const MOVIE_INFO = gql`
query ($id: String!) {
    movieInfo(id: $id) {
        id
        poster_path
        title
        original_language
        release_date
        runtime
        vote_average
        genres
        overview

        videos(id: $id) {
          id
          key
        }

        movieCredits(id: $id) {
    	    id
            crew {
              name
              department
              job
            }
            cast {
              name
              profile_path
              character
            }
        }
    }
}
`

export default MOVIE_INFO;