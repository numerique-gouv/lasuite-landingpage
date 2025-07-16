import { productLogos } from '@/assets/products/logosfull'
import Image from 'next/image'
import { ProConnectButton } from '@/components/ProConnectButton'
import { Button } from "@/components/Button";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export type ProductContent = Record<string, any>

export const ProductsFooter : React.FC<{ productContent: ProductContent; slug: string }> = ({ productContent, slug }) => {
  const logoProduct = productLogos[slug]

  return productContent.footer? (
    <div className="my-[147px] max-w-[80%] max-w-[1024px] mx-auto text-center">
      {logoProduct ? (
        <Image className="mx-auto max-w-[295px]" src={logoProduct.src} width={295} height={40} alt={`logo ${slug}`} />
      ) : null}

      <p className="py-6 font-normal" dangerouslySetInnerHTML={{
          __html: productContent.footer?.text,
        }}
      />
      <div className="footer-products-buttons">
        <ProConnectButton onClick={() => window.location.href = productContent.hero.proconnect.url} />
        {productContent.hero?.buttonSecondary ? 
        (<a href={productContent.hero.buttonSecondary.url}
          className="flex items-center bg-transparent rounded-sm border border-1 h-12 px-6 border-greyscale-300 font-medium p-4 text-primary-800 hover:bg-greyscale-050">
          {productContent.hero?.buttonSecondary.title}
        </a>) : null}
      </div>
    </div>
  ) : null
}
