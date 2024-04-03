import { HTMLAttributes, PropsWithChildren } from 'react'

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
  return (
    <div
      className={`overflow-hidden flex justify-center ${background === 'gray' && 'bg-white-1'} ${padding && 'py-[50px] md:py-20'}`}
    >
      <div
        className={`flex flex-col items-center w-full lg:w-[64em] gap-[50px] ${padding && 'px-4'}`}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}
