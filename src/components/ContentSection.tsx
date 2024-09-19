import { HTMLAttributes, PropsWithChildren } from 'react'

interface ContentSectionProps
  extends PropsWithChildren,
    Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  background?: 'gray'
  padding?: boolean
  gap?: string
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  children,
  background,
  padding = true,
  gap = 'gap-[50px]',
  ...props
}) => {
  return (
    <div
      className={`overflow-hidden flex justify-center ${background === 'gray' && 'bg-white-1'} ${padding && 'py-[50px] md:py-20'}`}
    >
      <div
        className={`flex flex-col items-center w-full lg:w-[70em] ${gap} ${padding && 'px-4'}`}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}
