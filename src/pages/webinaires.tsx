import Image from 'next/image'
import type { GetStaticProps } from 'next'
import { FormEvent, useId, useRef, useState } from 'react'
import { Layout } from '@/components/Layout'
import { Button } from '@/components/ui-kit-v2/Button'
import { SupportField } from '@/components/support/SupportField'
import { WarningTriangleIcon } from '@/components/icons/rendezvous'
import { NEWSLETTER_FORM, WEBINAIRE_URL } from '@/constant'
import {
  fetchWebinarForm,
  type BrevoOption,
  type WebinarForm,
  type WebinarSession,
} from '@/lib/brevo/webinarForm'
import WelcomeLaSuite from '@/assets/welcomesuite.png'

/**
 * Les sessions et le consentement ne sont PAS écrits en dur : ils sont lus
 * depuis le formulaire Brevo (WEBINAIRE_URL) et la page est régénérée
 * toutes les REVALIDATE_SECONDS. Pour ajouter / retirer une date, il suffit
 * de modifier le formulaire dans Brevo.
 */
const REVALIDATE_SECONDS = 300

type Props = { form: WebinarForm | null }

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const form = await fetchWebinarForm(WEBINAIRE_URL)
    return { props: { form }, revalidate: REVALIDATE_SECONDS }
  } catch (error) {
    console.error('[webinaires] lecture du formulaire Brevo impossible', error)
    // Au build, on ne bloque pas le déploiement : la page affichera un lien
    // vers le formulaire Brevo et sera régénérée rapidement.
    if (process.env.NEXT_PHASE === 'phase-production-build') {
      return { props: { form: null }, revalidate: 60 }
    }
    // En régénération : on lève l'erreur pour que Next garde la dernière
    // version valide de la page au lieu de la remplacer par une page vide.
    throw error
  }
}

const optionKey = (o: BrevoOption) => `${o.name}|${o.value}`

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const REQUIRED = 'Vous devez renseigner ce champ.'

type Fields = {
  lastName: string
  firstName: string
  jobTitle: string
  email: string
}

type Errors = Partial<Record<keyof Fields | 'sessions' | 'consent', string>>

type Status = 'idle' | 'submitting' | 'success' | 'error'

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
    <path
      d="M2.5 6.2 4.9 8.5 9.5 3.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Checkbox = ({ checked }: { checked: boolean }) => (
  <span
    aria-hidden
    className={`mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[4px] border transition-colors ${
      checked
        ? 'border-brand-550 bg-brand-550 text-white'
        : 'border-gray-300 bg-white text-transparent'
    }`}
  >
    <CheckIcon />
  </span>
)

const SessionOption = ({
  session,
  checked,
  onToggle,
}: {
  session: WebinarSession
  checked: boolean
  onToggle: () => void
}) => (
  <label
    className={`flex cursor-pointer items-start gap-3 rounded-md border p-3 transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-brand-550 ${
      checked
        ? 'border-brand-550 bg-brand-050'
        : 'border-gray-100 bg-white hover:bg-gray-025'
    }`}
  >
    <input
      type="checkbox"
      className="sr-only"
      name={session.name}
      value={session.value}
      checked={checked}
      onChange={onToggle}
      data-session
    />
    <Checkbox checked={checked} />
    <span className="min-w-0 flex-1 text-sm font-medium leading-5 text-gray-850">
      {session.label}
    </span>
  </label>
)

