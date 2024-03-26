import Head from 'next/head'
import Script from 'next/script'

export const Gaufre = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://suite-numerique-gaufre.osc-fr1.scalingo.io/public/styles/gaufre-vanilla.css"
        />
      </Head>
      <Script src="https://suite-numerique-gaufre.osc-fr1.scalingo.io/public/widget.js" />
      <button
        type="button"
        className="fr-btn fr-btn--lg fr-btn--icon fr-btn--secondary fr-icon-lasuite lasuitenumerique-gaufre-btn lasuitenumerique-gaufre-btn--vanilla"
        title="Les applications de La Suite numérique"
      >
        Les applications de La Suite numérique
      </button>
    </>
  )
}
