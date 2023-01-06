import SwiperArticle from "./SwiperArticle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ArticleSlide from "./ArticleSlide";

const SwiperSlidesCarousel = ({data}) => {

    function getCategory(data) {
        var isCategory = data.category;

        if (isCategory = "news") {
            return ("news")
        }
        if (isCategory = "videos") {
            return ("video")
        }
        if (isCategory = "podcasts") {
            return ("podcast")
        }
        if (isCategory = "podcasts") {
            return ("podcast")
        }
        if (isCategory = "events") {
            return ("event")
        }
        else {
            return ("news video podcast event")
        }
    }


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
                {data?.articleCollection
                .filter((data) => data.category.toLowerCase().includes(getCategory(data)))
                .map((data) => (
                    <SwiperSlide key={data.id} data={data}>
                        <ArticleSlide data={data}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
} 

export default SwiperSlidesCarousel;
