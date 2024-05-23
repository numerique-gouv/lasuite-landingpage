import { Raw } from './Raw'

export const Pictures = ({
  title,
  body,
  items,
}: {
  title?: string
  body?: string
  items: Array<{ image: string; alt: string; href?: string }>
}) => {
  if (!items.length) return null
  return (
    <div className="cms-block">
      <div className="fr-container">
        {!!title && <h2>{title}</h2>}
        {!!body && <Raw className="cms-content cms-text-width">{body}</Raw>}
        <div className="flex flex-wrap justify-center mt-8 gap-16">
          {items.map((item, i) => {
            const img = (
              <img
                className="w-auto h-24"
                src={item.image}
                title={item.alt}
                alt={item.alt}
              />
            )
            if (item.href) {
              return (
                <div key={i}>
                  <a
                    className="cms-image-link"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {img}
                  </a>
                </div>
              )
            }
            return <div key={i}>{img}</div>
          })}
        </div>
      </div>
    </div>
  )
}
