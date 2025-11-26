import { Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import LogoI18n from '@/assets/i18n.svg'
import { useTranslations } from '@/locales/useTranslations'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import CheckIcon from '@mui/icons-material/Check'

const labels: Record<string, string> = {
  en: 'English',
  fr: 'Français',
  //  de: 'Deutsch',
  //  nl: 'Nederlands',
}

export const LocaleSwitcher = () => {
  const router = useRouter()
  const { pathname, asPath, query, locale, locales } = router
  const t = useTranslations()

  if (!locales || locales.length < 2) {
    return null
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex border-none items-center bg-white border rounded-md px-4 py-2 font-medium text-brand-550 bg-transparent hover:bg-[#f2f5f4] active:bg-[#f2f5f4]">
        <img src={LogoI18n.src} alt="Language" className="w-5 h-5 mr-2" />
        {labels[locale ?? 'en']}
        <ArrowDropDownIcon className="w-5 h-5 ml-2 text-brand-550 transition-transform focus:rotate-180" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="border text-base border-greyscale-100 absolute left-0 overflow-hidden mt-2 w-36 origin-top-right bg-white rounded-md shadow-md focus:outline-none">
          {locales.map((availableLocale) => (
            <Menu.Item key={availableLocale}>
              {({ active }) => (
                <button
                  onClick={() =>
                    router.push({ pathname, query }, asPath, {
                      locale: availableLocale,
                    })
                  }
                  className="items-center hover:bg-[#f2f5f4] flex w-full px-4 py-2 font-medium text-base text-gray-900 justify-between"
                >
                  {labels[availableLocale]}
                  {locale === availableLocale && (
                    <CheckIcon className="w-4 h-4 text-brand-550" />
                  )}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
