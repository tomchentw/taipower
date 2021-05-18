import * as Chakra from "@chakra-ui/react";
import Head from "next/head";
import * as React from "react";

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>台電資訊鏡像站</title>
        <meta name="description" content="Generated by 台電資訊鏡像站" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Chakra.ChakraProvider>
        <Component {...pageProps} />
      </Chakra.ChakraProvider>
    </React.Fragment>
  );
}
