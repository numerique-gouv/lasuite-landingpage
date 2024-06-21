import Image from 'next/image'
import { EntrySchema } from '@/cms/collections/communs'
import { Button } from '@/components/Button'
import { Raw } from '@/components/Raw'
import LogoSvg from '@/assets/logo/suite-numerique.svg'
import InitiativesPlaningDesktop from '@/assets/initiatives-planing-desktop.svg'
import InitiativesPlaningMobile1 from '@/assets/initiatives-planing-mobile-1.svg'
import InitiativesPlaningMobile2 from '@/assets/initiatives-planing-mobile-2.svg'
import InitiativesFinanceDesktop from '@/assets/initiatives-finance-desktop.svg'
import InitiativesFinanceMobile1 from '@/assets/initiatives-finance-mobile-1.svg'
import InitiativesFinanceMobile2 from '@/assets/initiatives-finance-mobile-2.svg'
import InitiativesFinanceMobile3 from '@/assets/initiatives-finance-mobile-3.svg'
import InitiativesFinanceMobile4 from '@/assets/initiatives-finance-mobile-4.svg'
import { SwiperWrapper } from '@/components/SwiperWrapper'

/**
 * output the communs page content with data taken from the CMS file
 *
 * several data fields contain already-made HTML, so we use the <Raw> component
 */
export const CommunsContent = ({ data }: { data: EntrySchema }) => {
  return (
    <>
      <div className="hero relative overflow-hidden">
        <div className="flex flex-col justify-between items-center gap-11 py-10 md:py-20 max-w-[40em] mx-auto">
          <Image
            src={LogoSvg}
            height={168}
            width={480}
            alt=""
            className="max-w-[80%]"
          />
          <h1 className="w-full flex text-center justify-center text-2xl text-[1.75rem] sm:text-4xl font-bold mb-[1.75rem] md:mb-[3.75rem] mt-[2rem] md:mt-[6rem] px-4 text-balance">
            {data.title}
          </h1>
          <div className="text-left px-4 communs-cms-content">
            <Raw>{data.intro}</Raw>
          </div>
        </div>
      </div>
      <div className="w-full justify-center flex">
        <h2 className="text-2xl text-[1.75rem] sm:text-4xl font-bold px-4 py-[4rem] max-w-[31em] text-balance text-center">
          {data.dates_title}
        </h2>
      </div>
      <div className="w-full hidden md:flex justify-center">
        <Image
          src={InitiativesPlaningDesktop}
          width={800}
          height={640}
          alt=""
        />
      </div>
      <div className="w-full max-w-[25rem] mx-auto md:hidden">
        <SwiperWrapper
          slides={[
            // slides have a tabIndex so that keyboard users on small screens can view each slide by pressing the tab key. But the actual text alternative is written after, visible by everyone. We add an alt here just so that mobile screen reader users dont get to focus something that is empty, they get the info they must go forward.
            <Image
              key="1"
              tabIndex={0}
              src={InitiativesPlaningMobile1}
              width={400}
              alt="Premier temps détaillé ci-dessous"
            />,
            <Image
              key="2"
              tabIndex={0}
              src={InitiativesPlaningMobile2}
              width={400}
              alt="Deuxième temps détaillé ci-dessous"
            />,
          ]}
        />
      </div>
      <div className="flex flex-col">
        <div className="text-left px-4 text-lg max-w-[40em] mx-auto communs-cms-content my-[1.75rem]">
          <Raw>{data.dates}</Raw>
        </div>
      </div>
      <div className="w-full items-center flex flex-col">
        <h2 className="text-2xl text-[1.75rem] sm:text-4xl font-bold px-4 pb-[2rem] max-w-[31em] text-center text-balance">
          {data.selection_title}
        </h2>

        <div className="hidden md:block">
          <Image
            src={InitiativesFinanceDesktop}
            width={800}
            height={640}
            alt=""
          />
        </div>
        <div className="w-full max-w-[25rem] mx-auto md:hidden">
          <SwiperWrapper
            slides={[
              // slides have a tabIndex so that keyboard users on small screens can view each slide by pressing the tab key. But for screen reader users, the text alternative is written after, to get some semantic html. We add an alt here just so that screen reader users dont get to focus something that is empty and get the info they must go forward.
              <Image
                key="1"
                tabIndex={0}
                src={InitiativesFinanceMobile1}
                width={400}
                alt=""
              />,
              <Image
                key="2"
                tabIndex={0}
                src={InitiativesFinanceMobile2}
                width={400}
                alt=""
              />,
              <Image
                key="3"
                tabIndex={0}
                src={InitiativesFinanceMobile3}
                width={400}
                alt=""
              />,
              <Image
                key="4"
                tabIndex={0}
                src={InitiativesFinanceMobile4}
                width={400}
                alt=""
              />,
            ]}
          />
        </div>
        <div className="sr-only">
          <Raw>{data.selection}</Raw>
        </div>
      </div>
      <p className="w-full justify-center flex pt-10 pb-40">
        <Button variant="outline" href={data.cta.href}>
          {data.cta.label}
        </Button>
      </p>
    </>
  )
}
