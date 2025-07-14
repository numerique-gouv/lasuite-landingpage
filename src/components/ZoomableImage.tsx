import Image, { ImageProps } from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { ComponentProps } from 'react'
type ZoomProps = ComponentProps<typeof Zoom>

/**
 * component to use next Image that the user can zoom in easily in a similar way medium blog posts do
 */
export const ZoomableImage = ({
  src,
  alt,
  zoomOptions = {},
  ...props
}: ImageProps & { zoomOptions?: Omit<ZoomProps, 'children'> }) => {
  return (
    <Zoom {...zoomOptions}>
      <Image src={src} alt={alt} {...props} />
    </Zoom>
  )
}

// in TS, get the type of the props of the Zoom component:
