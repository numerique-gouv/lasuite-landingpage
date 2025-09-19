import classNames from 'classnames'
import { useEffect } from 'react'
import { Hero } from '@/components/cms-blocks/Hero'
import { FollowUs } from '@/components/cms-blocks/FollowUs'
import { Cards } from '@/components/cms-blocks/Cards'
import { Pictures } from '@/components/cms-blocks/Pictures'
import { Testimonies } from '@/components/cms-blocks/Testimonies'
import { Content } from '@/components/cms-blocks/Content'
import { CtaBlock } from '@/components/cms-blocks/CtaBlock'
import { FAQ } from '@/components/cms-blocks/FAQ'
import { SuiteNumerique } from '@/components/cms-blocks/SuiteNumerique'
import { Screenshot } from '@/components/cms-blocks/Screenshot'
import { type EntrySchema } from '@/cms/collections/service-page'
import { Raw } from './Raw'

/**
 * output the service landing page content with data taken from the CMS file
 *
 * several data fields contain already-made HTML, so we use the <Raw> component
 * here to abstract this notion from lower-level components
 */
export const ServicePageContent = ({
  data,
  isPreview = false,
}: {
  data: EntrySchema
  isPreview?: boolean
}) => {
  useEffect(() => {
    async function loadDsfr() {
      // @ts-ignore
      if (window.dsfr) {
        return
      }
      // @ts-ignore
      await import('@gouvfr/dsfr/dist/core/core.module')
      // @ts-ignore
      await import('@gouvfr/dsfr/dist/component/accordion/accordion.module')
    }
    loadDsfr()
  }, [])
  return (
    <main className="enable-dsfr">
      <Hero
        {...data.hero}
        title={<Raw tag="span">{data.hero.title}</Raw>}
        subtitle={<Raw tag="span">{data.hero.subtitle}</Raw>}
      />
      {(data.flexible_content || []).map((block, i) => {
        let component
        switch (block.type) {
          case 'cards':
            component = block.items?.length ? (
              <Cards
                key="cards"
                {...block}
                items={block.items.map((item) => ({
                  ...item,
                  body: <Raw>{item.body}</Raw>,
                }))}
              />
            ) : null
            break
          case 'content':
            component = (
              <Content
                key="content"
                {...block}
                body={<Raw>{block.body}</Raw>}
              />
            )
            break
          case 'cta':
            component = (
              <CtaBlock key="cta" {...block} body={<Raw>{block.body}</Raw>} />
            )
            break
          case 'faq':
            component = (
              <FAQ
                key="faq"
                opened={isPreview}
                {...block}
                items={block.items.map((item) => ({
                  ...item,
                  answer: <Raw>{item.answer}</Raw>,
                }))}
              />
            )
            break
          case 'pictures':
            component = (
              <Pictures
                key="pictures"
                {...block}
                body={<Raw>{block.body}</Raw>}
              />
            )
            break
          case 'screenshot':
            component = (
              <Screenshot
                key="screenshot"
                {...block}
                body={<Raw>{block.body}</Raw>}
              />
            )
            break
          case 'testimonies':
            component = (
              <Testimonies
                key="testimonies"
                {...block}
                items={block.items.map((item) => ({
                  ...item,
                  author: <Raw tag="span">{item.author}</Raw>,
                  quote: <Raw>{item.quote}</Raw>,
                }))}
              />
            )
            break
        }

        return (
          <div
            key={i}
            className={classNames({
              'cms-block-bg--blue': block.bg === 'blue',
              'cms-block-bg--yellow': block.bg === 'yellow',
              'cms-block-bg--green': block.bg === 'green',
              'cms-block-bg--orange': block.bg === 'orange',
              'cms-block-bg--purple': block.bg === 'purple',
            })}
          >
            {component}
          </div>
        )
      })}
      {(data.socials?.enable || data.newsletter?.enable) && (
        <FollowUs
          newsletter={{
            ...data.newsletter,
            body: data.newsletter?.body ? (
              <Raw tag="span">{data.newsletter.body}</Raw>
            ) : undefined,
          }}
          socials={data.socials}
        />
      )}
      <SuiteNumerique title={data.title} id={data.id} />
    </main>
  )
}
