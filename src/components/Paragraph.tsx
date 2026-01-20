export const Paragraph = ({
  title,
  description,
  children,
}: {
  title?: string
  description?: string
  children?: React.ReactNode
}) => {
  return (
    <div className="max-w-container mx-auto w-[100%]">
        <div className="">
          {title && (
            <h3 className="text-gray-850 md:text-[2.75rem] text-3xl sm:leading-[42px] md:leading-[48px] font-bold pb-4">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-gray-550 text-sm md:text-lg mb-12">{description}</p>
          )}
        </div>
      <div className="mb-4 text-gray-550 text-base">{children}</div>
    </div>
  )
}
