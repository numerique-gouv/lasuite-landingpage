import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

type Slide = any

interface SwiperWrapperProps extends SwiperProps {
  slides: Array<Slide>
}

export const SwiperWrapper = ({
  slides,
  ...swiperProps
}: SwiperWrapperProps) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      {...swiperProps}
    >
      {slides.map((s, i) => (
        <SwiperSlide key={i}>{s}</SwiperSlide>
      ))}
    </Swiper>
  )
}
