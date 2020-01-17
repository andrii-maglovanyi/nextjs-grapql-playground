import { ApolloProvider } from "@apollo/react-hooks";
import Head from "next/head";

import { StateProvider } from "store";
import withApollo from "lib/hocs/with-apollo";

import "../styles.css";

export default withApollo(({ Component, pageProps, apollo }) => (
  <StateProvider>
    <ApolloProvider client={apollo}>
      <Head>
        <title>Algoholic</title>
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  </StateProvider>
));
