import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';

const client = new ApolloClient<NormalizedCacheObject>({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://countries.trevorblades.com/graphql',
  }),
});

export default client;
