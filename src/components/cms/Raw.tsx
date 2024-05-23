export const Raw = ({
  tag: Tag = 'div',
  className,
  children,
  ...props
}: {
  tag?: keyof JSX.IntrinsicElements
  className?: string
  children?: string
}) => {
  if (!children) return null
  return (
    <Tag
      {...props}
      className={className}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
