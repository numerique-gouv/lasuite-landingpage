import { DigitalCommons } from '@/sections/DigitalCommons'
import { Hero } from '@/sections/Hero'
import { Anct } from '@/sections/Anct'
import { Testimonies } from '@/sections/Testimonies'
import { Initiatives } from '@/sections/Initiatives'
import { Newsletter } from '@/sections/Newsletter'
import { EntrySchema } from '@/cms/collections/homepage'

export const HomepageContent = ({ data }: { data: EntrySchema }) => {
  return (
    <>
      <Hero intro={data.intro} callout={data.callout} />
      {/*<ProConnect />*/}
      <DigitalCommons description={data.apps_description} />
      <Initiatives
        description={data.initiatives_description}
        cta={data.initiatives_cta}
        items={data.faq || []}
      />
      <Testimonies
        title={data.testimonies_title}
        description={data.testimonies_description}
        items={data.testimonies_items || []}
      />
      <Anct
        description={data.anct_description}
        logos={data.anct_partenaires || []}
      />
      <Newsletter url={data.newsletter_link} />
    </>
  )
}
