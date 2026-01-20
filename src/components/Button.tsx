import Link from 'next/link'
import React from 'react'
import classNames from 'classnames'
import { MouseEventHandler } from 'react'
import { useTranslations } from '@/locales/useTranslations'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  target?: '_blank'
  onClick?: MouseEventHandler<HTMLButtonElement>
  'aria-label'?: string
  variant?: 'outline' | 'secondary' | 'tertiary' | 'outlineSecondary'
  size?: 'large' | 'small'
  fullWidth?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const transition = 'transition ease-in-out delay-50 duration-300'
const core =
  'flex rounded rounded-1 justify-center align-middle items-center py-2.5 px-5 min-h-10 text-base w-fit text-left gap-2'

export const buttonStyles = {
  default: `${core} ${transition} font-medium text-white bg-blue-1 hover:bg-dsfr-blue-2`,
  secondary: `${core} ${transition} font-medium border border-1 border-greyscale-300 text-blue-1`,
  tertiary: `${core} ${transition} font-medium text-blue-1 bg-primary-100 hover:bg-primary-300`,
  outline: `${core} ${transition} bg-transparent border border-2 font-bold border-blue-1 text-blue-1 hover:backdrop-brightness-95 hover:bg-transparent`,
  outlineSecondary: `${core} ${transition} bg-transparent border border-2 font-medium border-grey-4 text-blue-1 hover:backdrop-brightness-95 hover:bg-transparent`,

  largeSize: '!text-xl md:!py-4 md:!px-8',
  smallSize: 'min-h-8 !h-6 !py-2 !px-4',
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
  const t = useTranslations()
  const classes = classNames({
    [buttonStyles.default]: !variant,
    [buttonStyles.outline]: variant === 'outline',
    [buttonStyles.secondary]: variant === 'secondary',
    [buttonStyles.tertiary]: variant === 'tertiary',
    [buttonStyles.outlineSecondary]: variant === 'outlineSecondary',

    [buttonStyles.largeSize]: size === 'large',
    [buttonStyles.fullWidth]: fullWidth,
    [buttonStyles.smallSize]: size === 'small',
  })

  const LinkComponent = href?.startsWith('#') ? 'a' : Link

  const finalAriaLabel =
    target === '_blank'
      ? ariaLabel
        ? `${ariaLabel} - ${t('common.new_window')}`
        : typeof children === 'string'
          ? `${children} - ${t('common.new_window')}`
          : undefined
      : ariaLabel

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span aria-hidden="true">{icon}</span>
      )}
      <span>{children}</span>
      {target === '_blank' && (
        <span className="sr-only"> ({t('common.new_window')})</span>
      )}
      {icon && iconPosition === 'right' && (
        <span aria-hidden="true">{icon}</span>
      )}
    </>
  )

  return href ? (
    <LinkComponent
      href={href}
      target={target}
      className={classes}
      aria-label={finalAriaLabel}
    >
      {content}
    </LinkComponent>
  ) : (
    <button onClick={onClick} className={classes} aria-label={finalAriaLabel}>
      {content}
    </button>
  )
}
