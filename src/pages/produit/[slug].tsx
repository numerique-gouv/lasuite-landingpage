import { LayoutProducts } from '@/components/LayoutProducts'
import { useRouter } from 'next/router'

// Importe dynamiquement le contenu selon le slug
const productContents: Record<string, any> = {
  'visio': require('@/content/products/visio.json'),
  'regie': require('@/content/products/regie.json'),
}

export default function ProduitPage() {
  const { locale = 'fr', query } = useRouter()
  const { slug } = query

  const productContent = slug && typeof slug === 'string'
    ? productContents[slug]
    : null

  if (!productContent) return <div>Produit introuvable</div>

  return (
    <LayoutProducts
      title={productContent[locale]?.title || productContent['fr'].title}
      productContent={productContent}
      locale={locale}
    >
    </LayoutProducts>
  )
}