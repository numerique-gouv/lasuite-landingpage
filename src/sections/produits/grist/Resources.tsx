import { useTranslations } from '@/locales/useTranslations'
import Peertube from '@/assets/grist/resources/peertube.png'
import Tchap from '@/assets/grist/resources/tchap.png'
import Forum from '@/assets/grist/resources/forum.png'
import Github from '@/assets/grist/resources/github.png'
import Image from 'next/image'
import Markdown from 'react-markdown'

export const Resources = () => {
  const t = useTranslations({ useFallback: true })

  return (
    <div className="md:text-center flex flex-col gap-4 md:gap-8">
      <h2 className="text-4xl md:text-5xl font-bold">
        {t('grist-landing.resources.title')}
      </h2>
      <Markdown className="text-lg with-content-links">
        {t('grist-landing.resources.description')}
      </Markdown>
      <div className="w-fit mx-auto flex flex-wrap gap-12 md:gap-24 justify-between items-center">
        <a href="https://tube.numerique.gouv.fr/c/grist/videos">
          <Image
            className="h-auto w-[62px]"
            src={Peertube}
            alt="Peertube Grist"
          />
        </a>
        <a href="https://tchap.gouv.fr/#/room/!TLRWBCVNfbjgrNKmox:agent.dinum.tchap.gouv.fr?via=agent.dinum.tchap.gouv.fr&via=agent.education.tchap.gouv.fr&via=agent.dev-durable.tchap.gouv.fr">
          <Image className="h-auto w-[85px]" src={Tchap} alt="Tchap" />
        </a>
        <a href="https://forum.grist.libre.sh/">
          <Image className="h-auto w-[149px]" src={Forum} alt="Forum Grist" />
        </a>
        <a href="https://github.com/gristlabs/grist-core">
          <Image className="h-auto w-[92px]" src={Github} alt="Github Grist" />
        </a>
      </div>
    </div>
  )
}
