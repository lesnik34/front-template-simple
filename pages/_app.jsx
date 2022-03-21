import React from "react";

import Layout from "@components/Global/Layout";

import "@styles/index.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
