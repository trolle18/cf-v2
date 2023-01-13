import TagHeadlineSubheadline from './TextSectionModules/TagHeadlineSubheadline';
import SwiperCarouselPodcasts from './Swiper/SwiperCarouselPodcasts';
import SeeMoreCtaLink from './SeeMoreCtaLink';

export default function PodcastSection({ data }) {

    return (
        <>
        <section className="textSection theme-l-grey" >
            <TagHeadlineSubheadline data={data}/>      
            <SwiperCarouselPodcasts data={data}/>                        

            <div className="textSection__cntr"> 
                <div className="seeMore-cntr no-bordertopline">
                    <SeeMoreCtaLink data={data}/>
                </div> 
            </div>
        </section>
        </>
    )
} 