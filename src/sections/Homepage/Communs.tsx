import Image from 'next/image'
import { useRouter } from 'next/router'
import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import GristCleverCloud from '@/assets/grist-clever-cloud.png'
import BundlesMatrix from '@/assets/bundles+matrix.png'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

import { useTranslations } from '@/locales/useTranslations'

export const Communs = () => {
  const t = useTranslations()
  const { locale } = useRouter()

  const articles = [
    {
      title: 'Grist + Clever Cloud',
      illustration: GristCleverCloud,
      description: t('homepage.communs.articles.gristclevercloud.description'),
      url: 'https://www.clever-cloud.com/fr/blog/entreprise/2025/06/09/clever-cloud-devient-hebergeur-grist-privilegie/',
    },
    {
      title: t('homepage.communs.articles.bundlesmatrix.title'),
      illustration: BundlesMatrix,
      description: t('homepage.communs.articles.bundlesmatrix.description'),
      url: 'https://element.io/matrix-in-germany/projects/bundesmessenger',
    },
  ]

  return (
    <ContentSection>
      <div className="grid md:mb-14">
        <div className="mb-10">
          <Paragraph
            tag={t('homepage.communs.tag')}
            title={t('homepage.communs.title')}
            description={t('homepage.communs.description')}
          />
        </div>
        {articles.map((article, index) => {
          return (
            <div key={article.title} className="stretched-link-container mt-10">
              <div
                className="justify-between border border-greyscale-200 rounded-lg p-6 md:flex"
                style={{
                  boxShadow: '0px 10px 21.3px 0px rgba(0, 0, 0, 0.05)',
                }}
              >
                <div className="">
                  <Image
                    className="w-auto h-[50px] mb-2"
                    src={article.illustration}
                    alt=""
                  />
                  <h4 className="font-bold text-xl">{article.title}</h4>
                  <p className="md:w-[80%] text-normal">
                    {article.description}
                  </p>
                </div>
                <a
                  href={article.url}
                  target="_blank"
                  className="stretched-link text-nowrap w-full flex-1 mx-auto block md:flex md:items-center mt-3 md:mt-0 text-center"
                >
                  <ArrowOutwardIcon />
                  {t('homepage.communs.button_read')}
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </ContentSection>
  )
}
