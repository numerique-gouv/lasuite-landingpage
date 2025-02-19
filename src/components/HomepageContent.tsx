import { Hero } from '@/sections/Hero'
import { Newsletter } from '@/sections/Newsletter'
import { EntrySchema } from '@/cms/collections/homepage'
import { Raw } from './Raw'
import { Products } from '@/sections/Products'
import { UsersTeams } from '@/sections/Homepage/UsersTeams'
import { PortalProconnect } from '@/sections/Homepage/PortalProconnect'
import { EcosystemProconnect } from '@/sections/Homepage/EcosystemProconnect'
import { Editors } from '@/sections/Homepage/Editors'
import { SecureTools } from '@/sections/Homepage/SecureTools'
import { Migration } from '@/sections/Homepage/Migration'
import { SuiteTerritoriale } from '@/sections/Homepage/SuiteTerritoriale'
import { FooterLaSuite } from '@/sections/Homepage/FooterLaSuite'

import { ContentSection } from '@/components/ContentSection'
import { FAQ } from '@/components/cms-blocks/FAQ'
import { useEffect } from 'react'
import { QuickNav } from './QuickNav'

/**
 * output the homepage content with data taken from the CMS file
 *
 * several data fields contain already-made HTML, so we use the <Raw> component
 * here to abstract this notion from lower-level components
 */
export const HomepageContent = ({ data }: { data: EntrySchema }) => {
  return (
    <>
      {/*<QuickNav />*/}
      <Hero />
      <Products />
      <UsersTeams />
      <PortalProconnect />
      <EcosystemProconnect />
      <Editors />
      <SecureTools />
      <Migration />
      <SuiteTerritoriale />
      <FooterLaSuite />
      {/*<Faq />*/}
{/*      <Newsletter
        title={data.newsletter_title}
        body={<Raw tag="span">{data.newsletter_description}</Raw>}
        url={data.newsletter_link}
      />*/}
    </>
  )
}

const Faq = () => {
  useEffect(() => {
    async function loadDsfr() {
      // @ts-ignore
      if (window.dsfr) {
        return
      }
      // @ts-ignore
      await import('@gouvfr/dsfr/dist/core/core.module')
      // @ts-ignore
      await import('@gouvfr/dsfr/dist/component/accordion/accordion.module')
    }

    loadDsfr()
  }, [])

  return (
    <ContentSection gap="gap-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center px-4 ">
        Trouver les réponses à vos questions
      </h2>
      <div className="enable-dsfr">
        <FAQ
          items={[
            {
              question: 'Qu’est-ce que La Suite numérique ?',
              answer:
                'La Suite numérique est un ensemble de communs numériques libres reliés grâce au bouton Pro Connect',
            },
            {
              question: 'Comment contribuer à La Suite numérique ?',
              answer: 'Contribuer à La Suite numérique, c’est possible !',
            },
            {
              question:
                'Comment utiliser les communs numériques de La Suite numérique ?',
              answer:
                'Les communs numériques de La Suite numérique sont utilisables librement',
            },
            {
              question:
                'Comment signaler un problème sur un commun numérique de La Suite numérique ?',
              answer:
                'Vous pouvez signaler un problème sur un commun numérique de La Suite numérique en envoyant un mail à',
            },
          ]}
        />
      </div>
    </ContentSection>
  )
}
