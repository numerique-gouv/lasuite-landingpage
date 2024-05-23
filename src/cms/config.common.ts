import type { CmsConfig, CmsFieldBase, CmsFieldSelect } from 'decap-cms-core'

const bgField: CmsFieldBase & CmsFieldSelect = {
  label: 'Couleur de fond',
  hint: "Choisir 'automatique' alterne des fonds bleus et blancs sur chaque bloc",
  name: 'bg',
  widget: 'select',
  default: 'auto',
  options: [
    { value: 'none', label: 'aucun' },
    { value: 'auto', label: 'automatique' },
    { value: 'blue', label: 'bleu' },
    { value: 'yellow', label: 'jaune' },
    { value: 'green', label: 'vert' },
    { value: 'orange', label: 'orange' },
    { value: 'purple', label: 'violet' },
  ],
  required: false,
}

const config: Omit<CmsConfig, 'backend'> = {
  load_config_file: false,
  media_folder: 'public/content/uploads',
  public_folder: '/content/uploads',
  locale: 'fr',
  i18n: {
    structure: 'multiple_folders',
    locales: ['fr', 'de', 'en'],
    default_locale: 'fr',
  },
  collections: [
    {
      label: 'Landing pages',
      name: 'landing-page',
      identifier_field: 'id',
      format: 'yml',
      folder: 'content/landing-pages',
      i18n: true,
      create: true,
      fields: [
        {
          label: 'Service',
          hint: "Si votre service n'est pas listé, contactez-nous !",
          name: 'id',
          widget: 'select',
          options: [
            'audioconf',
            'demarches',
            'equipes',
            'france-transfert',
            'grist',
            'messagerie',
            'pad',
            'rdv',
            'resana',
            'tchap',
            'webconf',
            'webinaire',
          ],
        },
        {
          label: 'Nom du service',
          hint: "Affiché dans l'onglet de la page et en pied de page",
          name: 'title',
          widget: 'string',
          i18n: true,
        },
        {
          label: 'Hero',
          name: 'hero',
          widget: 'object',
          summary: '{{fields.title}}',
          fields: [
            {
              label: 'Titre',
              name: 'title',
              widget: 'string',
              i18n: true,
            },
            {
              label: 'Description',
              name: 'subtitle',
              widget: 'text',
              i18n: true,
              required: false,
            },
            {
              label: 'Image',
              name: 'image',
              widget: 'image',
              required: false,
            },
            {
              label: 'Embed',
              hint: "Coller ici une iframe pour par exemple afficher une vidéo peertube. Remplace l'image si renseigné",
              name: 'embed',
              widget: 'text',
              required: false,
            },
            {
              label: 'Liens',
              name: 'actions',
              widget: 'list',
              required: false,
              fields: [
                {
                  label: 'Libellé',
                  name: 'label',
                  widget: 'string',
                },
                {
                  label: 'URL',
                  name: 'href',
                  widget: 'string',
                },
                {
                  label: 'Mis en avant ?',
                  hint: 'Cocher pour afficher le bouton avec un fond bleu',
                  name: 'primary',
                  widget: 'boolean',
                  required: false,
                  default: true,
                },
                {
                  label: 'Ouverture dans nouvelle fenêtre ?',
                  name: 'target_blank',
                  widget: 'boolean',
                  required: false,
                  default: false,
                },
              ],
            },
          ],
        },
        {
          label: 'Blocs de contenus',
          name: 'flexible_content',
          widget: 'list',
          types: [
            {
              label: 'Contenu texte/images simple',
              name: 'content',
              widget: 'object',
              summary: '{{fields.title}}',
              fields: [
                {
                  label: 'Titre',
                  name: 'title',
                  widget: 'string',
                  i18n: true,
                  required: false,
                },
                {
                  label: 'Description',
                  name: 'body',
                  widget: 'markdown',
                  i18n: true,
                },
                bgField,
              ],
            },
            {
              label: 'Contenu texte + image sur le côté',
              name: 'screenshot',
              widget: 'object',
              summary: '{{fields.title}}',
              fields: [
                {
                  label: 'Titre',
                  name: 'title',
                  widget: 'string',
                  i18n: true,
                  required: false,
                },
                {
                  label: 'Description',
                  name: 'body',
                  widget: 'markdown',
                  i18n: true,
                },
                {
                  label: 'Image',
                  name: 'image',
                  widget: 'image',
                },
                {
                  label: "Colonne de l'image",
                  name: 'image_position',
                  widget: 'select',
                  options: [
                    { label: 'À gauche', value: 'left' },
                    { label: 'À droite', value: 'right' },
                  ],
                  default: 'right',
                },
                bgField,
              ],
            },
            {
              label: 'Ligne de cartes',
              name: 'cards',
              widget: 'object',
              fields: [
                {
                  label: 'Cartes',
                  name: 'items',
                  widget: 'list',
                  fields: [
                    {
                      label: 'Titre',
                      name: 'title',
                      widget: 'string',
                    },
                    {
                      label: 'Texte',
                      name: 'body',
                      widget: 'markdown',
                    },
                    {
                      label: 'Image',
                      name: 'image',
                      widget: 'image',
                      required: false,
                    },
                  ],
                },
                bgField,
              ],
            },
            {
              label: 'Grille de témoignages',
              name: 'testimonies',
              widget: 'object',
              summary: 'Témoignages',
              fields: [
                {
                  label: 'Titre',
                  name: 'title',
                  widget: 'string',
                  default: 'Témoignages',
                },
                {
                  label: 'Témoignages',
                  name: 'items',
                  widget: 'list',
                  fields: [
                    {
                      label: 'Citation',
                      name: 'quote',
                      widget: 'markdown',
                    },
                    {
                      label: 'Auteur',
                      name: 'author',
                      widget: 'string',
                    },
                  ],
                },
                bgField,
              ],
            },
            {
              label: 'FAQ',
              name: 'faq',
              widget: 'object',
              summary: 'FAQ',
              fields: [
                {
                  label: 'Titre',
                  name: 'title',
                  widget: 'string',
                },
                {
                  label: 'Questions',
                  name: 'items',
                  widget: 'list',
                  fields: [
                    {
                      label: 'Question',
                      name: 'question',
                      widget: 'string',
                    },
                    {
                      label: 'Réponse',
                      name: 'answer',
                      widget: 'markdown',
                    },
                  ],
                },
                bgField,
              ],
            },
            {
              label: 'Logos partenaires',
              name: 'pictures',
              widget: 'object',
              summary: 'Logos',
              fields: [
                {
                  label: 'Titre',
                  name: 'title',
                  widget: 'string',
                  required: false,
                },
                {
                  label: 'Texte',
                  name: 'body',
                  widget: 'markdown',
                  required: false,
                },
                {
                  label: 'Logos',
                  name: 'items',
                  widget: 'list',
                  fields: [
                    {
                      label: 'Image',
                      name: 'image',
                      widget: 'image',
                    },
                    {
                      label: 'URL',
                      required: false,
                      name: 'href',
                      widget: 'string',
                    },
                    {
                      label: "Description de l'image",
                      hint: "Pour les lecteurs d'écrans",
                      name: 'alt',
                      widget: 'string',
                    },
                  ],
                },
                bgField,
              ],
            },
            {
              label: 'CTA',
              name: 'cta',
              widget: 'object',
              summary: '{{fields.cta.label}}',
              fields: [
                {
                  label: 'Titre',
                  name: 'title',
                  widget: 'string',
                  i18n: true,
                  required: false,
                },
                {
                  label: 'Description',
                  name: 'body',
                  widget: 'markdown',
                  i18n: true,
                  required: false,
                },
                {
                  label: 'Bouton CTA',
                  name: 'cta',
                  widget: 'object',
                  fields: [
                    {
                      label: 'Libellé',
                      name: 'label',
                      widget: 'string',
                    },
                    {
                      label: 'URL',
                      name: 'href',
                      widget: 'string',
                    },
                    {
                      label: 'Ouverture dans nouvelle fenêtre ?',
                      name: 'target_blank',
                      widget: 'boolean',
                      required: false,
                      default: false,
                    },
                  ],
                },
                bgField,
              ],
            },
          ],
        },
        {
          label: 'Newsletter',
          name: 'newsletter',
          widget: 'object',
          fields: [
            {
              label: 'Activer bloc newsletter ?',
              name: 'enable',
              widget: 'boolean',
              required: false,
            },
            {
              label: 'Texte',
              name: 'body',
              widget: 'markdown',
              i18n: true,
              required: false,
            },
            {
              label: 'URL du lien vers la newsletter',
              name: 'cta_href',
              widget: 'string',
              required: false,
            },
          ],
        },
        {
          label: 'Réseaux sociaux',
          name: 'socials',
          widget: 'object',
          fields: [
            {
              label: 'Activer bloc réseaux sociaux ?',
              name: 'enable',
              widget: 'boolean',
              required: false,
            },
            {
              label: 'URL compte Twitter',
              name: 'twitter',
              widget: 'string',
              required: false,
            },
            {
              label: 'URL compte LinkedIn',
              name: 'linkedin',
              widget: 'string',
              required: false,
            },
            {
              label: 'URL compte Facebook',
              name: 'facebook',
              widget: 'string',
              required: false,
            },
            {
              label: 'URL compte Instagram',
              name: 'instagram',
              widget: 'string',
              required: false,
            },
            {
              label: 'URL compte YouTube',
              name: 'youtube',
              widget: 'string',
              required: false,
            },
          ],
        },
      ],
    },
  ],
}

export default config
