import React from "react";
import Head from "next/head";

const PageTitle: React.FC = ({ children }) => {
  return (
    <Head>
      <title>{children}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export { PageTitle };
