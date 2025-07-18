import Link from 'next/link'
import React from 'react'
import classNames from 'classnames'
import { MouseEventHandler } from 'react'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  target?: '_blank'
  onClick?: MouseEventHandler<HTMLButtonElement>
  'aria-label'?: string
  variant?: 'outline' | 'tertiary' | 'outlineSecondary'
  size?: 'large' | 'small'
  fullWidth?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const transition = 'transition ease-in-out delay-50 duration-300'
const core =
  'flex rounded justify-center align-middle items-center py-2.5 px-5 min-h-10 text-base w-fit text-left gap-2'

export const buttonStyles = {
  default: `${core} ${transition} font-medium text-white bg-blue-1 hover:bg-dsfr-blue-2`,
  tertiary: `${core} ${transition} font-medium text-blue-1 bg-primary-100 hover:bg-primary-300`,
  outline: `${core} ${transition} bg-transparent border border-2 font-bold border-blue-1 text-blue-1 hover:backdrop-brightness-95 hover:bg-transparent`,
  outlineSecondary: `${core} ${transition} bg-transparent border border-2 font-medium border-grey-4 text-blue-1 hover:backdrop-brightness-95 hover:bg-transparent`,

  largeSize: '!text-xl md:!py-4 md:!px-8',
  smallSize: '!text-sm md:!py-2 md:!px-4',
  fullWidth: '!w-full',
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  target,
  onClick,
  icon,
  iconPosition = 'left',
  variant,
  size,
  fullWidth = false,
  'aria-label': ariaLabel,
}) => {
  const classes = classNames({
    [buttonStyles.default]: !variant,
    [buttonStyles.outline]: variant === 'outline',
    [buttonStyles.tertiary]: variant === 'tertiary',
    [buttonStyles.outlineSecondary]: variant === 'outlineSecondary',

    [buttonStyles.largeSize]: size === 'large',
    [buttonStyles.fullWidth]: fullWidth,
    [buttonStyles.smallSize]: size === 'small',
  })

  const LinkComponent = href?.startsWith('#') ? 'a' : Link

  const content = (
    <>
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </>
  )

  return href ? (
    <LinkComponent
      href={href}
      target={target}
      className={classes}
      aria-label={ariaLabel}
    >
      {content}
    </LinkComponent>
  ) : (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
