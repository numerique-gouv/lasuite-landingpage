import logoGouv from '@/assets/logo/gouv.svg'
import Link from 'next/link'
import Image from 'next/image'
import { LaGaufre } from '@/components/LaGaufre'
import { useState } from 'react'
import { productLogos } from '@/assets/products/logosfull'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { Button } from '@/components/ui-kit-v2/Button'

export type ProductContent = Record<string, any>

const ProductsHeader: React.FC<{
  productContent: ProductContent
  slug: string
}> = ({ productContent, slug }) => {
  const logoProduct = productLogos[slug]

  return (
    <header className="fade-in bg-white px-4 absolute top-0 right-0 left-0 z-50 pr-6">
      <div className="flex items-center">
        <div className="relative sm:mx-0 sm:flex py-4 items-center fr-enlarge-link">
          <Image
            className="mr-8 w-28 hidden md:block"
            src={logoGouv.src}
            width={109}
            height={59}
            alt="GOUVERNEMENT - Liberté, Égalité, Fraternité"
          />
          <Link href="/">
            <Image
              width={180}
              height={40}
              className="md:block"
              src={logoProduct.src}
              alt={`LaSuite ${slug}`}
            />
          </Link>
        </div>
        <HeaderRight links={productContent?.header?.links} />
      </div>
    </header>
  )
}

type HeaderLink = {
  title: string
  url: string
  type?: string
  variant?: string
}

const LoginIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M9 18V16H16V2H9V0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H9ZM7 14L5.625 12.55L8.175 10H0V8H8.175L5.625 5.45L7 4L12 9L7 14Z"
      fill="currentColor"
    />
  </svg>
)

const HeaderRight: React.FC<{ links?: HeaderLink[] }> = ({ links }) => {
  const loginLink =
    Array.isArray(links) && links.length > 0 ? links[links.length - 1] : null

  return (
    <>
      <div className="flex lg:hidden ml-auto">
        {loginLink && (
          <Button
            href={loginLink.url}
            variant="tertiary_brand"
            size="small"
            icon={<LoginIcon />}
            className="!p-2 !min-w-0"
            target="_blank"
          ></Button>
        )}
      </div>

      <div className="flex items-center gap-2 md:top-0 md:right-0 hidden lg:flex z-10 ml-auto">
        {Array.isArray(links) &&
          links.map((link, idx) => {
            const variant = (link.variant || link.type) as any
            return (
              <>
                <Button
                  key={`${link.title}-${idx}`}
                  target="_blank"
                  href={link.url}
                  variant={variant}
                  size="small"
                >
                  {link.title}
                </Button>
                {idx === 0 && links.length > 2 && (
                  <span className="h-6 w-px rounded-[2px] bg-gray-100" />
                )}
              </>
            )
          })}
      </div>
    </>
  )
}

export { ProductsHeader }
