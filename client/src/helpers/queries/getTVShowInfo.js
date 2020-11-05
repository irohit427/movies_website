import { gql } from '@apollo/client';

const TVSHOW_INFO = gql`
query ($id: String!) {
    tvInfo(id: $id) {
        id
        poster_path
        name
        original_language
        episode_run_time
        last_air_date
        vote_average
        number_of_episodes
        number_of_seasons
        created_by
        seasons{
          name
          overview
          episode_count
          air_date
          poster_path
        }
        genres
        overview

        videos(id: $id) {
          id
          key
        }

        tvCredits(id: $id) {
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
        similarTvShows(id: $id) {
          name
          poster_path
          vote_average
          id
        }
    }
}
`

export default TVSHOW_INFO;