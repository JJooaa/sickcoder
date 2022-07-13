import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <NextNProgress />
    </Layout>
  );
}

export default MyApp;
