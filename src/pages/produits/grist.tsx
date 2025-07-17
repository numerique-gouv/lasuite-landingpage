import { useTranslations } from '@/locales/useTranslations'
import { Layout } from '@/components/Layout'
import { FeatureExcerpt } from '@/components/FeatureExcerpt'
import { Hero } from '@/sections/produits/grist/Hero'
import { WhyGrist } from '@/sections/produits/grist/WhyGrist'
import { Cta } from '@/sections/produits/grist/Cta'
import { Mosaic } from '@/sections/produits/grist/Mosaic'
import { Users } from '@/sections/produits/grist/Users'
import { KeyFeatures } from '@/sections/produits/grist/KeyFeatures'
import { Resources } from '@/sections/produits/grist/Resources'
import { Contact } from '@/sections/produits/grist/Contact'
import { Footer } from '@/sections/produits/grist/Footer'
import BeforeContactBlockImg from '@/assets/grist/before-contact-block.png'

export default function GristLandingPage() {
  const t = useTranslations({ useFallback: true })
  return (
    <Layout title={'Grist'}>
      <div className="pt-16 px-3 sm:mt-12 max-w-[65.5rem] mx-auto flex flex-col gap-32 mb-32">
        <Hero />
        <WhyGrist />
        <Cta
          primary={{
            href: t('grist-landing.cta-1.button-1.href'),
            label: t('grist-landing.cta-1.button-1.label'),
            target:
              t('grist-landing.cta-1.button-1.target') ===
              'grist-landing.cta-1.button-1.target'
                ? undefined
                : t('grist-landing.cta-1.button-1.target'),
          }}
          secondary={{
            href: t('grist-landing.cta-1.button-2.href'),
            label: t('grist-landing.cta-1.button-2.label'),
            target:
              t('grist-landing.cta-1.button-2.target') ===
              'grist-landing.cta-1.button-2.target'
                ? undefined
                : t('grist-landing.cta-1.button-2.target'),
          }}
        />
        <Mosaic />
        <Cta
          primary={{
            href: t('grist-landing.cta-2.button-1.href'),
            label: t('grist-landing.cta-2.button-1.label'),
            target:
              t('grist-landing.cta-2.button-1.target') ===
              'grist-landing.cta-2.button-1.target'
                ? undefined
                : t('grist-landing.cta-2.button-1.target'),
          }}
          secondary={{
            href: t('grist-landing.cta-2.button-2.href'),
            label: t('grist-landing.cta-2.button-2.label'),
            target:
              t('grist-landing.cta-2.button-2.target') ===
              'grist-landing.cta-2.button-2.target'
                ? undefined
                : t('grist-landing.cta-2.button-2.target'),
          }}
        />
        <Users />
        <KeyFeatures />
        <div className="max-w-[32rem] md:max-w-none">
          <FeatureExcerpt
            image={BeforeContactBlockImg}
            title={t(`grist-landing.before-contact-block.title`)}
            description={t(`grist-landing.before-contact-block.description`)}
            cta={{
              href: t('grist-landing.before-contact-block.cta.href'),
              label: t('grist-landing.before-contact-block.cta.label'),
              target:
                t('grist-landing.before-contact-block.cta.target') ===
                'grist-landing.before-contact-block.cta.target'
                  ? undefined
                  : t('grist-landing.before-contact-block.cta.target'),
            }}
          />
        </div>
        <Contact />
        <Resources />
      </div>
      <Footer />
    </Layout>
  )
}
