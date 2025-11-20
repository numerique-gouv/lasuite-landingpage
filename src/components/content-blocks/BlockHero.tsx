import React from 'react'
import Image from 'next/image'
import { ProConnectButton } from '@/components/ProConnectButton'
import { productBanners } from '@/assets/products/banners'
import { Button } from '@/components/ui-kit-v2/Button'
import { SocialProof } from '@/components/content-blocks/SocialProof'

export type ProductContent = Record<string, any>

export const BlockHero: React.FC<{
  productContent: ProductContent
  slug: string
}> = ({ productContent, slug }) => {
  const bannerProduct = productBanners[slug]

  if (!bannerProduct) return null

  return (
    <div className="w-[100%] max-w-container mx-auto mt-[100px] md:mt-[140px] overflow-hidden md:overflow-visible md:px-3 xl:px-0">
      <div className="md:flex gap-8 md:justify-between mb-8 md:mb-[74px]">
        <div className="text-left md:max-w-[836px] relative px-6 md:px-0 z-10">
          <h2
            className="text-greyscale-800 text-[2rem] md:text-[2.75rem] leading-[2.5rem] md:leading-[3rem] font-bold pb-4"
            dangerouslySetInnerHTML={{
              __html: productContent.hero.title,
            }}
          ></h2>
          <p className="mb-4 mx-auto text-gray-550 text-base md:text-[1.25rem]">
            {productContent.hero.subtitle}
          </p>

          {productContent?.hero?.links &&
          Array.isArray(productContent.hero.links) &&
          productContent.hero.links.length > 0 ? (
            <div className="flex flex-col sm:flex-row gap-2 my-6">
              {productContent.hero.links.map((link: any, idx: number) => {
                const variant = (link.variant || link.type) as any
                return (
                  <React.Fragment key={`hero-link-${idx}`}>
                    <Button href={link.url} variant={variant}>
                      {link.title}
                    </Button>
                  </React.Fragment>
                )
              })}
            </div>
          ) : null}
          <span className="text-gray-550">
            <a
              className="text-gray-550 underline underline-offset-2"
              href="https://grist.numerique.gouv.fr/o/docs/forms/3kzLTwDzfAvJogt5SLXmwb/53"
              target="_blank"
            >
              Inscrivez-vous
            </a>
            &nbsp;au prochain webinaire
          </span>
        </div>
        <div className="md:block hidden text-center">
          <Image
            src={bannerProduct.src}
            height={300}
            width={300}
            alt={productContent.title}
            className="max-w-[90%]"
            priority
          />
        </div>
      </div>
      {productContent.hero.image && (
        <div className="ml-6 md:ml-0 md:block rounded-lg overflow-hidden shadow-[0_11px_51.8px_rgba(0,0,0,0.10)] relative md:static max-w-none">
          <Image
            src={`/assets/products/${productContent.hero.image.src}`}
            height={700}
            width={1200}
            alt={productContent.hero.image.alt}
            priority
            className="h-[300px] w-auto md:w-full md:h-auto object-cover object-left md:object-contain"
          />
        </div>
      )}
      <div className="">
        {productContent.hero.social_proof && (
          <SocialProof socialProof={productContent.hero.social_proof} />
        )}
      </div>
    </div>
  )
}

// SocialProof scroller déplacé dans sections/produits/docs/SocialProof
