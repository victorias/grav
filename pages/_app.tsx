import type { AppProps } from "next/app";
import React from "react";
import Global from "../components/Global";
import "highlight.js/styles/atom-one-dark.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Global />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default App;
