import React, { useEffect, useState } from "react";
import { Layout } from "../components/index";

import "tailwindcss/tailwind.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    // make sure header is always rendered on top of whatever is rendered
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
