import { DigitalCommons } from '@/sections/DigitalCommons'
import { Hero } from '@/sections/Hero'
import { Layout } from '@/components/Layout'
import { Anct } from '@/sections/Anct'
import { Testimonies } from '@/sections/Testimonies'
import { Initiatives } from '@/sections/Initiatives'
import { ProConnect } from '@/sections/ProConnect'
import { Newsletter } from '@/sections/Newsletter'
import { TITLE_SITE } from '@/constant'

export default function Landing() {
  return (
    <Layout className="text-center" title={TITLE_SITE}>
      <Hero />
      {/*<ProConnect />*/}
      <DigitalCommons />
      <Initiatives />
      <Testimonies />
      <Anct />
      <Newsletter />
    </Layout>
  )
}
