import SwiperArticle from "./SwiperArticle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SwiperVideoArticle from "./SwiperVideoArticle";


const SwiperCarouselVideos = ({ data }) => {

    return (
        <>
        <div className="swiper-cntr">        
            <Swiper
            spaceBetween={ 20 }
            slidesPerView={ 4 }
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
                640: {
                    slidesPerView: 3,
                    centeredSlides: false,
                },
                992: {
                    slidesPerView: 4,
                    centeredSlides: false,
                }
            }}
            >
                {data.articles
                .filter((data) => data.styleTag.includes('regular'))
                .map((data) => (
                    <SwiperSlide key={data.id}>
                        <SwiperVideoArticle data={data}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </>
    )
} 

export default SwiperCarouselVideos;
