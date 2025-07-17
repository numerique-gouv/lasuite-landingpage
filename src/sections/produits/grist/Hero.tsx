import ProConnectSvg from '@/components/ProConnectSvg'
import { Tag } from '@/components/Tag'
import { useTranslations } from '@/locales/useTranslations'
import Markdown from 'react-markdown'

export const Hero = () => {
  const t = useTranslations({ useFallback: true })

  return (
    <div className="fade-in relative overflow-hidden bg-white">
      <div
        className={
          'flex flex-col gap-4 justify-between items-start md:items-center'
        }
      >
        <div className="flex flex-col-reverse items-start md:items-center gap-4">
          <h1
            className="text-pretty text-greyscale-900 lg:text-5xl text-4xl sm:leading-[42px] lg:leading-[52px] font-bold md:text-center"
            style={{ letterSpacing: '-2%' }}
          >
            {t('grist-landing.hero.title')}
          </h1>
          <Tag type="warning">{t('grist-landing.hero.tag')}</Tag>
        </div>
        <p className="md:text-center text-greyscale-700 text-lg">
          {t('grist-landing.hero.description')}
        </p>
        <a className="my-4" href={t('grist-landing.hero.proconnect-url')}>
          <ProConnectSvg />
        </a>

        <div className="w-full rounded-2xl overflow-hidden leading-none">
          <iframe
            title="Grist : un outil collaboratif pour simplifier le quotidien des agents"
            width="700"
            height="394"
            src={t('grist-landing.hero.video-url')}
            className="md:mx-auto max-w-[700px] w-full h-auto border border-blue-1 rounded-2xl"
            style={{ aspectRatio: '700 / 394' }}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          ></iframe>
        </div>
        <div className="with-content-links">
          <Markdown 
            className="flex-shrink-0" 
            components={{
              a: (props) => (
                <a {...props} target="_blank" rel="noopener noreferrer" className="underline flex-shrink-0" />
              ),
            }}
          >
                {t('grist-landing.hero.description2')}
          </Markdown>
        </div>
      </div>
    </div>
  )
}
