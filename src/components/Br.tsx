import React from 'react'

interface BrProps {
  showOnMobile?: boolean
}

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
export const Br: React.FC<BrProps> = ({ showOnMobile = false }) => (
  <br
    className={showOnMobile ? 'inline' : 'hidden sm:inline'}
    aria-hidden={true}
  />
)
