import SeeMoreCtaLink from './SeeMoreCtaLink';
import SwiperCarousel from './SwiperCarousel';
import TagHeadlineSubheadline from './TextSectionModules/TagHeadlineSubheadline';

export default function TextCarouselSection({ data }) {

    return (
        <>
                <section className="textSection theme-l-orange" key={data.id}>
                    <TagHeadlineSubheadline data={data}/>
                    
                    <div className="swiper-cntr swiper-news-cntr">
                        <SwiperCarousel data={data}/>
                    </div>

                    <div className="textSection__cntr"> 
                        <div className="seeMore-cntr">
                            <SeeMoreCtaLink data={data}/>
                        </div> 
                    </div>
                </section>        
        </>
    )
}