import { Layout } from '@/components/Layout'
import { TITLE_SITE } from '@/constant'
import Image from 'next/image'
import heroImage from '@/assets/nuancier.webp'
import { Callout } from '@/components/Callout'
import { ContentSection } from '@/components/ContentSection'
import { QuickNav } from '@/components/QuickNav'
import { DINUM_PRODUCTS } from '@/utils/products'

export default function Products() {
  return (
    <Layout title="Les produits de La Suite">
      <QuickNav />
      <Hero />
      <ProductsDetails />
    </Layout>
  )
}

const Hero = () => {
  return (
    <div className="hero relative overflow-hidden bg-white ">
      <div className="flex flex-col mt-5 justify-between items-start sm:items-center px-8 md:bg-[#fcfcfc] md:bg-no-repeat md:bg-center">
{/*        <Image
          src={heroImage}
          width={1000}
          alt={''}
          className="flex z-10"
          priority
          placeholder="blur"
        />*/}
        <Callout>
          Un quotidien simplifié grâce aux outils numériques interconnectés,
          collaboratifs, innovants et souverains
        </Callout>
      </div>
    </div>
  )
}

const ProductsDetails = () => {
  return (
    <ContentSection>
      <div className="flex flex-col items-center gap-20">
        {Object.entries(DINUM_PRODUCTS)
          .filter(([, v]) => v.displayDetails)
          .map(
            (
              [
                ,
                {
                  logo,
                  screenshot,
                  keepRawScreenshot,
                  name,
                  url,
                  caption,
                  description,
                  items,
                  status,
                },
              ],
              index
            ) => (
              <div className="flex gap-6 flex-col md:flex-row" key={name}>
                <div
                  className={
                    'md:w-1/2 ' +
                    (index % 2 === 0 ? 'md:order-1' : 'md:order-2')
                  }
                >
                  <div className="flex items-center gap-4 ">
                    <div className="min-w-[74px] relative">
                      <Image src={logo} alt={name + ' logo'}></Image>
                      {status && (
                        <div className="absolute bottom-[-15px] right-0 text-sm bg-blue-1 border-2 border-white rounded text-white px-1 py-0.5 font-bold text-xs">
                          {status}
                        </div>
                      )}
                    </div>
                    <a href={url} target="_blank">
                      <h3 className="text-xl sm:text-2xl text-blue-1 font-bold hover:underline">
                        <span className="font-extrabold">{name}</span>,{' '}
                        {caption}
                      </h3>
                    </a>
                  </div>

                  <div className="mt-4 font-base md:text-lg">
                    <p className="text-grey-3  font-bold">{description}</p>
                    <ul className="list-disc ml-4 mt-4">
                      {items?.map((item, index) => (
                        <li key={index} className="text-grey-3">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  className={
                    'md:w-1/2 flex ' +
                    (index % 2 === 0 ? 'md:order-2' : 'md:order-1')
                  }
                >
                  {keepRawScreenshot ? (
                    <Image src={screenshot!} alt={name + ' screenshot'}></Image>
                  ) : (
                    <div className="flex justify-center items-center">
                      <Image
                        src={screenshot!}
                        width={500}
                        alt={name + ' screenshot'}
                        className="w-4/6 border-8 border-white rounded-lg shadow-2xl"
                      ></Image>
                    </div>
                  )}
                </div>
              </div>
            )
          )}
      </div>
    </ContentSection>
  )
}
