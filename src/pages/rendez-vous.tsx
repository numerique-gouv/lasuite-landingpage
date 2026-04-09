import { NavBar } from '@/components/NavBar'
import WelcomeLaSuite from '@/assets/welcomesuite.png'
import Image from 'next/image'
import { Button } from '@/components/ui-kit-v2/Button'
import { useState } from 'react'
import ChevronRight from '@mui/icons-material/ChevronRight'
import { CALCOM_URL, NEWSLETTER_FORM, WEBINAIRE_URL } from '@/constant'
import {
  AppointmentIcon,
  ArrowBackIcon,
  DocumentationIcon,
  NewsletterIcon,
  ProductsGridIcon,
  WarningTriangleIcon,
  WebinarIcon,
} from '@/components/icons/rendezvous'

type StepId =
  | 'start'
  | 'role'
  | 'needs'
  | 'end_territoriale'
  | 'end_public'
  | 'end_enterprise'
  | 'end_webinaire'

type Answers = {
  role?: 'prive' | 'public' | 'hospitalier' | 'territoriale'
  needs?: '1' | '10' | '100' | 'more'
}

type ButtonSelectionProps = {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const ButtonSelection = ({
  children,
  onClick,
  icon,
  iconPosition = 'right',
}: ButtonSelectionProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`transition ease-in-out delay-50 duration-200 mt-2 w-full rounded-md border border-gray-100 p-2 pl-3 text-sm font-medium text-gray-850 bg-transparent hover:bg-gray-050 flex items-center gap-2`}
    >
      {icon && iconPosition === 'left' && (
        <span className="text-gray-550" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="flex-1 text-left">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="text-gray-550" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  )
}

const WarningHospital = ({ role }: { role?: Answers['role'] }) => {
  if (role !== 'hospitalier') {
    return null
  }

  return (
    <div className="p-3 gap-2 rounded border border-gray-100 bg-gray-025 flex align-start mb-6">
      <span>
        <WarningTriangleIcon />
      </span>
      <span className="text-gray-600 text-[12px]">
        LaSuite n'est pas encore homologuée pour les données de santé. Pour cet
        usage,{' '}
        <a
          href="https://github.com/suitenumerique/"
          className="underline"
          target="_blank"
          rel="noreferrer"
          aria-label="Déployer votre propre instance (nouvelle fenêtre)"
        >
          déployez votre propre instance
        </a>{' '}
        via le code open-source.
      </span>
    </div>
  )
}

export default function RendezVous() {
  const [stepId, setStepId] = useState<StepId>('start')
  const [answers, setAnswers] = useState<Answers>({})
  const [history, setHistory] = useState<StepId[]>([])
  const isEnd = stepId.startsWith('end_')

  const goTo = (next: StepId) => {
    setHistory((prev) => [...prev, stepId])
    setStepId(next)
  }

  const goBack = () => {
    setHistory((prev) => {
      if (prev.length === 0) return prev
      const previous = prev[prev.length - 1]
      setStepId(previous)
      return prev.slice(0, -1)
    })
  }

  const restart = () => {
    setAnswers({})
    setHistory([])
    setStepId('start')
  }

  const submitAnswer = (key: keyof Answers, value: Answers[keyof Answers]) => {
    const nextAnswers = { ...answers, [key]: value }
    setAnswers(nextAnswers)

    if (stepId === 'role') {
      if (value === 'prive') return goTo('end_enterprise')
      if (value === 'territoriale') return goTo('end_territoriale')
      return goTo('needs')
    }

    if (stepId === 'needs') {
      if (value === '100' || value === 'more') return goTo('end_public')
      return goTo('end_webinaire')
    }
  }

  return (
    <div className="min-h-screen flex flex-col text-body">
      <NavBar isLogoGouv={false} />
      <div className="mt-12 mx-auto max-w-[410px] w-full">
        <div className="p-6">
          {stepId === 'start' && (
            <>
              <div className="w-full">
                <Image
                  className="mx-auto"
                  src={WelcomeLaSuite}
                  width={250}
                  alt=""
                />
              </div>
              <h3 className="text-gray-850 text-[22px] sm:leading-[42px] md:leading-[48px] font-bold">
                Démarrer avec LaSuite
              </h3>
              <p className="text-gray-600 text-sm pb-4">
                Répondez à quelques questions pour être orienté vers le bon
                interlocuteur et faciliter l'adoption de LaSuite dans votre
                organisation.
              </p>
              <Button onClick={() => goTo('role')} fullWidth>
                Commencer
              </Button>
              <Button
                className="mt-2"
                href="/"
                variant="tertiary_neutral"
                fullWidth
              >
                Retour à l’accueil
              </Button>
            </>
          )}

          {stepId === 'role' && (
            <>
              <Button
                className="!w-fit"
                icon={<ArrowBackIcon />}
                onClick={() => goBack()}
                size="small"
                variant="tertiary_neutral"
              >
                Retour
              </Button>
              <p className="my-6 text-gray-850 text-[22px] font-bold">
                Quel est votre employeur ?
              </p>
              <ButtonSelection
                icon={<ChevronRight />}
                onClick={() => submitAnswer('role', 'prive')}
              >
                Entreprise et association
              </ButtonSelection>
              <ButtonSelection
                icon={<ChevronRight />}
                onClick={() => submitAnswer('role', 'public')}
              >
                Fonction publique d'État
              </ButtonSelection>
              <ButtonSelection
                icon={<ChevronRight />}
                onClick={() => submitAnswer('role', 'hospitalier')}
              >
                Fonction publique hospitalière
              </ButtonSelection>
              <ButtonSelection
                icon={<ChevronRight />}
                onClick={() => submitAnswer('role', 'territoriale')}
              >
                Fonction publique territoriale
              </ButtonSelection>
              <ButtonSelection
                icon={<ChevronRight />}
                onClick={() => submitAnswer('role', 'public')}
              >
                Autre administration publique
              </ButtonSelection>
            </>
          )}

          {stepId === 'needs' && (
            <>
              <Button
                className="!w-fit"
                icon={<ArrowBackIcon />}
                onClick={() => goBack()}
                size="small"
                variant="tertiary_neutral"
              >
                Retour
              </Button>
              <p className="my-6 text-gray-850 text-[22px] font-bold">
                Qui est concerné par votre projet LaSuite ?
              </p>
              <ButtonSelection
                icon={<ChevronRight />}
                onClick={() => submitAnswer('needs', '1')}
              >
                1 à 10 personnes
              </ButtonSelection>
              <ButtonSelection
                icon={<ChevronRight />}
                onClick={() => submitAnswer('needs', '10')}
              >
                10 à 100 personnes
              </ButtonSelection>
              <ButtonSelection
                icon={<ChevronRight />}
                onClick={() => submitAnswer('needs', '100')}
              >
                100 à 1000 personnes
              </ButtonSelection>
              <ButtonSelection
                icon={<ChevronRight />}
                onClick={() => submitAnswer('needs', 'more')}
              >
                Plus de 1000 personnes
              </ButtonSelection>
            </>
          )}

          {stepId === 'end_enterprise' && (
            <>
              <Button
                className="!w-fit"
                icon={<ArrowBackIcon />}
                onClick={() => goBack()}
                size="small"
                variant="tertiary_neutral"
              >
                Retour
              </Button>
              <h3 className="my-6 text-gray-850 text-[22px] font-bold">
                LaSuite n'est pas disponible pour votre organisation
              </h3>
              <p className="text-gray-600 text-sm pb-4">
                LaSuite est réservée aux agents publics. Vous pouvez toutefois
                être invité par un agent public ou{' '}
                <a
                  href="https://github.com/suitenumerique/"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Déployer votre propre instance (nouvelle fenêtre)"
                >
                  déployer votre propre instance
                </a>
                .
              </p>
              <Button href="/" variant="secondary_brand" fullWidth>
                Retour à l’accueil
              </Button>
              <div className="my-4 flex flex-col gap-[5px]">
                <Button
                  className="!justify-start !text-left"
                  href={NEWSLETTER_FORM}
                  target="_blank"
                  size="small"
                  fullWidth
                  variant="tertiary_neutral"
                  icon={
                    <span className="flex w-4 shrink-0 justify-center">
                      <NewsletterIcon />
                    </span>
                  }
                >
                  S'inscrire à la newsletter LaSuite
                </Button>
                <Button
                  className="!justify-start !text-left"
                  href="https://docs.numerique.gouv.fr/docs/afc65f0a-15f3-42b6-9d64-b332c0fb2ed2/"
                  target="_blank"
                  size="small"
                  fullWidth
                  variant="tertiary_neutral"
                  icon={
                    <span className="inline-flex w-4 shrink-0 justify-center">
                      <DocumentationIcon />
                    </span>
                  }
                >
                  Documentation
                </Button>
                <Button
                  className="!justify-start !text-left"
                  href="/#products"
                  target="_blank"
                  size="small"
                  fullWidth
                  variant="tertiary_neutral"
                  icon={
                    <span className="inline-flex w-4 shrink-0 justify-center">
                      <ProductsGridIcon />
                    </span>
                  }
                >
                  Découvrir les produits LaSuite
                </Button>
              </div>
            </>
          )}

          {stepId === 'end_territoriale' && (
            <>
              <Button
                className="!w-fit"
                icon={<ArrowBackIcon />}
                onClick={() => goBack()}
                size="small"
                variant="tertiary_neutral"
              >
                Retour
              </Button>
              <h3 className="mb-2 mt-6 text-gray-850 text-[22px] font-bold">
                LaSuite pour les collectivités territoriales
              </h3>
              <p className="text-gray-600 text-sm pb-4">
                LaSuite est réservée aux agents de l'État. Les collectivités
                territoriales disposent de LaSuite Territoriale, pilotée par
                l'ANCT.
              </p>
              <Button
                href="https://suiteterritoriale.anct.gouv.fr/"
                target="_blank"
                fullWidth
              >
                Plus d'infos
              </Button>
              <Button
                className="mt-2"
                href="mailto:contact@suite.anct.gouv.fr"
                target="_blank"
                variant="neutral_bordered"
                fullWidth
              >
                Contacter l’ANCT
              </Button>
              <Button
                className="mt-2"
                href="/"
                variant="tertiary_neutral"
                fullWidth
              >
                Retour à l’accueil
              </Button>
            </>
          )}

          {stepId === 'end_webinaire' && (
            <>
              <Button
                className="!w-fit"
                icon={<ArrowBackIcon />}
                onClick={() => goBack()}
                size="small"
                variant="tertiary_neutral"
              >
                Retour
              </Button>
              <h3 className="mt-6 mb-2 text-gray-850 text-[22px] font-bold">
                Participez à un webinaire LaSuite
              </h3>
              <p className="text-gray-600 text-sm pb-4">
                Assistez à une présentation de LaSuite par notre équipe et posez
                des questions.
              </p>

              <WarningHospital role={answers.role} />

              <Button
                href={WEBINAIRE_URL}
                target="_blank"
                icon={<WebinarIcon />}
                fullWidth
              >
                S'incrire à un webinaire
              </Button>
              <Button
                className="mt-2"
                href="/"
                variant="tertiary_neutral"
                fullWidth
              >
                Retour à l’accueil
              </Button>
            </>
          )}

          {stepId === 'end_public' && (
            <>
              <Button
                className="!w-fit"
                icon={<ArrowBackIcon />}
                onClick={() => goBack()}
                size="small"
                variant="tertiary_neutral"
              >
                Retour
              </Button>
              <h3 className="mt-6 mb-2 text-gray-850 text-[22px] font-bold">
                Prenez rendez-vous avec notre équipe
              </h3>
              <p className="text-gray-600 text-sm pb-4">
                Pour les projets de déploiement, notre équipe vous accompagne.
                Réservez un créneau pour en discuter.
              </p>
              <WarningHospital role={answers.role} />
              <Button
                href={CALCOM_URL}
                target="_blank"
                icon={<AppointmentIcon />}
                fullWidth
              >
                Prendre rendez-vous
              </Button>
              <Button
                className="mt-2"
                href="/"
                variant="tertiary_neutral"
                fullWidth
              >
                Retour à l’accueil
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
