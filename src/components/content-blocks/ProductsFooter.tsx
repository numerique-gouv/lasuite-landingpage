import { productLogos } from '@/assets/products/logosfull'
import Image from 'next/image'
import { ProConnectButton } from '@/components/ProConnectButton'
import { Button } from "@/components/ui-kit-v2/Button";


export type ProductContent = Record<string, any>

export const ProductsFooter : React.FC<{ productContent: ProductContent; slug: string }> = ({ productContent, slug }) => {
  const logoProduct = productLogos[slug]

  return productContent.footer? (
    <div className="py-12 md:py-[120px] mx-auto bg-gray-025 text-center px-6 md:px-0">
      {logoProduct ? (
        <Image className="mx-auto w-[272px] md:max-w-[432px]" src={logoProduct.src} width={432} height={96} alt={`logo ${slug}`} />
      ) : null}

      <p className="pb-10 pt-2 text-gray-550 text-sm md:text-xl font-normal" dangerouslySetInnerHTML={{
          __html: productContent.footer?.text,
        }}
      />

      {productContent.footer?.links && Array.isArray(productContent.footer.links) && productContent.footer.links.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-4">
          {productContent.footer.links.map((link: any, idx: number) => {
            const variant = (link.variant || link.type) as any
            return (
              <Button key={`footer-link-${idx}`} href={link.url} variant={variant}>
                {link.title}
              </Button>
            )
          })}
        </div>
      )}

    </div>
  ) : null
}
