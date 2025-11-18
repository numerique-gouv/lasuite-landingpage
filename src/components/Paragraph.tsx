import { Tag } from '@/components/Tag'

export const Paragraph = ({
  tag,
  title,
  description,
  children,
}: {
  tag?: string
  title?: string
  description?: string
  children?: React.ReactNode
}) => {
  return (
    <div className="text-left mt-7 md:mt-0">
      {tag && <Tag>{tag}</Tag>}
      {title && <h3 className="text-greyscale-800 md:text-[2.75rem] text-3xl sm:leading-[42px] md:leading-[48px] font-bold mt-6 mb-6">{title}</h3>}
      {description && <p className="mb-4 text-gray-550 text-base">{description}</p>}
      <div className="mb-4 text-gray-550 text-base">{children}</div>
    </div>
  )
}
