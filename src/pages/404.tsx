import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import type { GetStaticProps } from 'next'
import { Layout } from '@/components/Layout'
import QuestionMark from '@/assets/question-mark.svg'
import { Button } from '@/components/Button'
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
      <div className="text-center max-w-[26rem] m-auto px-4 py-16 md:py-24">
        <Image src={QuestionMark} alt="" className="m-auto mb-8" />
        <h1 className="text-3xl font-bold mb-8">{t('not_found_page.title')}</h1>

        <p className="mb-8">{t('not_found_page.body')}</p>

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
          <Button href="/">{t('common.back_to_home')}</Button>
        </p>
      </div>
    </Layout>
  )
}
