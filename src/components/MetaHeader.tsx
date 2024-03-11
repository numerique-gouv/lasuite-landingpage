import Head from "next/head";
import { URL_SITE } from "@/constant";

export const MetaHeader = () => (
  <Head>
    {/* title/og:title are set via the Layout */}
    <meta name="twitter:card" content="summary" />
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
    <meta name="google-site-verification" content="3aBlUYDu-74uaKsSb6HXnyW_PhHwgti18SbcZGdYbl4" />
  </Head>
);
