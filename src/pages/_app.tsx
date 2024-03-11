import localFont from "next/font/local";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { MetaHeader as Head } from "@/components";
import { MATOMO_ID } from "@/constant";
import { useEffect } from "react";

declare global {
  interface Window {
    _mtm?: any[];
  }
}

const marianne = localFont({
  src: [
    {
      path: "../fonts/subsetted/Marianne-Regular-subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/subsetted/Marianne-Regular_Italic-subset.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/subsetted/Marianne-Medium-subset.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/subsetted/Marianne-Bold-subset.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/subsetted/Marianne-ExtraBold-subset.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  /**
   * sadly Next.js doesn't allow us to preload only a specific font variant.
   * Since we have a few, it's actually counter-productive to preload them all,
   * it's better to not preloading anything.
   */
  preload: false,
  variable: "--font-marianne",
});

/**
 * Initializes Matomo tracking as per the Matomo integration guide.
 *
 * This function includes the necessary code snippets for setting up Matomo tracking
 * on a web page. It initializes the Matomo tracking script and pushes the start event
 * to the Matomo data layer.
 *
 * Note: This code is directly copied and pasted from the Matomo integration guide.
 * Ensure that MATOMO_ID is correctly defined before using this function.
 */
function setUpMatomoAnalytics() {
  // Push start event to the data layer
  const _mtm = (window._mtm = window._mtm || []);
  _mtm.push({ "mtm.startTime": new Date().getTime(), event: "mtm.Start" });

  // Add tracking script
  const d = document;
  const g = d.createElement("script");
  const s = d.getElementsByTagName("script")[0];
  g.async = true;
  g.src = MATOMO_ID;
  s?.parentNode?.insertBefore(g, s);
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    setUpMatomoAnalytics();
  }, []);

  return (
    <>
      <Head />
      {/* this wrapper is required for the next/font loaded fonts to work with tailwind */}
      <div className={`${marianne.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
