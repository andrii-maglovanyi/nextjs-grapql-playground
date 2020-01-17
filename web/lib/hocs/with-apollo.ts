import withApollo from "next-with-apollo";

import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";

import { auth } from "../../firebase";

export default withApollo(({ initialState }) => {
  const httpLink = createHttpLink({
    uri: `${process.env.API_HOST}/api`
  });

  const authorizationHeaderLink = setContext(async (_, { headers }) => {
    const idToken = await auth.getIdToken();
    const authorizationHeader = idToken
      ? { authorization: `Bearer ${idToken}` }
      : null;
    return {
      headers: {
        ...headers,
        ...authorizationHeader
      }
    };
  });

  return new ApolloClient({
    link: authorizationHeaderLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {}),
    connectToDevTools: true
  });
});
