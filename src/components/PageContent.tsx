export const PageContent: React.FC<{
  title: string
  children: React.ReactNode
}> = ({ title, children }) => {
  return (
    <>
      <div className="py-9 bg-dsfr-blue-3">
        <h1 className="fr-container font-bold text-[2rem] md:text-[2.5rem]">
          {title}
        </h1>
      </div>
      <div className="fr-container content-page py-12 bg-white text-body">
        <div className="max-w-[50rem]">{children}</div>
      </div>
    </>
  )
}
