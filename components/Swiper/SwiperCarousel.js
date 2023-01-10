import SwiperArticle from "./SwiperArticle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";


const SwiperCarousel = ({ data }) => {

  return (
    <>
      <Swiper
      spaceBetween={ 20 }
      slidesPerView={ 3 }
      allowTouchMove={ true }
      touchStartPreventDefault={ false }
      navigation={ true }
      modules={ [Navigation] }
      breakpoints= {{
          310: {
          slidesPerView: 1,
          centeredSlides: true,
        },
        480: {
          slidesPerView: 1.2,
          centeredSlides: true,
        },
        600: {
          slidesPerView: 2,
          centeredSlides: false,
        },
        992: {
          slidesPerView: 3,
          centeredSlides: false,
        }
      }}
      >
        {data?.articles.map((data) => (
          <SwiperSlide key={data.id} data={data}>
            <SwiperArticle data={data}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default SwiperCarousel;
