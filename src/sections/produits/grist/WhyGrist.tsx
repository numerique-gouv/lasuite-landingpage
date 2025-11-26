import { useTranslations } from '@/locales/useTranslations'
import { ZoomableImage } from '@/components/ZoomableImage'
import Img1 from '@/assets/grist/why-grist/1.png'
import Img2 from '@/assets/grist/why-grist/2.png'
import Img3 from '@/assets/grist/why-grist/3.png'
import Img4 from '@/assets/grist/why-grist/4.png'
import Img5 from '@/assets/grist/why-grist/5.png'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Fragment } from 'react'

const tabsNumber = 5
const IMGS = [Img1, Img2, Img3, Img4, Img5]

export const WhyGrist = () => {
  const t = useTranslations({ useFallback: true })

  return (
    <div className="flex flex-col gap-6">
      <h2 className="h2">{t('grist-landing.why-grist.title')}</h2>
      <p className="text-lg">{t('grist-landing.why-grist.description')}</p>
      <TabGroup>
        <TabList className="flex fade-in flex-wrap w-full justify-center mb-6">
          {Array.from({ length: tabsNumber }).map((_, index) => (
            <Tab key={index} as={Fragment}>
              {({ selected }) => (
                <button
                  className={`flex flex-grow justify-center hover:bg-greyscale-050 hover:border-b-brand-550 transition duration-150 ease-in items-center border-b border-greyscale-300 cursor-pointer p-2 rounded-t ${selected ? 'border-b-brand-550 border-b-2' : ''}`}
                  aria-expanded={selected}
                >
                  <span className="text-base text-brand-550 font-medium md:whitespace-nowrap">
                    {t(`grist-landing.why-grist.tab-${index + 1}.title`)}
                  </span>
                </button>
              )}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {Array.from({ length: tabsNumber }).map((_, index) => (
            <TabPanel key={index} className="w-full flex flex-col gap-6">
              <p className="text-greyscale-600 min-h-12">
                {t(`grist-landing.why-grist.tab-${index + 1}.description`)}
              </p>
              <div className="mt-0 aspect-[1024/559] rounded-xl relative w-full">
                <div className="top-0 left-0 absolute w-full h-full flex items-center justify-center z-10">
                  <div className="w-full h-full bg-[#f6f6f6]">
                    <ZoomableImage
                      alt=""
                      className="w-full h-full object-cover fade-in--secondary"
                      src={IMGS[index]}
                      zoomOptions={{ isDisabled: false }}
                    />
                  </div>
                </div>
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  )
}
