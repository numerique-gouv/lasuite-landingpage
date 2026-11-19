import Image from 'next/image'
import { FormEvent, useRef, useState } from 'react'
import { Layout } from '@/components/Layout'
import { Button } from '@/components/ui-kit-v2/Button'
import { SupportField } from '@/components/support/SupportField'
import { NEWSLETTER_FORM } from '@/constant'
import WelcomeLaSuite from '@/assets/welcomesuite.png'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function Infolettre() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [serverMessage, setServerMessage] = useState<string | null>(null)
  const emailRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)
  const honeypotRef = useRef<HTMLInputElement>(null)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === 'submitting') return

    const value = email.trim()
    const nextError = !value
      ? 'Vous devez renseigner ce champ.'
      : !EMAIL_RE.test(value)
        ? 'Adresse email invalide. Ex. : prenom.nom@ministere.gouv.fr'
        : null
    setError(nextError)
    if (nextError) {
      emailRef.current?.focus()
      return
    }

    // Same fields as the Brevo embed script (honeypot included)
    const body = new FormData()
    body.append('EMAIL', value)
    body.append('email_address_check', honeypotRef.current?.value ?? '')
    body.append('locale', 'fr')

    setStatus('submitting')
    setServerMessage(null)
    try {
      const res = await fetch(`${NEWSLETTER_FORM}?isAjax=1`, {
        method: 'POST',
        body,
      })
      const data = await res.json().catch(() => null)
      if (res.ok && data?.success) {
        setStatus('success')
        return
      }
      setServerMessage(data?.message ?? null)
      setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <Layout title="Infolettre">
      <div className="mx-auto w-full max-w-[480px] px-4 py-10 md:py-16">
        <div className="rounded-lg border border-gray-100 bg-white p-6 text-center shadow-[0_2px_12px_rgba(34,38,49,0.06)] md:p-8">
          <Image className="mx-auto" src={WelcomeLaSuite} width={200} alt="" />

          {status === 'success' ? (
            <>
              <h1
                className="mt-4 text-[22px] font-bold text-gray-850"
                tabIndex={-1}
                ref={(el) => el?.focus()}
              >
                Vous êtes inscrit !
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Vous recevrez la prochaine infolettre LaSuite à l&apos;adresse{' '}
                <strong className="text-gray-850">{email.trim()}</strong>.
              </p>
              <Button className="mt-6" href="/" fullWidth>
                Retour à l&apos;accueil
              </Button>
            </>
          ) : (
            <>
              <h1 className="mt-4 text-[22px] font-bold text-gray-850">
                L&apos;infolettre LaSuite
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Une fois par mois, les nouveautés de LaSuite et les nouvelles
                fonctionnalités, directement dans votre boîte mail.
              </p>

              {status === 'error' && (
                <div
                  role="alert"
                  className="mt-4 rounded border border-[#ce0500] bg-[#fff4f3] p-3 text-left text-sm text-[#ce0500]"
                >
                  {serverMessage ||
                    "Nous n'avons pas pu confirmer votre inscription. Vérifiez votre adresse et réessayez."}
                </div>
              )}

              <form noValidate onSubmit={onSubmit} className="mt-6 text-left">
                <SupportField
                  id="infolettre-email"
                  label="Adresse email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(value) => {
                    setEmail(value)
                    if (error) setError(null)
                  }}
                  error={error}
                  inputRef={emailRef}
                  required
                />

                {/* Brevo anti-spam honeypot */}
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

                <Button className="mt-4" type="submit" fullWidth>
                  {status === 'submitting'
                    ? 'Inscription en cours…'
                    : "S'abonner"}
                </Button>
                <p className="mt-3 text-center text-xs text-gray-550">
                  Désinscription possible à tout moment depuis chaque email.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}
