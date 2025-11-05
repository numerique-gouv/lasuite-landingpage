import { useTranslations } from '@/locales/useTranslations'
import Anct from '@/assets/grist/users/anct.png'
import MAE from '@/assets/grist/users/ministere-affaires-etrangeres.png'
import Cnil from '@/assets/grist/users/cnil.png'
import Cnrs from '@/assets/grist/users/cnrs.png'
import AcademieVersailles from '@/assets/grist/users/academie-versailles.png'
import Image from 'next/image'

export const Users = () => {
  const t = useTranslations({ useFallback: true })

  return (
    <div className="md:text-center flex flex-col gap-8">
      <h2 className="h2">{t('grist-landing.users.title')}</h2>
      <p className="text-lg">{t('grist-landing.users.description')}</p>
      <div className="flex flex-row flex-wrap gap-8 md:gap-4 justify-center md:justify-between items-center">
        <Image className="h-auto w-[72px]" src={Anct} alt="A.N.C.T." />
        <Image className="h-auto w-[122px]" src={Cnil} alt="C.N.I.L." />
        <Image className="h-auto w-[96px]" src={Cnrs} alt="C.N.R.S." />
        <Image
          className="h-auto w-[159px]"
          src={MAE}
          alt="Ministère de l'Europe et des Affaires Étrangères"
        />
        <Image
          className="h-auto w-[185px]"
          src={AcademieVersailles}
          alt="Académie de Versailles"
        />
      </div>
    </div>
  )
}
