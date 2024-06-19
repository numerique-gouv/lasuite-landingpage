import Image from 'next/image'
import type { ImageProps } from 'next/image'

/**
 * we have a custom image component that just redirects to a basic <img> tag if we have no dimensions info
 *
 * this is a workaround for the cms previewcomponents, who don't have the dimensions info
 * (dimensions are calculated server side at build time, and are not available at runtime in the browser in the cms preview components)
 */
export const CmsImage = ({ src, width, height, alt, ...props }: ImageProps) => {
  return width && height ? (
    <Image src={src} width={width} height={height} alt={alt} {...props} />
  ) : (
    <img src={src as string} alt={alt} {...props} />
  )
}
