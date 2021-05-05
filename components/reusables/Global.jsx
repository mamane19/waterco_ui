import Head from "next/head";
import React from "react";
import PropTypes from "prop-types";

export default function Global(props) {
  return (
    <div className="global">
      <Head>
        <title>{props.title}</title>
      </Head>
      <main>{props.children}</main>
    </div>
  );
}

Global.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
