import { Layout } from '@/components/Layout'
import { TITLE_SITE } from '@/constant'
import { Hero } from '@/sections/Hero'
import heroImage from '@/assets/editeur_hero.png'
import { ContentSection } from '@/components/ContentSection'
import { DoubleBlock } from '@/sections/DoubleBlock'
import AgentImage1 from '@/assets/agent_block_1.png'
import AgentImage2 from '@/assets/agent_block_2.png'
import { Button } from '@/components/Button'

export default function Editeur() {

  return (
    <Layout title={TITLE_SITE}>
      <Hero
        intro="... avec vous pour renforcer l’interopérabilité"
        callout="Intégrez ProConnect, la solution d’authentification centralisée de l’État, et offrez à vos utilisateurs un accès simple, sécurisé et fluide à vos produits et services."
        image={heroImage}
        imageClassName="py-10"
        backgroundImage={false}
      />
      <ContentSection padding={false} gap="">
        <DoubleBlock image={AgentImage1}>
          <h3 className="text-2xl font-bold mb-4">ProConnect : Simplifiez et sécurisez l’accès à vos services numériques</h3>
          <p>
          ProConnect est la solution d’authentification centralisée de La Suite Numérique, spécialement conçue pour simplifier l’accès aux services numériques de la sphère publique. <br/><br/>
          En un clic, les utilisateurs peuvent se connecter à l’ensemble de leurs outils quotidiens à l’aide d’une seule identité numérique, éliminant la complexité liée à la gestion de multiples identifiants. <br/><br/>
          En plus d’assurer une expérience fluide, ProConnect garantit le respect des normes de sécurité les plus élevées, s’intégrant de manière transparente aux systèmes publics et privés.
          </p>
        </DoubleBlock>
        <DoubleBlock image={AgentImage2} reverse={true} fit="object-contain">
          <h3 className="text-2xl font-bold mb-4">Éditeurs : Intégrez ProConnect et optimisez vos solutions</h3>
          <p>
          ProConnect, au cœur de La Suite Numérique de l’État, est un levier clé pour une authentification unifiée et sécurisée au sein de l’écosystème public et au-delà. <br/><br/>En tant qu’éditeurs, vous avez l’opportunité de participer à cette transformation numérique en intégrant ProConnect à vos produits. Cette solution vous permet de bénéficier de l’interopérabilité avec les services de la Suite Numérique, tout en offrant à vos utilisateurs une authentification simplifiée et conforme aux standards de sécurité de l’État.
          </p>
        </DoubleBlock>
        <div className="pt-10"></div>
      </ContentSection>
    </Layout>
  )
}
