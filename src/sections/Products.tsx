import { ContentSection } from '@/components/ContentSection'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { PRODUCTS } from '@/utils/products'
import classNames from 'classnames'

const PRODUCTS_GRID = [
  'Tchap',
  'France Transfert',
  'Webinaire',
  'Webconf',
  'Resana',
  'AudioConf',
  'Grist',
  'Docs',
  'Messagerie',
]

export const Products = () => {
  return (
    <ContentSection>
      <div className="grid flex-wrap items-center justify-center  grid-cols-3 gap-8">
        {PRODUCTS_GRID.map((name) => {
          // @ts-ignore
          const hasLink = PRODUCTS[name]?.url
          const logo = PRODUCTS[name]?.logo
          const content = (
            <div
              key={name}
              className={classNames('w-[120px] h-[120px] md:w-[150px] md:h-[150px] flex flex-col items-center justify-between rounded p-2 md:p-4', {
                  'border-dashed border-2 border-grey-4': PRODUCTS[name].wip,
                  'bg-grey-6': !PRODUCTS[name].wip,
                })}
            >
              <div className="flex-grow flex flex-col items-center justify-center relative">
                <Image
                  className="w-9/12 md:w-auto"
                  src={logo}
                  alt={`Logo ${name}`}
                />
                {PRODUCTS[name]?.status && (
                  <div className={classNames("absolute bottom-0 md:right-[-15px] right-[-5px] text-sm bg-blue-1 border-2 border-white rounded text-white px-1 py-0.5 font-bold text-xs", {
                    'bg-grey-1': PRODUCTS[name].wip,
                  })}>
                    {PRODUCTS[name]?.status}
                  </div>
                )}
              </div>
              <h4 className="text-sm md:text-lg md:whitespace-nowrap">
                {name}
              </h4>
            </div>
          )

          return (
            <a key={name} href={hasLink} target="_blank">
              {content}
            </a>
          )
        })}
      </div>
      <Button href="/products" variant="outline">
        Je découvre les produits de La Suite
      </Button>
    </ContentSection>
  )
}
