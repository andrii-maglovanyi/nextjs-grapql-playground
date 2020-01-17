import Document, { Html, Head, Main, NextScript } from "next/document";

export default class _document extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
