import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { CommonProps } from '@/types'

interface ButtonProps extends CommonProps {
  href?: string
  'aria-label'?: string
}

export const ButtonStyle =
  'flex justify-center align-middle items-center min-h-10 text-base font-medium text-white-0 px-6 sm:w-auto bg-blue-1 hover:bg-dsfr-blue-2 transition ease-in-out delay-50 duration-300 text-center'

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  className,
  'aria-label': ariaLabel,
}) => (
  <>
    {href ? (
      <Link
        href={href}
        className={twMerge(ButtonStyle, className)}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    ) : (
      <button className={twMerge(ButtonStyle, className)}>{children}</button>
    )}
  </>
)
