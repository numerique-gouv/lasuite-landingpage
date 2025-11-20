import { Button } from '@/components/ui-kit-v2/Button'
import { useTranslations } from '@/locales/useTranslations'
import CubesPatternImg from '@/assets/grist/pattern-cubes.png'

export const Cta = ({
  primary,
  secondary,
}: {
  primary: {
    href: string
    label: string
    target?: '_blank'
  }
  secondary: {
    href: string
    label: string
    target?: '_blank'
  }
}) => {
  return (
    <div
      className="flex py-8 xs:py-11 px-4 xs:px-11 sm:px-0 flex-col sm:flex-row gap-5 items-center justify-center rounded-2xl"
      style={{
        backgroundColor: '#f6f6f6',
        backgroundImage: `url(${CubesPatternImg.src})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '35px 60px',
      }}
    >
      <div className="w-full sm:w-fit">
        <Button fullWidth href={primary.href} target={primary.target}>
          {primary.label}
        </Button>
      </div>

      <div className="w-full sm:w-fit">
        <Button
          fullWidth
          href={secondary.href}
          variant="tertiary_bordered"
          target={secondary.target}
        >
          {secondary.label}
        </Button>
      </div>
    </div>
  )
}
