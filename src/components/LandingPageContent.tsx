import classNames from 'classnames'
import { useEffect } from 'react'
import { Hero } from '@/components/cms/Hero'
import { FollowUs } from '@/components/cms/FollowUs'
import { Cards } from '@/components/cms/Cards'
import { Pictures } from '@/components/cms/Pictures'
import { Testimonies } from '@/components/cms/Testimonies'
import { Content } from '@/components/cms/Content'
import { CtaBlock } from '@/components/cms/CtaBlock'
import { QandA } from '@/components/cms/QandA'
import { SuiteNumerique } from '@/components/cms/SuiteNumerique'
import { Screenshot } from '@/components/cms/Screenshot'
import { LandingPageSchema } from '@/cms/landing-page.schema'

export const LandingPageContent = ({
  id,
  data,
}: {
  id: string
  data: LandingPageSchema
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
      <Hero {...data.hero} />
      {(data.flexible_content || []).map((block, i) => {
        let component
        switch (block.type) {
          case 'cards':
            component = <Cards {...block} />
            break
          case 'content':
            component = <Content {...block} />
            break
          case 'cta':
            component = <CtaBlock {...block} />
            break
          case 'faq':
            component = <QandA {...block} />
            break
          case 'pictures':
            component = <Pictures {...block} />
            break
          case 'screenshot':
            component = <Screenshot {...block} />
            break
          case 'testimonies':
            component = <Testimonies {...block} />
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
      {(!!data.socials?.enable || !!data.newsletter?.enable) && (
        <FollowUs
          newsletter={data.newsletter || { enable: false }}
          socials={data.socials || { enable: false }}
        />
      )}
      <SuiteNumerique {...{ title: data.title, id }} />
    </main>
  )
}
