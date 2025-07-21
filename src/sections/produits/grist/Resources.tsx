import { useTranslations } from '@/locales/useTranslations'
import Peertube from '@/assets/grist/resources/peertube.png'
import Tchap from '@/assets/grist/resources/tchap.png'
import Forum from '@/assets/grist/resources/forum.png'
import Github from '@/assets/grist/resources/github.png'
import Image from 'next/image'
import { Markdown } from './Markdown'

export const Resources = () => {
  const t = useTranslations({ useFallback: true })
  const newWindow = t('common.new_window')
  return (
    <div className="md:text-center flex flex-col gap-4 md:gap-8">
      <h2 className="h2">{t('grist-landing.resources.title')}</h2>
      <Markdown className="text-lg with-content-links">
        {t('grist-landing.resources.description')}
      </Markdown>
      <div className="w-fit mx-auto flex flex-wrap gap-12 md:gap-24 mt-4 md:mt-0 justify-center md:justify-between items-center">
        <a target="_blank" href="https://tube.numerique.gouv.fr/c/grist/videos">
          <Image
            className="h-auto w-[62px]"
            src={Peertube}
            alt={`Peertube Grist - ${newWindow}`}
          />
        </a>
        <a
          target="_blank"
          href="https://tchap.gouv.fr/#/room/!TLRWBCVNfbjgrNKmox:agent.dinum.tchap.gouv.fr?via=agent.dinum.tchap.gouv.fr&via=agent.education.tchap.gouv.fr&via=agent.dev-durable.tchap.gouv.fr"
        >
          <Image
            className="h-auto w-[85px]"
            src={Tchap}
            alt={`Tchap - ${newWindow}`}
          />
        </a>
        <a target="_blank" href="https://forum.grist.libre.sh/">
          <Image
            className="h-auto w-[149px]"
            src={Forum}
            alt={`Forum Grist - ${newWindow}`}
          />
        </a>
        <a target="_blank" href="https://github.com/gristlabs/grist-core">
          <Image
            className="h-auto w-[92px]"
            src={Github}
            alt={`Github Grist - ${newWindow}`}
          />
        </a>
      </div>
    </div>
  )
}
