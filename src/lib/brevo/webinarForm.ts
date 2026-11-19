/**
 * Lit le formulaire Brevo hébergé (sibforms) pour en extraire les options
 * de cases à cocher (sessions de webinaires, consentement).
 *
 * Le formulaire Brevo reste la source de vérité : ajouter / retirer une date
 * dans Brevo suffit, la page /webinaires se met à jour toute seule.
 * Les libellés sont affichés tels qu'ils sont saisis dans Brevo.
 */

export type BrevoOption = {
  /** nom du champ, ex. `lists_25[]` */
  name: string
  /** identifiant de la liste Brevo */
  value: string
  /** libellé brut saisi dans Brevo */
  label: string
}

export type WebinarSession = BrevoOption

export type WebinarForm = {
  sessions: WebinarSession[]
  consent: BrevoOption | null
}

const decode = (s: string) =>
  s
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) =>
      String.fromCharCode(parseInt(n, 16))
    )
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim()

const attr = (tag: string, name: string) => {
  const m = tag.match(new RegExp(`\\s${name}\\s*=\\s*"([^"]*)"`, 'i'))
  return m ? decode(m[1]) : null
}

type CheckboxGroup = { label: string; options: BrevoOption[] }

export const parseBrevoCheckboxGroups = (html: string): CheckboxGroup[] =>
  html
    .split(/class="[^"]*\bsib-checkbox-group\b/)
    .slice(1)
    .map((chunk) => {
      const labelMatch = chunk.match(
        /class="entry__label"[^>]*>([\s\S]*?)<\/label>/
      )
      const options = [...chunk.matchAll(/<input\b[^>]*>/g)]
        .map(([tag]) => tag)
        .filter((tag) => attr(tag, 'type') === 'checkbox')
        .map((tag) => ({
          name: attr(tag, 'name') ?? '',
          value: attr(tag, 'value') ?? '',
          label: attr(tag, 'data-value') ?? '',
        }))
        .filter((o) => o.name && o.value)
      return {
        label: labelMatch ? decode(labelMatch[1].replace(/<[^>]+>/g, '')) : '',
        options,
      }
    })
    .filter((g) => g.options.length > 0)

const isConsentGroup = (g: CheckboxGroup) =>
  /consentement|consent/i.test(g.label) ||
  (g.options.length === 1 && /j['’]accepte/i.test(g.options[0].label))

export const parseWebinarForm = (html: string): WebinarForm => {
  const groups = parseBrevoCheckboxGroups(html)
  const consentGroup = groups.find(isConsentGroup)
  return {
    // libellés affichés tels quels, dans l'ordre du formulaire Brevo
    sessions: groups
      .filter((g) => g !== consentGroup)
      .flatMap((g) => g.options),
    consent: consentGroup?.options[0] ?? null,
  }
}

export const fetchWebinarForm = async (url: string): Promise<WebinarForm> => {
  const res = await fetch(url, {
    headers: { Accept: 'text/html' },
    signal: AbortSignal.timeout(10_000),
  })
  if (!res.ok) {
    throw new Error(`Brevo form fetch failed: ${res.status}`)
  }
  const form = parseWebinarForm(await res.text())
  if (!form.consent && form.sessions.length === 0) {
    throw new Error('Brevo form: no checkbox options found (markup changed?)')
  }
  return form
}
