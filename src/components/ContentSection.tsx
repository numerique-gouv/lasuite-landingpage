import { HTMLAttributes, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

interface ContentSectionProps
  extends PropsWithChildren,
    Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  background?: 'gray'
  padding?: boolean
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  children,
  background,
  padding = true,
  ...props
}) => {
  const classNames = twMerge(
    'overflow-hidden flex justify-center',
    background == 'gray' && 'bg-white-1',
    padding && 'py-[50px] md:py-20'
  )

  return (
    <div className={classNames}>
      <div
        className={twMerge(
          'flex flex-col items-center w-full lg:w-[64em] gap-[50px]',
          padding && 'px-4'
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}
