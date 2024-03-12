import React from 'react'

import { ADDRESS_DINUM, CONTACT_EMAIL, URL_SITE } from '@/constant'
import { ExternalLink } from '@/components/ExternalLink'
import { PageLayout } from '@/components/PageLayout'

export default function Accessibilite() {
  return (
    <PageLayout title="Accessibilité">
      <p>
        <strong>La Suite numérique</strong> s’engage à rendre ses services
        numériques accessibles, conformément à l’article 47 de la loi n°
        2005-102 du 11 février 2005.
      </p>
      <h2>Déclaration d’accessibilité</h2>
      <p>
        <em>Établie le 20 décembre 2023.</em>
      </p>
      <p>
        Cette déclaration d’accessibilité s’applique au site{' '}
        <strong>{URL_SITE}</strong>.
      </p>
      <h2>État de conformité</h2>
      <p>
        {URL_SITE} est non conforme avec le RGAA 4.1. Le site n’a{' '}
        <strong>pas encore été audité</strong>.
      </p>
      <h2>Amélioration et contact</h2>
      <p>
        Si vous n’arrivez pas à accéder à un contenu ou à un service, vous
        pouvez contacter le responsable de {URL_SITE} pour être orienté vers une
        alternative accessible ou obtenir le contenu sous une autre forme.
      </p>
      <ul>
        <li>
          E-mail :{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            aria-label={`écrire à ${CONTACT_EMAIL}`}
          >
            {CONTACT_EMAIL}
          </a>
        </li>
        <li>Adresse : {ADDRESS_DINUM}</li>
      </ul>
      <p>Nous essayons de répondre dans les 2 jours ouvrés.</p>
      <h2>Voie de recours</h2>
      <p>
        Cette procédure est à utiliser dans le cas suivant : vous avez signalé
        au responsable du site internet un défaut d’accessibilité qui vous
        empêche d’accéder à un contenu ou à un des services du portail et vous
        n’avez pas obtenu de réponse satisfaisante.
      </p>
      <p>Vous pouvez :</p>
      <ul>
        <li>
          Écrire un message au{' '}
          <ExternalLink
            href="https://formulaire.defenseurdesdroits.fr/formulaire_saisine/"
            className="underline decoration-1 hover:decoration-2 transition ease-in-out delay-50 duration-300 underline-offset-4"
          >
            Défenseur des droits
          </ExternalLink>
        </li>
        <li>
          Contacter le délégué du{' '}
          <ExternalLink
            href="https://www.defenseurdesdroits.fr/carte-des-delegues"
            className="underline decoration-1 hover:decoration-2 transition ease-in-out delay-50 duration-300 underline-offset-4"
          >
            Défenseur des droits dans votre région
          </ExternalLink>
        </li>
        <li>
          Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre) :
          Défenseur des droits Libre réponse 71120 75342 Paris CEDEX 07
        </li>
      </ul>
    </PageLayout>
  )
}
