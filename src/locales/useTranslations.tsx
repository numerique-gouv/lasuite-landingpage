import { createContext, useContext, type ReactNode } from 'react'
import { get } from '../utils/get'
// @ts-ignore
import fr from './fr.yml'
// @ts-ignore
import en from './en.yml'
// @ts-ignore
import de from './de.yml'
// @ts-ignore
import nl from './nl.yml'

type Translations = Record<string, any>
const TranslationsContext = createContext<Translations>(fr)

// this is not ideal, we load every locale file at once. will do for now…
const locales: Record<string, Translations> = {
  fr,
  en,
  de,
  nl,
}

function TranslationsProvider({
  locale = 'fr',
  children,
}: {
  locale: string | undefined
  children: ReactNode
}) {
  const translations = locales[locale]
  return (
    <TranslationsContext.Provider value={translations}>
      {children}
    </TranslationsContext.Provider>
  )
}

function useTranslations() {
  const context = useContext(TranslationsContext)
  const translations = context || fr
  return function t<T = string>(
    id: string,
    params: Record<string, string | ReactNode> = {}
  ): T {
    const translation = get(translations, id) as string
    if (!translation) {
      console.warn(`Translation for key "${id}" not found`)
      return id as T
    }
    if (Object.keys(params).length) {
      const componentKeys: string[] = []
      Object.keys(params).forEach((key) => {
        if (typeof params[key] !== 'string') {
          componentKeys.push(key)
        }
      })
      if (!componentKeys.length) {
        // no component keys, just replace {key} with value
        return translation.replace(
          /{(\w+)}/g,
          (_, key) => params[key] as string
        ) as T
      }

      // we have component keys: render react components
      const parts = translation.split(/{(.*?)}/)
      return (
        <>
          {parts.map((part) => {
            if (part in params) {
              return params[part]
            }
            return part
          })}
        </>
      ) as T
    }
    return translation as T
  }
}

export { TranslationsProvider, useTranslations }
