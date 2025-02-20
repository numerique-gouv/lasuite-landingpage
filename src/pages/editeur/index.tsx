import { Layout } from '@/components/Layout'
import { TITLE_SITE } from '@/constant'
import { ContentSection } from '@/components/ContentSection'
import { DoubleBlock } from '@/sections/DoubleBlock'
import EditeurImage1 from '@/assets/editeur_block_1.png'
import AgentImage2 from '@/assets/agent_block_2.png'
import { Button } from '@/components/Button'
import { QuickNav } from '@/components/QuickNav'

export default function Editeur() {
  const button = (
    <Button
      href="https://github.com/numerique-gouv/agentconnect-documentation/blob/main/doc_fs.md"
      variant="outline"
    >
      J'intègre ProConnect sur mon service
    </Button>
  )

  return (
    <Layout title="La Suite pour les éditeurs avec ProConnect">
      <ContentSection verticalPadding={false}>
        <div className="pb-16">{button}</div>
      </ContentSection>
      <ContentSection padding={false} gap="">
        <DoubleBlock image={EditeurImage1}>
          <h3 className="text-2xl font-bold mb-4">
            ProConnect : Simplifiez et sécurisez l’accès à vos services
            numériques
          </h3>
          <p>
            ProConnect est la{' '}
            <strong>solution d'authentification centralisée</strong> de La Suite
            Numérique, simplifiant l'accès aux services numériques publics.{' '}
            <br />
            <br />
            Les utilisateurs se connectent à leurs outils quotidiens avec une{' '}
            <strong>seule identité numérique</strong>, éliminant la gestion de
            multiples identifiants. <br />
            <br />
            ProConnect assure une <strong>expérience fluide</strong> et respecte
            les <strong>normes de sécurité les plus élevées</strong>,
            s'intégrant aux systèmes publics et privés.
          </p>
        </DoubleBlock>
        <DoubleBlock image={AgentImage2} reverse={true} fit="object-contain">
          <h3 className="font-bold mb-4 text-2xl">
            Éditeurs : Intégrez ProConnect et optimisez vos solutions
          </h3>
          <p>
            <strong>ProConnect</strong>, au cœur de La Suite numérique de
            l'État, offre une{' '}
            <strong>authentification unifiée et sécurisée</strong>. <br />
            <br />
            Éditeurs, intégrez ProConnect à vos produits pour participer à la{' '}
            <strong>transformation numérique</strong>. Bénéficiez de{' '}
            <strong>l'interopérabilité</strong> avec les services de La Suite
            Numérique et offrez une <strong>authentification simplifiée</strong>{' '}
            conforme aux standards de l'État.
          </p>
        </DoubleBlock>
        <div className="pt-10"></div>
      </ContentSection>
      <ContentSection>{button}</ContentSection>
    </Layout>
  )
}
