import Link from 'next/link'
import React from 'react'
import classNames from 'classnames'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  'aria-label'?: string
  variant?: 'outline'
  size?: 'large'
}

const transition = 'transition ease-in-out delay-50 duration-300'
const core =
  'flex justify-center align-middle items-center py-2.5 px-6 min-h-10 text-base w-fit text-center'

export const buttonStyles = {
  default: `${core} ${transition} font-medium text-white bg-blue-1 hover:bg-dsfr-blue-2`,
  outline: `${core} ${transition} bg-transparent border border-2 font-bold border-blue-1 text-blue-1 hover:backdrop-brightness-95 hover:bg-transparent`,
  largeSize: '!text-xl md:!py-4 md:!px-8',
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant,
  size,
  'aria-label': ariaLabel,
}) => {
  const classes = classNames({
    [buttonStyles.default]: !variant,
    [buttonStyles.outline]: variant === 'outline',
    [buttonStyles.largeSize]: size === 'large',
  })
  const LinkComponent = href?.startsWith('#') ? 'a' : Link
  return (
    <>
      {href ? (
        <LinkComponent href={href} className={classes} aria-label={ariaLabel}>
          {children}
        </LinkComponent>
      ) : (
        <button className={classes}>{children}</button>
      )}
    </>
  )
}
