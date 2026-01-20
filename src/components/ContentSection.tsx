import { HTMLAttributes, PropsWithChildren } from 'react'

interface ContentSectionProps
  extends PropsWithChildren,
    Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  background?: 'gray'
  padding?: boolean
  horizontalPadding?: boolean
  verticalPadding?: boolean
  center?: boolean
  gap?: string
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  children,
  background,
  padding = true,
  horizontalPadding = true,
  verticalPadding = true,
  center = true,
  gap = 'gap-[50px]',
  ...props
}) => {
  return (
    <div
      className={`justify-center overflow-hidden flex ${background === 'gray' && 'bg-gray-025'} ${padding && verticalPadding && 'py-12 md:py-20'}`}
    >
      <div
        className={`flex flex-col ${center ? 'items-center' : 'items-start'} w-full lg:w-[70em] ${gap} ${padding && horizontalPadding && 'px-4'}`}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}
