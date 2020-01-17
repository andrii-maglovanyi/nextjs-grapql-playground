import { NextPage } from "next";
import { ApolloError } from "apollo-client";

import Header from "containers/header";
import SnackbarProvider from "lib/hooks/use-snackbar";

type Props = {
  children?: React.ReactNode;
  data?: any;
  loading?: boolean;
  error?: ApolloError;
};

const withLayout = (Page: NextPage<Props>): NextPage => {
  const Layout: NextPage<Props> = props => (
    <SnackbarProvider>
      <Header />
      <Page {...props} />
    </SnackbarProvider>
  );

  Layout.displayName = Page.displayName || Page.name || "Page";

  return Layout;
};

export default withLayout;
