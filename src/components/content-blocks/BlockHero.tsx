import { productLogos } from '@/assets/products'
import Image from 'next/image'
import { ProConnectButton } from '@/components/ProConnectButton'
import { productBanners } from '@/assets/products/banners';
import { Button } from "@/components/Button";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const handleScrollToNextSection = () => {
  const el = document.getElementById('content')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

export type ProductContent = Record<string, any>

export const BlockHero : React.FC<{ productContent: ProductContent; slug: string }> = ({ productContent, slug }) => {
  const logoProduct = productLogos[slug]
  const bannerProduct = productBanners[slug];
  
  if (!bannerProduct) return null; 

  return (
    <div className="w-[80%] md:max-h-[80vh] max-w-[1024px] mx-auto mt-[40%] md:mt-[140px]">
     <div className="grid md:grid-cols-2 gap-8 align-center items-center mb-[140px] md:mb-[156px]">
     <div className="text-center mx-auto">
         { logoProduct ? (
            <Image className="mx-auto h-[66px]" src={logoProduct.src} width={120} height={40} alt={`logo ${slug}`} />
          ) : null
          }
          <h2 className="text-greyscale-800 md:text-5xl text-3xl sm:leading-[42px] md:leading-[55px] font-bold pb-4">
            {productContent.title}
          </h2>
          <p className="mb-4 mx-auto text-greyscale-700 text-lg">
            {productContent.subtitle}
          </p>
          <div className="hero-products-buttons">
          <ProConnectButton onClick={() => window.location.href = productContent.hero.proconnect.url} />
          {productContent.hero?.buttonSecondary ? (<a href={productContent.hero.buttonSecondary.url} className="flex items-center bg-transparent rounded-sm border border-1 h-12 px-6 border-greyscale-300 font-medium p-4 text-primary-800 hover:bg-greyscale-050">
            {productContent.hero?.buttonSecondary.title}
          </a>) : null}
          </div>
        </div>
        <div className="md:block hidden text-center">
          <Image
            src={bannerProduct.src}
            height={168}
            width={480}
            alt={productContent.title}
            className="max-w-[90%]"
            priority
          />
        </div>
     </div>

      {productContent?.hero?.seemore ? (
      <div className="flex justify-center">
        <Button
          onClick={() => handleScrollToNextSection()}
          variant="secondary"
          icon={<ExpandMoreIcon />}
          iconPosition="left"
          >
           {productContent.hero.seemore}
        </Button>
      </div>) : null
      }
    </div>
  )
}
