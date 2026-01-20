import Image from 'next/image'
import { Button } from '@/components/ui-kit-v2/Button'
import { LASUITE_PRODUCTS } from '@/utils/products'
import { useTranslations } from '@/locales/useTranslations'

type ProductCardProps = {
  name: string
  content: any
  locale?: string
  background?: 'default' | 'gray'
}

export const ProductCard = ({ 
  name, 
  content, 
  locale = 'fr',
  background = 'default'
}: ProductCardProps) => {
  const t = useTranslations()
  const product = LASUITE_PRODUCTS[name]
  const logoText = (product as any)?.logoText

  const backgroundStyle = background === 'gray' 
    ? {
        background:
          'radial-gradient(1576.36% 132.88% at 63.77% -0.29%, rgba(62, 93, 231, 0.04) 0%, rgba(62, 93, 231, 0.00) 100%), var(--Background-Surface-Tertiary, #F6F8F9)',
      }
    : {
        background: 'radial-gradient(1576.36% 132.88% at 63.77% -0.29%, rgba(62, 93, 231, 0.02) 0%, rgba(62, 93, 231, 0.00) 100%), #FFF',
      }

  return (
    <div
      className="rounded-lg border"
      style={{
        borderRadius: '8px',
        border: '1px solid #DFE2EA',
        ...backgroundStyle,
        boxShadow: '0 8px 20px 0 rgba(0, 0, 0, 0.03)',
      }}
    >
      <div className="grid md:grid-cols-2 h-full">
        <div className="p-6 md:p-8 md:pr-0">
          {/* Logo */}
          <div>
            <Image
              src={product?.logo}
              height="48"
              alt=""
              aria-hidden="true"
              className="mb-[6px]"
            />
            {logoText && (
              <Image
                src={logoText}
                height="35"
                alt={product?.name || name}
                className="mb-[6px]"
              />
            )}
          </div>

          <p className="text-gray-550 text-base mb-6 flex-grow"
            dangerouslySetInnerHTML={{
              __html: content.description
            }}>
          </p>

          <div className="mt-auto">
            <Button
              href={product?.url}
              target="_blank"
              variant={product?.name === 'Visio' ? 'primary_brand' : 'tertiary_bordered'}
              aria-label={`${content?.button} - ${t('common.new_window')}`}
            >
              {content?.button}
            </Button>
          </div>
        </div>
        <div className="hidden md:block flex-shrink-0">
          <Image
            alt=""
            className="w-full h-full object-cover rounded-lg"
            src={
              locale !== 'fr'
                ? product?.screenshotEn ?? product?.screenshot ?? ''
                : product?.screenshot ?? ''
            }
          />
        </div>
      </div>
    </div>
  )
}

