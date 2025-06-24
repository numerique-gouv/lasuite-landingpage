// list of common fields we retrieve in DecapCMS configs
import type { CmsFieldBase, CmsFieldObject } from 'decap-cms-core'

export const i18n = (props = {}): CmsFieldBase & CmsFieldObject => ({
  label: 'Version traduites de la page',
  name: 'enabled_i18n',
  widget: 'object',
  i18n: true,
  fields: [
    {
      label: 'Activer la page en allemand ?',
      name: 'de',
      widget: 'boolean',
      hint: 'Décocher cette case rendra la page traduite inaccessible sur le site',
      required: false,
      i18n: 'duplicate',
    },
    {
      label: 'Activer la page en anglais ?',
      name: 'en',
      widget: 'boolean',
      hint: 'Décocher cette case rendra la page traduite inaccessible sur le site',
      required: false,
      i18n: 'duplicate',
    },
    {
      label: 'Activer la page en Néerlandais ?',
      name: 'nl',
      widget: 'boolean',
      hint: 'Décocher cette case rendra la page traduite inaccessible sur le site',
      required: false,
      i18n: 'duplicate',
    },
  ],
  ...props,
})
