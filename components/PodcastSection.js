import TagHeadlineSubheadline from './TextSectionModules/TagHeadlineSubheadline';
import SwiperCarouselPodcasts from './SwiperCarouselPodcasts';
import SeeMoreCtaLink from './SeeMoreCtaLink';

export default function PodcastSection({ data }) {

    return (
        <>
        <section className="textSection theme-l-grey" >
                <TagHeadlineSubheadline data={data}/>      
        {/* </section>    */}
        
        {/* <section className="video-section theme-l-grey"> */}
            <SwiperCarouselPodcasts data={data}/>                        
        {/* </section>

        <section className="textSection theme-l-grey"> */}
            <div className="textSection__cntr"> 
                <div className="seeMore-cntr no-bordertopline">
                    <SeeMoreCtaLink data={data}/>
                </div> 
            </div>
        </section>
        </>
    )
} 