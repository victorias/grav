import type { AppProps } from "next/app";
import React from "react";
import Global from "../components/Global";

function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Global />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default App;
