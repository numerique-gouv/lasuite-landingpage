import { useTranslations } from '@/locales/useTranslations'
import KeyFeaturesImg from '@/assets/grist/key-features.png'
import Markdown from 'react-markdown'
import { ZoomableImage } from '@/components/ZoomableImage'

export const KeyFeatures = () => {
  const t = useTranslations()

  return (
    <div>
      <div className="md:text-center flex flex-col gap-8 mb-8">
        <h2 className="text-4xl md:text-5xl font-bold">
          {t('grist-landing.key-features.title')}
        </h2>
        <p className="text-lg text-pretty">
          {t('grist-landing.key-features.description')}
        </p>
        <ZoomableImage className="w-full h-auto" src={KeyFeaturesImg} alt="" />
      </div>
      <Markdown className="content-page">
        {t('grist-landing.key-features.body')}
      </Markdown>
    </div>
  )
}
