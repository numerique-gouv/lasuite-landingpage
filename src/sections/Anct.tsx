import Image from 'next/image'
import { ContentSection } from '@/components/ContentSection'

import SuiteTerritoriale from '@/assets/logo/suite-territoriale.svg'
import AnctSvg from '@/assets/logo/anct.svg'
import AnssiSvg from '@/assets/logo/anssi.svg'
import France20230Svg from '@/assets/logo/france-2030.svg'

export const Anct = () => (
  <ContentSection>
    <h2 className="text-3xl md:text-4xl font-bold flex flex-row items-center gap-6">
      <Image
        src={SuiteTerritoriale}
        height={132}
        width={250}
        alt="La Suite Territoriale"
      />
    </h2>
    <div className="flex flex-col gap-4 text-lg max-w-[45em] text-left">
      <p>
        Afin de{' '}
        <strong>
          renforcer la cybersécurité des collectivités territoriales,
        </strong>{' '}
        ANCT et ANSSI proposent de contribuer à l’ouverture de La Suite
        numérique aux élus locaux et agents publics territoriaux.
      </p>
      <p>
        <strong>
          La Suite territoriale vise ainsi à mettre à disposition des
          collectivités un ensemble de services numériques sécurisés,
        </strong>{' '}
        notamment nom de domaine, serveur mail et espace de stockage minimal.
      </p>
      <p>
        <strong>
          Ces services de base seront complétés par des services opérés au
          niveau national
        </strong>{' '}
        (DINUM, ANCT, ANSSI) <strong>comme au niveau local</strong> (opérateurs
        publics de services numériques) à travers La Suite numérique :
        visioconférence, transfert de fichiers lourds, tableur collaboratif…
      </p>
      <p>
        <strong>
          L&apos;ANCT propose aux collectivités territoriales et partenaires
          locaux de participer aux développements de La Suite territoriale
        </strong>{' '}
        en rejoignant le groupe pilote ainsi que les ateliers ouverts organisés
        à partir de mars 2024.
      </p>
    </div>
    <div className="flex flex-col gap-8 items-center md:flex-row mb-10">
      <h3 className="sr-only">Acteurs de La Suite Territoriale</h3>
      <Image
        src={AnctSvg}
        height={60}
        width={136}
        alt="Agence nationale de la cohésion des territoires"
      />
      <Image
        src={AnssiSvg}
        height={60}
        width={60}
        alt="Agence nationale de la sécurité des systèmes d'information"
      />
      <Image src={France20230Svg} height={60} width={60} alt="France 2030" />
    </div>
  </ContentSection>
)
