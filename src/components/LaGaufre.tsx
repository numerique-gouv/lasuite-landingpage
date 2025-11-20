import { Gaufre } from '@gouvfr-lasuite/integration'
import '@gouvfr-lasuite/integration/dist/css/gaufre.css'
import Script from 'next/script'
import { createGlobalStyle } from 'styled-components'

const GaufreStyle = createGlobalStyle`
  .lasuite-gaufre-btn, .lasuite-gaufre-btn.lasuite--gaufre-opened {
    box-shadow: inset 0 0 0 0 !important;
    border-radius: 4px !important;
  }

  .lasuite-gaufre-btn.lasuite--gaufre-opened {
    background-color: #f2f5f4 !important;
  }
  
  .lasuite-gaufre-btn:before {
    background-color: #3E5DE7 !important;
  }
  
  .lasuite-gaufre-btn--vanilla.lasuite-gaufre-btn--small {
    min-height: 2.5rem !important;
    max-width: 2.5rem !important;
    max-height: 2.5rem !important;
  }

  .lasuite-gaufre-btn--vanilla:active {
  }

  @media screen and (max-width: 40em) {
      .lasuite-gaufre-btn {
        top: 15px !important;
      }
  }

  @media screen and (min-width: 40em) {
    #lasuite-gaufre-popup .lagaufre {
      position: fixed !important;
      width: 304px !important;
      height: 352px !important;
      top: 73.5px !important;
      right: 15px !important;
    }
  }
`

export const LaGaufre = () => {
  return (
    <>
      <Script
        src="https://integration.lasuite.numerique.gouv.fr/api/v1/gaufre.js"
        strategy="lazyOnload"
        id="lasuite-gaufre-script"
      />
      <GaufreStyle />
      <Gaufre variant="small" />
    </>
  )
}
