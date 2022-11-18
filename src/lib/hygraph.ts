import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

export const hygraph = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cla34repn2nlx01ug8piw52sz/master',
  cache: new InMemoryCache(),
});

export const PROJECTS = gql`
    {
      projects {
        createdAt
        id
        banner
        github
        deploy
        description
        technologies
        title
      }
    }
  `