import {
  Header as KitHeader,
  LaGaufre,
} from "@gouvfr-lasuite/ui-kit";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import logoGouv from "@/assets/logo/gouv.svg";
import Image from 'next/image'
import { useState } from 'react'
import { productLogos } from '@/assets/products/logosfull'

export type ProductContent = Record<string, any>;

const ProductsHeader: React.FC<{ productContent: ProductContent; slug: string }> = ({ productContent, slug }) => {
  const logoProduct = productLogos[slug]
  return (
    <KitHeader
      leftIcon={
        <div className="flex gap-10">
          <Image className="hidden lg:block" src={logoGouv.src} width={120} height={20} alt="logo gouvernement" />
          {logoProduct && (
            <Image src={logoProduct.src} width={120} height={80} alt={`logo ${slug}`} />
          )}
        </div>
      }
      rightIcon={<HeaderRight />}
    />
  );
};

const HeaderRight = () => {
  return (
    <>
      <span className="hidden lg:block">
        <LocaleSwitcher />
      </span>
      <LaGaufre />
    </>
  );
};

export { ProductsHeader };