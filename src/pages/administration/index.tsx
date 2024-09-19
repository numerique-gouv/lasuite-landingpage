import { Layout } from '@/components/Layout'
import { TITLE_SITE } from '@/constant'
import { Hero } from '@/sections/Hero'
import { ContentSection } from '@/components/ContentSection'
import { DoubleBlock } from '@/sections/DoubleBlock'
import heroImage from '@/assets/hero_administration.png'
import AdministrationImage1 from '@/assets/administration_block_1.png'
import AdministrationImage2 from '@/assets/administration_block_2.png'
import AdministrationImage3 from '@/assets/administration_block_3.png'

import { Button } from '@/components/Button'

export default function Agent() {

    const button = <Button href="/products" variant="outline">
    Explorez comment La Suite peut transformer la gestion de votre administration
    </Button>


  return (
    <Layout title={TITLE_SITE}>
      <Hero
        intro="... au service de votre administration"
        callout="Modernisez vos processus avec des outils conçus pour les besoins spécifiques des administrations publiques"
        image={heroImage}
      />
      <ContentSection verticalPadding={false}>
        <div className="pb-16">
          {button}
        </div>
      </ContentSection>
      <ContentSection background="gray">
        <p className="text-center text-lg font-medium text-gray-3">
        Les <strong>administrations publiques</strong> doivent faire face à des défis uniques en matière de gestion, de communication et de sécurité des données. <strong>La Suite propose des solutions numériques adaptées, sécurisées et interconnectées</strong> pour répondre aux besoins de la sphère publique.
        </p>
      </ContentSection>
      <ContentSection padding={false} gap="">
        <DoubleBlock image={AdministrationImage1}>
          <h3 className="text-2xl font-bold mb-4">Pourquoi choisir La Suite pour votre administration ?</h3>
          <ul className="list-disc pl-6 space-y-4 mt-8">
            <li>Garantissez la <strong>sécurité et la confidentialité</strong> des informations traitées par vos services.</li>
            <li>Centralisez et gérez vos données de manière <strong>efficace</strong> grâce à des outils de collaboration modernes.</li>
            <li>Profitez de <strong>l'interopérabilité</strong> entre les applications de La Suite pour fluidifier vos missions.</li>
          </ul>
        </DoubleBlock>
        <DoubleBlock image={AdministrationImage2} reverse={true}>
            <h3 className="text-2xl font-bold mb-4">ProConnect</h3>
          <ul className="list-disc pl-6 space-y-4 mt-8">
            <li>Intégrez AgentConnect à vos propres applications pour offrir à vos agents une connexion simplifiée et sécurisée à travers toute votre administration.</li>
            <li>AgentConnect centralise l'accès à vos outils en s'intégrant avec plusieurs ministères et agences de l'État, éliminant ainsi le besoin de multiples mots de passe et simplifiant la gestion des identités.</li>
          </ul>
        </DoubleBlock>
        <DoubleBlock image={AdministrationImage3}>
          <h3 className="text-2xl font-bold mb-4">Exemples concrets d'utilisation</h3>
          <ul className="list-disc pl-6 space-y-4 mt-8">
            <li><strong>Organisation d'événements et de visios</strong> avec webinaire.gouv.fr pour des webinaires, des réunions d'équipe et des ateliers.</li>
            <li><strong>Partage sécurisé de documents</strong> avec Résana pour le stockage et FranceTransfert pour transmettre des fichiers volumineux en toute confiance.</li>
            <li><strong>Des feuilles de calcul</strong> avec Grist pour centraliser, analyser et collaborer sur vos projets.</li>
          </ul>
        </DoubleBlock>
      </ContentSection>
      <ContentSection>
        {button}
        </ContentSection>
    </Layout>
  )
}
