import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { MetaHeader as Head } from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
}
