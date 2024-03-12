import { twMerge } from 'tailwind-merge'
import React from 'react'
import { CommonProps } from '@/types'

/**
 * Line Break Component
 *
 * This component represents a line break (<br>) with additional styling classes.
 * By default, the line break is visually hidden on small screens to maintain
 * a clean layout, while remaining inline on larger screens.
 *
 * Note: The `aria-hidden` attribute is set to `true` to indicate that this element
 * should be ignored by screen readers.
 *
 */
export const Br: React.FC<Omit<CommonProps, 'children'>> = ({ className }) => (
  <br className={twMerge('hidden sm:inline', className)} aria-hidden={true} />
)
