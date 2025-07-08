import { productLogos } from '@/assets/products'
import Image from 'next/image'
import {
  Hero
} from "@gouvfr-lasuite/ui-kit";
import { productBanners } from '@/assets/products/banners'

export type ProductContent = Record<string, any>

export const ProductsHero : React.FC<{ productContent: ProductContent; slug: string }> = ({ productContent, slug }) => {
  const logoProduct = productLogos[slug]
  const bannerProduct = productBanners[slug]

  return (
    <div className="max-w-[60vw] mx-auto">
      <Hero 
        logo={
          logoProduct ? (
            <Image className="h-[66px]" src={logoProduct.src} width={120} height={40} alt={`logo ${slug}`} />
          ) : null
        }
        banner={bannerProduct.src}
        title={productContent.title}
        subtitle={productContent.subtitle}
      />
    </div>
  )
}
