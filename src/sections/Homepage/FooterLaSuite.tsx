import { useEffect, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Button } from '@/components/Button';
import WelcomeToLaSuite from '@/assets/welcometolasuite.png'
import SuiteNumeriqueLogo from '@/assets/logo/suite-numerique.svg'

import { ContentSection } from '@/components/ContentSection';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

export const FooterLaSuite = () => {
  return (
    <ContentSection>
      <div className="text-center mx-auto">
        <div className="mx-auto w-72 md:w-96">
          <Image 
            width="300px"
            className=""
            src={WelcomeToLaSuite} 
            alt="Welcome to la suite"
            />
          </div>
          <div className="mx-auto w-72 md:w-80">
            <Image 
              className="mx-auto"
              src={SuiteNumeriqueLogo} 
              alt="Logo la suite numérique"
              />
          </div>

        <p className="my-7 font-medium">Utilisez La Suite Numérique dès aujourd’hui !</p>

        <div className="flex gap-5 justify-center">
          <Button
            href='#'
            className=""
            target="_blank"
            variant="tertiary"
            icon={<ChatOutlinedIcon />}
            iconPosition="left"
            title="Discuter avec nous"
          >
            Discuter avec nous
          </Button>

          <Button
            href='#'
            target="_blank"
            icon={<ArticleOutlinedIcon />}
            iconPosition="left"
            title="S’abonner à la newsletter"
          >
            S’abonner à la newsletter
          </Button>
        </div>
        
      </div>
    </ContentSection>
  )
}
