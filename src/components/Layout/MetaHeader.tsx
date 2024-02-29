import Head from "next/head";
import { URL_SITE } from "@/constant";

export const MetaHeader = () => (
  <Head>
    <title>La Suite numérique</title>
    <meta name="twitter:card" content="summary" />
    <meta property="og:title" content="Travailler avec La Suite numérique" />
    <meta
      property="og:description"
      content="La Suite numérique fédère tous les agents et professionnels de la sphère publique."
    />
    <meta name="og:image" content={`https://${URL_SITE}/thumbnail.webp`} />
    <meta
      name="image"
      property="og:image"
      content={`https://${URL_SITE}/thumbnail.webp`}
    />
  </Head>
);
