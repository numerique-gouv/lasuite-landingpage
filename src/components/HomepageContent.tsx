import { Hero } from '@/sections/Hero'
import { Testimonies } from '@/sections/Testimonies'
import { Newsletter } from '@/sections/Newsletter'
import { EntrySchema } from '@/cms/collections/homepage'
import { Raw } from './Raw'
import { Products } from '@/sections/Products'
import { ContentSection } from '@/components/ContentSection'
import { FAQ } from '@/components/cms-blocks/FAQ'
import { useEffect } from 'react'
import heroImage from '@/assets/hero-desktop.png'
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
      <QuickNav />
      <Hero
        intro="Créer, partager, collaborer au sein la sphère publique"
        callout="La Suite numérique fédère agents et professionnels autour d'applications open-source interconnectées pour simplifier leur quotidien"
        image={heroImage}
      />
      <Products />
      <Testimonies
        title={data.testimonies_title}
        description={
          <div>
            La Suite est un projet en construction, certaines de ses
            applications sont encore en phase de test, mais{' '}
            <strong>
              d'autres sont déjà utilisées par des centaines de milliers
              d'agents et toujours plus chaque jour !
            </strong>
            <br />
            Découvrez les applications stars de La Suite
          </div>
        }
        items={
          (data.testimonies_items || []).map((item) => ({
            ...item,
            author: <Raw tag="span">{item.author}</Raw>,
            quote: <Raw>{item.quote}</Raw>,
          })) || []
        }
      />
      {/*<Faq />*/}
      <Newsletter
        title={data.newsletter_title}
        body={<Raw tag="span">{data.newsletter_description}</Raw>}
        url={data.newsletter_link}
      />
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
