import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import logoGouv from "@/assets/logo/gouv.svg";
import Link from 'next/link'
import Image from 'next/image'
import { LaGaufre } from '@/components/LaGaufre'
import { useState } from 'react'
import { productLogos } from '@/assets/products/logosfull'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

export type ProductContent = Record<string, any>;

const ProductsHeader: React.FC<{ productContent: ProductContent; slug: string }> = ({ productContent, slug }) => {
  const logoProduct = productLogos[slug]
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fade-in bg-white px-4 absolute top-0 right-0 left-0 z-50">
      <div className="flex items-center">
        <div className="flex items-center gap-4 sm:hidden">
          <button
            className="w-[48px] h-[48px] absolute text-blue-1 top-[9.5px] left-[19px] p-2 rounded-md focus:outline-none focus:bg-greyscale-050"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isOpen ? (
              <CloseIcon className="text-3xl" />
            ) : (
              <MenuIcon className="text-3xl" />
            )}
          </button>
        </div>
        <div className="relative mx-auto sm:mx-0 sm:flex py-3.5 items-center fr-enlarge-link">
          <Image
            className="mr-8 w-28 hidden md:block"
            src={logoGouv.src}
            width={120}
            height={40}
            alt="GOUVERNEMENT - Liberté, Égalité, Fraternité"
          />
          <Link href="/">
            <Image
              width={120}
              height={40}
              className="h-8 md:block"
              src={logoProduct.src}
              alt={`logo ${slug}`}
            />
          </Link>
        </div>
        <HeaderRight isOpen={isOpen} />
      </div>
    </header>
  );
};

const HeaderRight: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <>
    <div className="absolute flex items-center gap-4 top-[9.5px] right-[19px] md:top-0 md:right-0 sm:relative z-10 ml-auto">
      <span className="hidden lg:block">
        <LocaleSwitcher />
      </span>
      <LaGaufre />
    </div>
      <div
        className={`fixed md:hidden top-[67px] left-0 h-full w-full bg-white will-change-transform z-50 shadow-md transform transition-all ease-in-out duration-300
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="text-center mt-8">
          <LocaleSwitcher />
        </div>
      </div>
    </>
  );
};

export { ProductsHeader };