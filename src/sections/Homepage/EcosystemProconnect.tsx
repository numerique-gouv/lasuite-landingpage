import { useEffect, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Button } from '@/components/Button';
import AddLinkIcon from '@mui/icons-material/AddLink';
import { ContentSection } from '@/components/ContentSection';
import { Paragraph } from '@/components/Paragraph';

import BentoResana from '@/assets/bento/resana.png'
import BentoWebconf from '@/assets/bento/webconf.png'
import BentoWebinaire from '@/assets/bento/webinaire.png'
import BentoAudioconf from '@/assets/bento/audioconf.png'

export const EcosystemProconnect = () => {
  return (
    <ContentSection>
    <Paragraph 
      tag="Services de l'État"
      title="L'écosysème ProConnect"
      description={`Continuez à utiliser les services de l’État avec ProConnect. Résana, Webinaire, Webconf, Audioconf... Autant d'outils puissants à portée de main qui complémentent La Suite à merveille.`}
    />
      <div className="grid md:grid-cols-2 gap-4">
        <Image src={BentoResana}/>
        <Image src={BentoWebconf}/>
        <Image src={BentoWebinaire}/>
        <Image src={BentoAudioconf}/>
      </div>
    </ContentSection>
  )
}
