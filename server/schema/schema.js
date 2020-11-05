const axios = require('axios')
const graphql = require('graphql');

const NewMovie = new graphql.GraphQLObjectType({
    name: 'NewMovie',
    fields: {
        id: {type: graphql.GraphQLInt},
        poster_path: {type: graphql.GraphQLString},
        title: {type: graphql.GraphQLString},
    }
});

const PopularShows = new graphql.GraphQLObjectType({
    name: 'PopularShows',
    fields: {
        id: {type: graphql.GraphQLInt},
        poster_path: {type: graphql.GraphQLString},
        name: {type: graphql.GraphQLString}
    }
});

const TopRatedMovies = new graphql.GraphQLObjectType({
    name: 'TopRatedMovies',
    fields: {
        id: {type: graphql.GraphQLInt},
        poster_path: {type: graphql.GraphQLString},
        title: {type: graphql.GraphQLString}
    }
});

const Trailer = new graphql.GraphQLObjectType({
    name: 'Trailer',
    fields: {
        id: {type: graphql.GraphQLString},
        key: {type: graphql.GraphQLString},
    }
});

const Cast = new graphql.GraphQLObjectType({
    name: 'Cast',
    fields: {
        character: {type: graphql.GraphQLString},
        name: {type: graphql.GraphQLString},
        profile_path: {type: graphql.GraphQLString},
        order: {type: graphql.GraphQLString},
    }
})

const Crew = new graphql.GraphQLObjectType({
    name: 'Crew',
    fields: {
        name: {type: graphql.GraphQLString},
        profile_path: {type: graphql.GraphQLString},
        job: {type: graphql.GraphQLString},
        department: {type: graphql.GraphQLString},
        id: {type: graphql.GraphQLString}
    }
})
const MovieCredits = new graphql.GraphQLObjectType({
    name: 'MovieCredits',
    fields: {
        id: {type: graphql.GraphQLString},
        crew: {type: new graphql.GraphQLList(Crew)},
        cast: {type: new graphql.GraphQLList(Cast)}
    }
})
const MovieReviews = new graphql.GraphQLObjectType({
    name: 'MovieReviews',
    fields:{
        id: {type: graphql.GraphQLString},
        content: {type: graphql.GraphQLString},
        author: {type: graphql.GraphQLString},
    }
})

const MovieInfo = new graphql.GraphQLObjectType({
    name: 'MovieInfo',
    fields: {
        id: {type: graphql.GraphQLInt},
        title: {type: graphql.GraphQLString},
        poster_path: {type: graphql.GraphQLString},
        genres: {type: graphql.GraphQLString},
        release_date: {type: graphql.GraphQLString},
        overview: {type: graphql.GraphQLString},
        vote_average: {type: graphql.GraphQLString},
        production_companies: {type: graphql.GraphQLString},
        runtime: {type: graphql.GraphQLString},
        original_language: {type: graphql.GraphQLString},
        videos: {
            type: new graphql.GraphQLList(Trailer),
            args: {id: { type: graphql.GraphQLString } },
            resolve(parentValue, args) {
               return axios.get(`https://api.themoviedb.org/3/movie/${parentValue.id}/videos?api_key=${process.env.API}&language=en-US`)
               .then(res => {
                   const trailers = res.data.results;
                   trailers.map(trailer => {
                       trailer.key = 'https://www.youtube.com/embed/' + trailer.key
                   })
                   return trailers;
               })
            }
        },
        movieReviews: {
            type: new graphql.GraphQLList(MovieReviews),
            args: {id: {type: graphql.GraphQLString}},
            resolve(parentValue, args) {
              return axios.get(`https://api.themoviedb.org/3/movie/${parentValue.id}/reviews?api_key=${process.env.API}&language=en-US&page=1`)
              .then(res =>  res.data.results)
            }
          },
          movieCredits: {
            type: MovieCredits,
            args: {id: {type: graphql.GraphQLString}},
            resolve(parentValue, args) {
              return axios.get(`https://api.themoviedb.org/3/movie/${parentValue.id}/credits?api_key=${process.env.API}&language=en-US&page=1`)
              .then(res => {
                  const credits = res.data;
                  credits.cast = credits.cast.filter(c => c.profile_path != null)
                  credits.cast.map(c => c.profile_path = "https://image.tmdb.org/t/p/w500"+ c.profile_path);
                  return credits;
              })
            }
          }
    }
});

const RootQuery = new graphql.GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        trailers: {
            type: new graphql.GraphQLList(Trailer),
            args: {id: { type: graphql.GraphQLString } },
            resolve(parentValue, args) {
               return axios.get(`https://api.themoviedb.org/3/movie/${args.id}/videos?api_key=${process.env.API}&language=en-US`)
               .then(res => res.data.results)
            }
        },
        newMovies: {
            type: new graphql.GraphQLList(NewMovie),
            resolve() {
                return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API}&language=en-US&page=1`)
                    .then(response => {
                        const movies = response.data.results;
                        movies.map(movie => movie.poster_path = "https://image.tmdb.org/t/p/w500" + movie.poster_path)
                        return movies;
                    })
            }
        },
        newShows: {
            type: new graphql.GraphQLList(PopularShows),
            resolve() {
                return axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API}&language=en-US&page=1`)
                    .then(response => {
                        const shows = response.data.results;
                        shows.map(show => show.poster_path = "https://image.tmdb.org/t/p/w500" + show.poster_path);
                        return shows;
                    })
            }
        },
        topRatedMovies: {
            type: new graphql.GraphQLList(TopRatedMovies),
            resolve() {
                return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API}&language=en-US&page=1`)
                .then(response => {
                    const movies = response.data.results;
                    movies.map(movie => movie.poster_path = "https://image.tmdb.org/t/p/w500" + movie.poster_path);
                    return movies;
                })
            }
        },
        movieInfo: {
            type: MovieInfo,
            args: {id: {type: graphql.GraphQLString}},
            resolve(parentValue, args) {
                return axios.get(`https://api.themoviedb.org/3/movie/${args.id}?api_key=${process.env.API}&language=en-US&page=1`)
              .then(res => {
                  const movie = res.data;
                  movie.poster_path = "https://image.tmdb.org/t/p/w500"+movie.poster_path
                  movie.genres = movie.genres.map(g => g.name).join(', ')
                  movie.production_companies = movie.production_companies.map(g => g.name).join(', ')
                  movie.runtime+= ' min.'
                  return movie
              })
            }
        }
    }
})

module.exports = new graphql.GraphQLSchema({
    query: RootQuery
})