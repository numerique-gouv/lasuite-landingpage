import { DigitalCommons } from '@/sections/DigitalCommons'
import { Hero } from '@/sections/Hero'
import { Anct } from '@/sections/Anct'
import { Testimonies } from '@/sections/Testimonies'
import { Initiatives } from '@/sections/Initiatives'
import { Newsletter } from '@/sections/Newsletter'
import { EntrySchema } from '@/cms/collections/homepage'
import { Raw } from './Raw'

/**
 * output the homepage content with data taken from the CMS file
 *
 * several data fields contain already-made HTML, so we use the <Raw> component
 * here to abstract this notion from lower-level components
 */
export const HomepageContent = ({ data }: { data: EntrySchema }) => {
  return (
    <>
      <Hero
        intro={<Raw>{data.intro}</Raw>}
        callout={<Raw tag="span">{data.callout}</Raw>}
      />
      {/*<ProConnect />*/}
      <DigitalCommons
        title={[data.apps_title_1, data.apps_title_2]}
        description={<Raw>{data.apps_description}</Raw>}
      />
      <Initiatives
        description={<Raw>{data.initiatives_description}</Raw>}
        cta={data.initiatives_cta}
        items={
          (data.faq || []).map((item) => ({
            ...item,
            question: <Raw tag="span">{item.question}</Raw>,
            answer: <Raw>{item.answer}</Raw>,
          })) || []
        }
      />
      <Testimonies
        title={data.testimonies_title}
        description={<Raw>{data.testimonies_description}</Raw>}
        items={
          (data.testimonies_items || []).map((item) => ({
            ...item,
            author: <Raw tag="span">{item.author}</Raw>,
            quote: <Raw>{item.quote}</Raw>,
          })) || []
        }
      />
      <Anct
        description={<Raw>{data.anct_description}</Raw>}
        logos={data.anct_partenaires || []}
      />
      <Newsletter
        title={data.newsletter_title}
        body={<Raw tag="span">{data.newsletter_description}</Raw>}
        url={data.newsletter_link}
      />
    </>
  )
}
