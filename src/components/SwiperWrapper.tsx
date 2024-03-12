import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

type Slide = any

interface SwiperWrapperProps {
  slides: Array<Slide>
  slidesPerView?: number
}

export const SwiperWrapper = ({
  slides,
  slidesPerView = 1,
}: SwiperWrapperProps) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={slidesPerView}
      pagination={true}
      modules={[Pagination]}
    >
      {slides.map((s, i) => (
        <SwiperSlide key={i}>{s}</SwiperSlide>
      ))}
    </Swiper>
  )
}
