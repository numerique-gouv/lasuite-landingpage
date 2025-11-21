import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export type TestimonialType = {
  quote?: string
  author?: string
  role?: string
  avatar?: { src: string; alt?: string }
}

export const Testimonials: React.FC<{ testimonials: TestimonialType[] }> = ({
  testimonials,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Random uniquement pour l'index initial
  useEffect(() => {
    if (testimonials?.length) {
      const randomIdx = Math.floor(Math.random() * testimonials.length)
      setCurrentIndex(randomIdx)
    }
  }, [testimonials?.length])

  if (!testimonials || testimonials.length === 0) return null

  const currentTestimonial = testimonials[currentIndex]
  const total = testimonials.length
  const isFirst = currentIndex === 0
  const isLast = currentIndex === total - 1

  const goToPrevious = () => {
    if (isFirst) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => prev - 1)
      setTimeout(() => setIsAnimating(false), 50)
    }, 300)
  }

  const goToNext = () => {
    if (isLast) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1)
      setTimeout(() => setIsAnimating(false), 50)
    }, 300)
  }

  const containerClasses =
    'flex flex-col md:flex-row max-w-container py-12 md:py-[120px] mx-auto px-6 md:px-3 xl:px-0 md:gap-6 transition-all duration-300 ease-in-out'

  return (
    <div>
      <div className={containerClasses}>
        <div className="transition-all duration-300 ease-in-out">
          <svg
            width="76"
            height="48"
            viewBox="0 0 76 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-8"
          >
            <path
              d="M34.5455 30.8897C34.5455 34.0647 33.8188 36.9044 32.3654 39.4086C30.912 41.8906 28.9332 43.8582 26.4289 45.3116C23.9247 46.7426 21.0962 47.4581 17.9435 47.4581C14.679 47.4581 11.6828 46.6531 8.95499 45.0432C6.24949 43.4334 4.08061 41.108 2.44837 38.0671C0.816122 35.0262 0 31.348 0 27.0327C0 23.321 0.648426 19.8776 1.94528 16.7026C3.24213 13.5275 5.04207 10.7326 7.3451 8.31774C8.97735 6.59606 10.8108 5.09797 12.8455 3.82348C14.8803 2.54898 17.0268 1.53163 19.2851 0.771403C20.1347 0.503089 20.8391 0.313033 21.3981 0.201236C21.9794 0.0670785 22.5831 0 23.2092 0C24.0812 0 24.7855 0.245955 25.3222 0.737864C25.8588 1.20741 26.1271 1.8223 26.1271 2.58252C26.1271 2.985 26.0488 3.35393 25.8923 3.68932C25.7582 4.00235 25.5569 4.27067 25.2886 4.49426C25.0427 4.71786 24.7184 4.91909 24.316 5.09797C23.9359 5.25449 23.4663 5.42218 22.9073 5.60106C21.0068 6.11533 19.218 6.83083 17.541 7.74757C15.8864 8.66431 14.3883 9.71521 13.0468 10.9003C11.7276 12.0853 10.5984 13.3822 9.65931 14.7908C8.72021 16.1995 8.02707 17.6752 7.57988 19.218H8.68667C10.073 17.6752 11.6717 16.5237 13.4828 15.7635C15.2939 14.9809 17.2392 14.5896 19.3186 14.5896C22.1806 14.5896 24.7632 15.3163 27.0662 16.7696C29.3692 18.2006 31.1915 20.1459 32.5331 22.6055C33.8747 25.065 34.5455 27.8264 34.5455 30.8897ZM76 30.8897C76 34.0647 75.2733 36.9044 73.8199 39.4086C72.3889 41.8906 70.4213 43.8582 67.917 45.3116C65.4128 46.7426 62.5843 47.4581 59.4316 47.4581C56.1447 47.4581 53.1374 46.6531 50.4095 45.0432C47.704 43.4334 45.5352 41.108 43.9029 38.0671C42.293 35.0262 41.4881 31.348 41.4881 27.0327C41.4881 23.321 42.1253 19.8776 43.3998 16.7026C44.6967 13.5275 46.4966 10.7326 48.7996 8.31774C50.4319 6.59606 52.2654 5.09797 54.3001 3.82348C56.3348 2.54898 58.4813 1.53163 60.7396 0.771403C61.5893 0.503089 62.2936 0.313033 62.8526 0.201236C63.4116 0.0670785 64.0265 0 64.6973 0C65.5693 0 66.2624 0.245955 66.7767 0.737864C67.3133 1.20741 67.5816 1.8223 67.5816 2.58252C67.5816 2.985 67.5146 3.35393 67.3804 3.68932C67.2462 4.00235 67.0338 4.27067 66.7432 4.49426C66.5196 4.71786 66.2065 4.91909 65.8041 5.09797C65.4016 5.25449 64.9209 5.42218 64.3619 5.60106C62.4613 6.11533 60.6726 6.83083 58.9956 7.74757C57.341 8.66431 55.8429 9.71521 54.5013 10.9003C53.1821 12.0853 52.053 13.3822 51.1139 14.7908C50.1748 16.1995 49.4816 17.6752 49.0344 19.218H50.1412C51.5051 17.6752 53.1039 16.5237 54.9373 15.7635C56.7708 14.9809 58.7161 14.5896 60.7732 14.5896C63.6575 14.5896 66.2401 15.3163 68.5207 16.7696C70.8238 18.2006 72.6461 20.1459 73.9876 22.6055C75.3292 25.065 76 27.8264 76 30.8897Z"
              fill="#304DDF"
            />
          </svg>
          <div className="grid">
            {testimonials.map((testimonial, idx) => (
              <p
                key={idx}
                className={`text-gray-850 font-medium text-xl md:text-3xl max-w-[800px] col-start-1 row-start-1 ${
                  idx === currentIndex
                    ? isAnimating
                      ? 'fade-out opacity-100'
                      : 'fade-in opacity-100'
                    : 'opacity-0 pointer-events-none'
                }`}
              >
                {testimonial.quote}
              </p>
            ))}
          </div>
          {total > 1 && (
            <div className="mt-8 inline-flex">
              <div className="flex items-center gap-2 px-2 h-10 rounded-lg border border-gray-100 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                <button
                  onClick={goToPrevious}
                  disabled={isFirst}
                  className={`transition-colors -mt-1 ${isFirst ? 'text-gray-300' : 'text-brand-550 cursor-pointer'}`}
                  aria-label="Précédent"
                >
                  <ArrowBackIcon fontSize="small" />
                </button>
                <span className="text-sm text-brand-550 min-w-[3rem] text-center font-medium">
                  {currentIndex + 1} / {total}
                </span>
                <button
                  onClick={goToNext}
                  disabled={isLast}
                  className={`transition-colors -mt-1 ${isLast ? 'text-gray-300' : 'text-brand-550 cursor-pointer'}`}
                  aria-label="Suivant"
                >
                  <ArrowForwardIcon fontSize="small" />
                </button>
              </div>
            </div>
          )}
        </div>
        <div
          className={`flex items-end gap-4 mt-10 md:mt-0 align-stretch items-between mb-8 transition-all duration-300 ease-in-out ${isAnimating ? 'fade-out' : 'fade-in'}`}
        >
          {currentTestimonial.avatar?.src && (
            <Image
              src={`/assets/products/${currentTestimonial.avatar.src}`}
              alt={
                currentTestimonial.avatar.alt || currentTestimonial.author || ''
              }
              width={48}
              height={48}
              className="rounded-full"
            />
          )}
          <div className="min-w-[200px]">
            {currentTestimonial.author && (
              <p className="text-gray-850 text-base font-medium">
                {currentTestimonial.author}
              </p>
            )}
            {currentTestimonial.role && (
              <p className="text-sm text-gray-550">{currentTestimonial.role}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
