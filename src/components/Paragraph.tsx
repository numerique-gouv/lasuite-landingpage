export const Paragraph = ({
  tag,
  title,
  description,
  children,
}: {
  tag?: string
  title?: string
  description?: string,
  children?: React.ReactNode
}) => {
  return (
    <div className="text-left mt-7 md:mt-0">
      {tag && (
        <div className="inline-block rounded bg-primary-100 font-bold text-blue-1 px-2.5 py-1.5">
          {tag}
        </div>
      )}
      {title && <h3 className="text-5xl font-bold my-5">{title}</h3>}
      {description && <p className="mb-4 text-base">{description}</p>}
      <div className="mb-4 text-base">{children}</div>
    </div>
  )
}
