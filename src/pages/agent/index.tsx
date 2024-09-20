import { Layout } from '@/components/Layout'
import { TITLE_SITE } from '@/constant'
import { Hero } from '@/sections/Hero'
import heroImage from '@/assets/hero_agent.png'
import { ContentSection } from '@/components/ContentSection'
import { DoubleBlock } from '@/sections/DoubleBlock'
import AgentImage1 from '@/assets/agent_block_1.png'
import AgentImage2 from '@/assets/agent_block_2.png'
import { Button } from '@/components/Button'

export default function Agent() {
  const button = (
    <Button href="/products" variant="outline">
      Découvrez comment La Suite peut améliorer votre efficacité quotidienne
    </Button>
  )

  return (
    <Layout title={TITLE_SITE}>
      <Hero
        intro="... un écosystème numérique pour faciliter votre quotidien"
        callout="Simplifiez vos missions grâce à des outils numériques interconnectés, conçus pour répondre aux besoins spécifiques des agents publics"
        image={heroImage}
        backgroundImage={false}
      />
      <ContentSection verticalPadding={false}>
        <div className="pb-16">{button}</div>
      </ContentSection>
      <ContentSection background="gray">
        <p className="text-lg font-medium text-gray-3 text-center">
          En tant qu'agent public,{' '}
          <strong>vous avez besoin d'outils adaptés</strong> à vos missions
          quotidiennes et qui respectent les spécificités du service public. La
          Suite met à votre disposition des{' '}
          <strong>
            applications sécurisées, open-source, et interconnectées qui
            facilitent la collaboration, la communication et l'organisation
          </strong>
        </p>
      </ContentSection>
      <ContentSection padding={false} gap="">
        <DoubleBlock image={AgentImage1}>
          <h3 className="text-2xl font-bold mb-4">
            Pourquoi choisir La Suite ?
          </h3>
          <ul className="list-disc pl-6 space-y-4 mt-8">
            <li>
              Un <strong>environnement sécurisé</strong> conçu pour répondre aux
              exigences de l'État.
            </li>
            <li>
              Des <strong>outils simples</strong> à utiliser, même sans
              expertise technique.
            </li>
            <li>
              Une <strong>interopérabilité entre les applications</strong> pour
              un flux de travail sans friction.
            </li>
          </ul>
        </DoubleBlock>
        <DoubleBlock image={AgentImage2} reverse={true}>
          <h3 className="text-2xl font-bold mb-4">
            Exemples concrets d'utilisation
          </h3>
          <ul className="list-disc pl-6 space-y-4 mt-8">
            <li>
              <strong>Communication simplifiée</strong> avec Tchap pour échanger
              instantanément avec vos collègues.
            </li>
            <li>
              <strong>Organisation facilitée</strong> avec Resana pour stocker,
              partager et collaborer sur vos documents en toute sécurité.
            </li>
            <li>
              <strong>Réunions distantes</strong> facilitées grâce à WebConf
              pour tenir vos réunions à distance dans un cadre sécurisé
            </li>
          </ul>
        </DoubleBlock>
      </ContentSection>
      <ContentSection>{button}</ContentSection>
    </Layout>
  )
}
