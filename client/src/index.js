import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NewMovies from './components/NewMovies';
import MovieInfo from './components/MovieInfo';
import './style/style.scss';
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});
const Root = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
      <Switch >
        <Route exact path="/" component={NewMovies} />
        <Route exact path="/info/:id" component={MovieInfo} />
      </Switch>
      </ApolloProvider>
    </BrowserRouter>
  )
}
ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);