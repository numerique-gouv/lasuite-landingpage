import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { useTranslations } from '@/locales/useTranslations'
import { useState, useRef } from 'react'

const getFirstElementWithError = (
  fieldsObject: Record<string, { errors: string[] }>,
  formRef: HTMLFormElement | null
) => {
  if (!formRef) {
    return null
  }
  const fields = formRef.querySelectorAll('[name]')
  for (const field of fields) {
    const name = field.getAttribute('name')
    if (name && fieldsObject[name]?.errors?.length) {
      return field
    }
  }
  return null
}

export const Contact = () => {
  const [errors, setErrors] = useState<Record<string, { errors: string[] }>>({})
  const [formSent, setFormSent] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors({})

    const response = await fetch('/api/produits/grist/contact', {
      method: 'POST',
      body: JSON.stringify(
        Object.fromEntries(new FormData(e.target as HTMLFormElement))
      ),
    })
    const data = await response.json()
    if (data.errors) {
      setErrors(data.errors)
      const firstFieldWithError = getFirstElementWithError(
        data.errors,
        formRef.current
      )
      if (firstFieldWithError instanceof HTMLElement) {
        firstFieldWithError.focus()
      }
    } else {
      setFormSent(true)
      formRef.current?.reset()
      setTimeout(() => {
        const feedback = document.getElementById('grist-contact-form-feedback')
        if (feedback) {
          feedback.focus()
        }
      }, 200)
    }
  }

  const t = useTranslations()
  return (
    <div id="contact" className="md:text-center flex flex-col gap-4 md:gap-8">
      <h2 className="text-4xl md:text-5xl font-bold">
        {t('grist-landing.contact.title')}
      </h2>
      <p className="text-greyscale-600">
        {t('grist-landing.contact.description')}
      </p>
      {!formSent ? (
        <form
          noValidate
          ref={formRef}
          onSubmit={onSubmit}
          className="w-full max-w-[850px] mx-auto bg-greyscale-050 rounded-2xl flex flex-col gap-4 md:gap-10 p-4 md:px-24 md:py-12"
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full">
            <Input
              name="firstname"
              type="text"
              label="Prénom"
              errors={errors.firstname}
            />
            <Input
              name="lastname"
              type="text"
              label="Nom"
              errors={errors.lastname}
            />
          </div>
          {/* honeypot, if this gets filled, we consider it's a spam bot */}
          <input
            type="text"
            name="name"
            className="xlkjzdlkj"
            tabIndex={-1}
            autoComplete="off"
          />
          <Input
            name="email"
            type="email"
            label="Adresse email (requis)"
            errors={errors.email}
          />
          <Input
            name="org"
            type="text"
            label="Entité pour laquelle vous travaillez"
            errors={errors.org}
          />
          <Input
            name="title"
            type="text"
            label="Poste (requis)"
            errors={errors.title}
          />
          <Input
            name="message"
            as="textarea"
            className="min-h-32"
            label="Votre message (requis)"
            errors={errors.message}
          />
          <div className="w-full md:w-fit md:ml-auto md:mx-auto">
            <Button fullWidth>{t('common.send')}</Button>
          </div>
        </form>
      ) : (
        <p
          tabIndex={-1}
          id="grist-contact-form-feedback"
          className="text-lg md:text-center"
        >
          {t('grist-landing.contact.success-feedback')}
        </p>
      )}
    </div>
  )
}