export default function Webinaires({ form }: Props) {
  const availableSessions = form?.sessions ?? []
  const consentOption = form?.consent ?? null
  const [fields, setFields] = useState<Fields>({
    lastName: '',
    firstName: '',
    jobTitle: '',
    email: '',
  })
  const [sessions, setSessions] = useState<string[]>([])
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [serverMessage, setServerMessage] = useState<string | null>(null)
  const honeypotRef = useRef<HTMLInputElement>(null)
  const sessionsErrorId = useId()
  const consentErrorId = useId()

  const setField = (key: keyof Fields) => (value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const toggleSession = (key: string) => {
    setSessions((prev) =>
      prev.includes(key) ? prev.filter((v) => v !== key) : [...prev, key]
    )
    if (errors.sessions) setErrors((prev) => ({ ...prev, sessions: undefined }))
  }

  const validate = (): Errors => {
    const next: Errors = {}
    if (!fields.firstName.trim()) next.firstName = REQUIRED
    if (!fields.lastName.trim()) next.lastName = REQUIRED
    if (!fields.jobTitle.trim()) next.jobTitle = REQUIRED
    if (!fields.email.trim()) next.email = REQUIRED
    else if (!EMAIL_RE.test(fields.email.trim()))
      next.email = 'Adresse email invalide. Ex. : prenom.nom@ministere.gouv.fr'
    if (sessions.length === 0)
      next.sessions = 'Choisissez au moins une session.'
    if (consentOption && !consent)
      next.consent = 'Votre consentement est nécessaire.'
    return next
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === 'submitting') return
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0]
      const target =
        first === 'sessions' || first === 'consent'
          ? document.querySelector<HTMLInputElement>(
              first === 'sessions'
                ? 'input[data-session]'
                : 'input[data-consent]'
            )
          : document.getElementById(`webinaires-${first}`)
      target?.focus()
      return
    }

    const body = new FormData()
    body.append('NOM', fields.lastName.trim())
    body.append('PRENOM', fields.firstName.trim())
    body.append('JOB_TITLE', fields.jobTitle.trim())
    body.append('EMAIL', fields.email.trim())
    availableSessions
      .filter((s) => sessions.includes(optionKey(s)))
      .forEach((s) => body.append(s.name, s.value))
    if (consentOption) body.append(consentOption.name, consentOption.value)
    body.append('email_address_check', honeypotRef.current?.value ?? '')
    body.append('locale', 'fr')

    setStatus('submitting')
    setServerMessage(null)
    try {
      const res = await fetch(`${WEBINAIRE_URL}?isAjax=1`, {
        method: 'POST',
        body,
      })
      const data = await res.json().catch(() => null)
      if (res.ok && data?.success) {
        setStatus('success')
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      setServerMessage(data?.message ?? null)
      setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  const selectedSessions = availableSessions.filter((s) =>
    sessions.includes(optionKey(s))
  )

  return (
    <Layout title="Webinaires">
      <div className="mx-auto w-full max-w-[1040px] flex-1 px-4 py-8 md:py-16">
        {status === 'success' ? (
          <div className="mx-auto max-w-[480px] rounded-lg border border-gray-100 bg-white p-6 text-center md:p-8">
            <Image
              className="mx-auto"
              src={WelcomeLaSuite}
              width={200}
              alt=""
            />
            <h1
              className="mt-4 text-[22px] font-bold text-gray-850"
              tabIndex={-1}
              ref={(el) => el?.focus()}
            >
              Votre inscription est confirmée
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Merci {fields.firstName.trim()} ! Vous recevrez le lien de
              connexion par email à l&apos;adresse{' '}
              <strong className="text-gray-850">{fields.email.trim()}</strong>.
            </p>
            <ul className="mt-6 flex flex-col gap-2 text-left">
              {selectedSessions.map((s) => (
                <li
                  key={optionKey(s)}
                  className="rounded-md border border-gray-100 bg-gray-025 px-3 py-2"
                >
                  <span className="text-sm font-medium text-gray-850">
                    {s.label}
                  </span>
                </li>
              ))}
            </ul>
            <Button className="mt-6" href="/" fullWidth>
              Retour à l&apos;accueil
            </Button>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,480px)] md:gap-12">
            <section className="md:pt-4">
              <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-650">
                Webinaires · En ligne et gratuits
              </span>
              <h1 className="mt-4 text-[28px] font-bold leading-[36px] text-gray-850 md:text-[36px] md:leading-[44px]">
                Découvrez LaSuite en direct
              </h1>
              <p className="mt-4 text-base text-gray-600">
                Que vous soyez un agent souhaitant explorer les outils de
                LaSuite ou un responsable chargé d&apos;équiper vos équipes, nos
                webinaires thématiques sont faits pour vous.
              </p>
              <ul className="mt-6 flex flex-col gap-3 text-sm text-gray-700">
                {[
                  'Une session par produit ou thématique, animée par nos équipes',
                  'Des démonstrations en temps réel',
                  'Un temps dédié à vos questions',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-550">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 hidden md:block">
                <Image src={WelcomeLaSuite} width={260} alt="" />
              </div>
            </section>

            <section
              aria-labelledby="webinaires-form-title"
              className="rounded-lg border border-gray-100 bg-white p-5 shadow-[0_2px_12px_rgba(34,38,49,0.06)] md:p-8"
            >
              <h2
                id="webinaires-form-title"
                className="text-[22px] font-bold text-gray-850"
              >
                Je m&apos;inscris
              </h2>
              {form && availableSessions.length > 0 && (
                <p className="mt-1 text-xs text-gray-550">
                  Tous les champs sont obligatoires.
                </p>
              )}

              {status === 'error' && (
                <div
                  role="alert"
                  className="mt-4 flex gap-2 rounded border border-[#ce0500] bg-[#fff4f3] p-3 text-sm text-[#ce0500]"
                >
                  <span>
                    {serverMessage ||
                      "Nous n'avons pas pu confirmer votre inscription. Vérifiez vos informations et réessayez."}
                  </span>
                </div>
              )}

              {!form ? (
                <div className="mt-6">
                  <p className="text-sm text-gray-600">
                    Le formulaire d&apos;inscription est momentanément
                    indisponible ici. Vous pouvez vous inscrire directement sur
                    notre formulaire Brevo.
                  </p>
                  <Button
                    className="mt-4"
                    href={WEBINAIRE_URL}
                    target="_blank"
                    fullWidth
                  >
                    Accéder au formulaire d&apos;inscription
                  </Button>
                </div>
              ) : availableSessions.length === 0 ? (
                <div className="mt-6">
                  <p className="text-sm text-gray-600">
                    Aucune session n&apos;est programmée pour le moment.
                    Abonnez-vous à l&apos;infolettre LaSuite pour être prévenu
                    des prochaines dates.
                  </p>
                  <Button
                    className="mt-4"
                    href={NEWSLETTER_FORM}
                    target="_blank"
                    fullWidth
                  >
                    S&apos;abonner à l&apos;infolettre
                  </Button>
                </div>
              ) : (
                <form noValidate onSubmit={onSubmit} className="mt-6">
                  <fieldset className="flex flex-col gap-4">
                    <legend className="sr-only">Vos informations</legend>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <SupportField
                        id="webinaires-firstName"
                        label="Prénom"
                        autoComplete="given-name"
                        value={fields.firstName}
                        onChange={setField('firstName')}
                        error={errors.firstName}
                        required
                      />
                      <SupportField
                        id="webinaires-lastName"
                        label="Nom"
                        autoComplete="family-name"
                        value={fields.lastName}
                        onChange={setField('lastName')}
                        error={errors.lastName}
                        required
                      />
                    </div>
                    <SupportField
                      id="webinaires-jobTitle"
                      label="Fonction dans votre organisation"
                      autoComplete="organization-title"
                      value={fields.jobTitle}
                      onChange={setField('jobTitle')}
                      error={errors.jobTitle}
                      required
                    />
                    <div>
                      <SupportField
                        id="webinaires-email"
                        label="Adresse email professionnelle"
                        type="email"
                        autoComplete="email"
                        value={fields.email}
                        onChange={setField('email')}
                        error={errors.email}
                        required
                      />
                      {!errors.email && (
                        <p className="mt-1.5 text-xs text-gray-550">
                          Ex. : prenom.nom@ministere.gouv.fr
                        </p>
                      )}
                    </div>
                  </fieldset>

                  <fieldset
                    className="mt-6"
                    aria-describedby={
                      errors.sessions ? sessionsErrorId : undefined
                    }
                  >
                    <legend className="text-sm font-medium text-gray-850">
                      Prochaines sessions{' '}
                      <span className="font-normal text-gray-550">
                        (heure de Paris)
                      </span>
                    </legend>
                    <div className="mt-2 flex flex-col gap-2">
                      {availableSessions.map((session) => (
                        <SessionOption
                          key={optionKey(session)}
                          session={session}
                          checked={sessions.includes(optionKey(session))}
                          onToggle={() => toggleSession(optionKey(session))}
                        />
                      ))}
                    </div>
                    {errors.sessions && (
                      <p
                        id={sessionsErrorId}
                        className="m-0 mt-1.5 text-xs text-[#ce0500]"
                      >
                        {errors.sessions}
                      </p>
                    )}
                    <div className="mt-3 flex items-start gap-2 rounded border border-gray-100 bg-gray-025 p-3">
                      <span className="shrink-0">
                        <WarningTriangleIcon />
                      </span>
                      <span className="text-[12px] text-gray-600">
                        Déjà inscrit ? Cochez bien toutes les sessions
                        auxquelles vous souhaitez participer : une session
                        décochée vaut désinscription.
                      </span>
                    </div>
                  </fieldset>

                  {consentOption && (
                    <div className="mt-6">
                      <label className="flex cursor-pointer items-start gap-3 rounded focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-brand-550">
                        <input
                          type="checkbox"
                          className="sr-only"
                          name={consentOption.name}
                          value={consentOption.value}
                          data-consent
                          checked={consent}
                          onChange={(e) => {
                            setConsent(e.target.checked)
                            if (errors.consent)
                              setErrors((prev) => ({
                                ...prev,
                                consent: undefined,
                              }))
                          }}
                          aria-invalid={!!errors.consent}
                          aria-describedby={
                            errors.consent ? consentErrorId : undefined
                          }
                        />
                        <Checkbox checked={consent} />
                        <span className="text-sm text-gray-700">
                          {consentOption.label}
                        </span>
                      </label>
                      {errors.consent && (
                        <p
                          id={consentErrorId}
                          className="m-0 mt-1.5 text-xs text-[#ce0500]"
                        >
                          {errors.consent}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Honeypot anti-spam attendu par Brevo */}
                  <input
                    ref={honeypotRef}
                    type="text"
                    name="email_address_check"
                    defaultValue=""
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden
                    className="hidden"
                  />

                  <Button className="mt-6" type="submit" fullWidth>
                    {status === 'submitting'
                      ? 'Inscription en cours…'
                      : "S'inscrire"}
                  </Button>
                  <p className="mt-3 text-xs text-gray-550">
                    Vos données sont utilisées uniquement pour
                    l&apos;organisation des webinaires et l&apos;envoi des
                    communications LaSuite. Vous pouvez vous désinscrire à tout
                    moment.
                  </p>
                </form>
              )}
            </section>
          </div>
        )}
      </div>
    </Layout>
  )
}
