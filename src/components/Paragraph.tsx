export const Paragraph = ({ tag, title, description, children}: {
  tag?: string,
  title?: string,
  description?: string,
}) => {
  return (
    <div className="text-left">
     {tag && (
        <span className="rounded bg-primary-100 font-bold text-blue-1 px-2.5 py-1.5">
          {tag}
        </span>
      )}
      {title && (
        <h3 className="text-5xl font-bold my-4">
          {title}
        </h3>
      )}
      {description && (
        <p className="mb-4 text-base">
          {description}
        </p>
      )}
      <div className="mb-4 text-base">
        {children}
      </div>
    </div>
  )
}
