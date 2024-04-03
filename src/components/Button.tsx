import Link from 'next/link'
import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  'aria-label'?: string
  variant?: 'outline'
}

const transition = 'transition ease-in-out delay-50 duration-300'
const core =
  'flex justify-center align-middle items-center py-2.5 px-6 min-h-10 text-base w-fit text-center'

export const buttonStyles = {
  default: `${core} ${transition} font-medium text-white bg-blue-1 hover:bg-dsfr-blue-2`,
  outline: `${core} ${transition} bg-transparent border border-2 font-bold border-blue-1 text-blue-1 hover:backdrop-brightness-95 hover:bg-transparent`,
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant,
  'aria-label': ariaLabel,
}) => {
  const classNames =
    variant === 'outline' ? buttonStyles.outline : buttonStyles.default

  return (
    <>
      {href ? (
        <Link href={href} className={classNames} aria-label={ariaLabel}>
          {children}
        </Link>
      ) : (
        <button className={classNames}>{children}</button>
      )}
    </>
  )
}
