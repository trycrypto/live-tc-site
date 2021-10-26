import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@TryCrypto" />
          <meta name="twitter:creator" content="@TryCrypto" />
          <meta name="robots" content="index,follow" />
          <link rel="icon" href="/tc.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
