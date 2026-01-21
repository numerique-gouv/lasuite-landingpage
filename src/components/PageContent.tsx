export const PageContent: React.FC<{
  title: string
  children: React.ReactNode
}> = ({ title, children }) => {
  return (
    <div className="fr-container page-content max-w-[800px]">
      <div className="py-8 relative mt-12 text-center">
        <h1 className="font-bold text-[2rem] md:text-[2.5rem]">{title}</h1>
      </div>
      <div className="content-page pb-12 bg-white text-body">
        <div className="max-w-[50rem]">{children}</div>
      </div>
    </div>
  )
}
