import Image from 'next/image'
import { Layout } from '@/components/Layout'
import QuestionMark from '@/assets/question-mark.svg'
import { Button } from '@/components/Button'

export default function NotFound() {
  return (
    <Layout title="Page introuvable" background="gray">
      <div className="text-center max-w-[26rem] m-auto px-4 py-16 md:py-24">
        <Image src={QuestionMark} alt="" className="m-auto mb-8" />
        <h1 className="text-3xl font-bold mb-8">Ooops&nbsp;!</h1>

        <p className="mb-8">
          Il semble que la page que vous cherchez n’existe pas ou ne peut pas
          s’afficher correctement.
        </p>

        <p>
          <Button className="m-auto" href="/">
            Retour à la page d’accueil
          </Button>
        </p>
      </div>
    </Layout>
  )
}
