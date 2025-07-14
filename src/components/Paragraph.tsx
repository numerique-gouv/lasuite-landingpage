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
      {title && <h3 className="text-5xl font-bold my-5">{title}</h3>}
      {description && <p className="mb-4 text-base">{description}</p>}
      <div className="mb-4 text-base">{children}</div>
    </div>
  )
}
