import Link from 'next/link'
import React from 'react'
import classNames from 'classnames'

type ButtonVariant =
  | 'primary_brand'
  | 'secondary_brand'
  | 'tertiary_brand'
  | 'primary_neutral'
  | 'secondary_neutral'
  | 'tertiary_neutral'
  | 'primary_info'
  | 'secondary_info'
  | 'tertiary_info'
  | 'tertiary_bordered'
  | 'none'
type ButtonSize = 'large' | 'small'

interface ButtonProps {
  children?: React.ReactNode
  href?: string
  target?: '_blank'
  'aria-label'?: string
  variant?: ButtonVariant | string
  // color supprimé: la couleur est encodée dans variant (ex: primary_brand)
  size?: ButtonSize
  fullWidth?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  className?: string
  style?: React.CSSProperties
}

const transition = 'transition ease-in-out delay-50 duration-300'
// core sans padding/hauteur: on applique via variables CSS avec des valeurs par défaut
const core =
  'flex rounded rounded-1 justify-center items-center text-base w-full md:w-fit text-left gap-[7px] px-4 h-10'

const styles = {
  // base variants (brand by default)
  primary_brand: `${core} ${transition} font-medium text-brand-050 bg-brand-550 hover:bg-brand-650`,
  secondary_brand: `${core} ${transition} font-medium bg-brand-050 text-brand-550 hover:bg-brand-150`,
  tertiary_brand: `${core} ${transition} font-medium text-brand-550 bg-transparent hover:bg-[#f2f5f4] active:bg-[#f2f5f4]`,
  tertiary_brand_bordered: `${core} ${transition} font-medium text-brand-550 bg-transparent border border-gray-150 hover:bg-[#f2f5f4] active:bg-[#f2f5f4]`,

  // neutral/info variants fallback (use grey borders for secondary, keep same tertiary look)
  primary_neutral: `${core} ${transition} font-medium text-white bg-gray-550 hover:backdrop-brightness-95`,
  secondary_neutral: `${core} ${transition} font-medium bg-transparent border border-2 border-grey-4 text-gray-550 hover:backdrop-brightness-95`,
  tertiary_neutral: `${core} ${transition} font-medium text-gray-550 bg-transparent hover:bg-[#f2f5f4] active:bg-[#f2f5f4]`,

  primary_info: `${core} ${transition} font-medium text-white bg-blue-1 hover:bg-dsfr-blue-2`,
  secondary_info: `${core} ${transition} font-medium bg-transparent border border-2 border-grey-4 text-brand-550 hover:backdrop-brightness-95`,
  tertiary_info: `${core} ${transition} font-medium text-blue-1 bg-transparent hover:bg-primary-300`,

  tertiary_bordered: `${core} ${transition} bg-transparent font-medium border border-gray-150 text-brand-550 hover:backdrop-brightness-95 hover:bg-transparent`,
  none: 'text-blue-1 underline underline-offset-2 hover:no-underline',

  large: '!text-xl md:!py-4 md:!px-8',
  small: 'md:!py-2 md:!px-4 h-8',
  fullWidth: '!w-full',
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  target,
  icon,
  iconPosition = 'left',
  variant,
  size,
  fullWidth = false,
  'aria-label': ariaLabel,
  className,
  style,
}) => {
  const normalizedVariant = (variant as string) || 'primary_brand'
  const isNone = normalizedVariant === 'none'

  const variantKey = normalizedVariant

  const extraBorderForTertiary =
    normalizedVariant === 'tertiary bordered'
      ? ' border border-2 border-grey-4'
      : ''

  const classes = classNames(
    styles[variantKey as keyof typeof styles] || styles.primary_brand,
    {
      [styles.none]: isNone,
      [styles.large]: size === 'large' && !isNone,
      [styles.small]: size === 'small' && !isNone,
      [styles.fullWidth]: fullWidth && !isNone,
    },
    extraBorderForTertiary,
    className
  )

  const LinkComponent: any = href?.startsWith('#') ? 'a' : Link

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span aria-hidden="true">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span aria-hidden="true">{icon}</span>
      )}
    </>
  )

  const inlineStyle: React.CSSProperties = {
    ...style,
  }

  if (href) {
    return (
      <LinkComponent
        href={href}
        target={target}
        className={classes}
        aria-label={ariaLabel}
        style={inlineStyle}
      >
        {content}
      </LinkComponent>
    )
  }

  return (
    <button className={classes} aria-label={ariaLabel} style={inlineStyle}>
      {content}
    </button>
  )
}

export default Button
