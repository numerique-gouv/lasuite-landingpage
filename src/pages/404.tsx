import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import type { GetStaticProps } from 'next'
import { Layout } from '@/components/Layout'
import Image404 from '@/assets/404.svg'
import { Button } from '@/components/ui-kit-v2/Button'
import { useTranslations } from '@/locales/useTranslations'

/**
 * this is a workaround to avoid having `asPath` targeting the /404 page instead of the originally requested page
 *
 * @see https://stackoverflow.com/a/74740400/257559
 */
export const getStaticProps: GetStaticProps<Record<string, never>> = () => {
  return { props: {} }
}

export default function NotFound() {
  const t = useTranslations()
  const { locale, defaultLocale, asPath } = useRouter()
  return (
    <Layout title="Page introuvable" background="gray">
      <div className="text-center max-w-[36rem] m-auto px-4 py-16 md:py-24">
        <Image src={Image404} alt="Image 404" className="m-auto mb-8" />
        <h1 className="text-3xl font-bold mb-4">{t('not_found_page.title')}</h1>

        <p className="text-gray-600 text-base mb-12">
          {t('not_found_page.body')}
        </p>

        {locale !== defaultLocale && (
          <p className="mb-8">
            {t('not_found_page.try_default_locale', {
              link: (
                <Link
                  href={asPath}
                  locale={defaultLocale}
                  className="underline underline-offset-4"
                >
                  {t('not_found_page.default_locale_link')}
                </Link>
              ),
            })}
          </p>
        )}

        <p className="flex justify-center">
          <Button
            href="/"
            variant="secondary_brand"
            target="_blank"
            className="hidden lg:flex"
          >
            {t('common.back_to_home')}
          </Button>
        </p>
      </div>
    </Layout>
  )
}
