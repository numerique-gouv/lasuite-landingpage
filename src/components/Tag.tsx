export const Tag = ({
  type = 'info',
  children,
}: {
  type?: 'info' | 'warning'
  children: React.ReactNode
}) => {
  return (
    <div
      className={`inline-block rounded font-bold px-2.5 py-1.5 ${
        type === 'info'
          ? 'bg-gray-025 text-brand-550'
          : 'bg-warning-1 text-warning-text'
      }`}
    >
      {children}
    </div>
  )
}
