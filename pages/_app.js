import Head from "next/head";

import GlobalStyle from "@/components/GlobalStyle";
import Header from "@/components/Header";

import { CurrentSlideProvider } from "@/context/CurrentSlideContext";

export default function App({ Component, pageProps }) {
  return (
    <CurrentSlideProvider>
      <Head>
        <title>Site Title</title>
      </Head>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </CurrentSlideProvider>
  );
}
