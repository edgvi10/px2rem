import "../styles/material-colors-vars.scss";
import "../styles/global.scss";
import "../styles/nprogress.css";

const pkg = require("../package.json");

import NProgress from 'nprogress';
import router from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

// NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner });

router.onRouteChangeStart = () => {
    NProgress.start();
};

router.onRouteChangeComplete = () => {
    NProgress.done();
};

router.onRouteChangeError = () => {
    NProgress.done();
};

export default function MyApp({ Component, pageProps, appProps }) {
    return <Component {...appProps} {...pageProps} />
}
