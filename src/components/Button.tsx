import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  'aria-label'?: string
  variant?: 'outline'
}

export const ButtonStyle =
  'flex justify-center align-middle items-center min-h-10 text-base font-medium text-white py-2.5 px-6 w-fit bg-blue-1 hover:bg-dsfr-blue-2 transition ease-in-out delay-50 duration-300 text-center'

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant,
  'aria-label': ariaLabel,
}) => {
  const classNames = twMerge(
    ButtonStyle,
    variant === 'outline' &&
      'bg-transparent border border-2 font-bold border-blue-1 text-blue-1 hover:backdrop-brightness-95 hover:bg-transparent'
  )
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
