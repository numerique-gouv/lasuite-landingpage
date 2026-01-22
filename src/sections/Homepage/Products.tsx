import { useRouter } from 'next/router'
import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import { ProductCard } from '@/components/ProductCard'

const DINUM_PRODUCTS_GRID = [
  'Tchap',
  'Visio',
  'France Transfert',
  'Messagerie',
  'Fichiers',
]

export const Products = ({ content }: { content: any }) => {
  const { locale = 'fr' } = useRouter()

  const tchapIndex = 0
  const rightColumnProducts = DINUM_PRODUCTS_GRID.slice(1, 3)
  const bottomRowProducts = DINUM_PRODUCTS_GRID.slice(3)

  return (
    <ContentSection background="gray" id="products">
      <div className="w-full">
        <Paragraph title={content.title} description={content.description} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="lg:row-span-1">
            <ProductCard
              name={DINUM_PRODUCTS_GRID[tchapIndex]}
              content={content[DINUM_PRODUCTS_GRID[tchapIndex]]}
              locale={locale}
            />
          </div>

          <div className="grid gap-6 lg:grid-rows-2">
            {rightColumnProducts.map((name) => (
              <div className="lg:row-span-1" key={name}>
                <ProductCard
                  name={name}
                  content={content[name]}
                  locale={locale}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 items-stretch">
          {bottomRowProducts.map((name) => (
            <ProductCard
              key={name}
              name={name}
              content={content[name]}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </ContentSection>
  )
}
