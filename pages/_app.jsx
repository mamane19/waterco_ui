import React from "react";
import PropTypes from "prop-types";
import "@styles/main.scss";
import { Provider } from "next-auth/client";

export default function Application({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />;
    </Provider>
  );
}

Application.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
