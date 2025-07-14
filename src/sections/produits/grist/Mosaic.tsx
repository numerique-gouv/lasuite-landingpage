import { useTranslations } from '@/locales/useTranslations'
import { FeatureExcerpt } from '@/components/FeatureExcerpt'
import Img1 from '@/assets/grist/mosaic/1.png'
import Img2 from '@/assets/grist/mosaic/2.png'
import Img3 from '@/assets/grist/mosaic/3.png'
import Img4 from '@/assets/grist/mosaic/4.png'
import Img5 from '@/assets/grist/cards/1.png'
import Img6 from '@/assets/grist/cards/2.png'
import Img7 from '@/assets/grist/cards/3.png'
import { Card } from '@/components/Card'

const featuresNumber = 4
const FEATURES_IMGS = [Img1, Img2, Img3, Img4]

const cardsNumber = 3
const CARDS_IMGS = [Img5, Img6, Img7]

export const Mosaic = () => {
  const t = useTranslations()

  return (
    <div className="flex flex-col gap-24">
      {Array.from({ length: featuresNumber }).map((_, index) => (
        <div key={index} className="max-w-[32rem] md:max-w-none">
          <FeatureExcerpt
            image={FEATURES_IMGS[index]}
            tag={t(`grist-landing.mosaic.block-${index + 1}.tag`)}
            title={t(`grist-landing.mosaic.block-${index + 1}.title`)}
            description={t(
              `grist-landing.mosaic.block-${index + 1}.description`
            )}
            imagePosition={index % 2 === 0 ? 'left' : 'right'}
          />
        </div>
      ))}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {Array.from({ length: cardsNumber }).map((_, index) => (
          <div key={index} className="max-w-[32rem]">
            <Card
              image={CARDS_IMGS[index]}
              title={t(`grist-landing.cards.card-${index + 1}.title`)}
              description={t(
                `grist-landing.cards.card-${index + 1}.description`
              )}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
