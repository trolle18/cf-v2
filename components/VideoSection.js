import VideoArticle from './VideoArticle';
import TagHeadlineSubheadline from './TextSectionModules/TagHeadlineSubheadline';
import SwiperCarouselVideos from './SwiperCarouselVideos';
import SeeMoreCtaLink from './SeeMoreCtaLink';

export default function VideoSection({ data }) {

  return (
    <>
      <section className="textSection theme-l-grey">
        <TagHeadlineSubheadline data={data}/>      
      </section>   

      <section className="video-section theme-l-grey">
      
        <div className="video-section-main">
          <div className="video-section-main__feature-cntr">
            <div className="video-section-main__feature-cntr__feature">
              {data.articles
              .filter((data) => data.styleTag.includes('feature'))
              .map((data) => (
                <VideoArticle key={data.id} data={data}/>
              ))}
            </div>  
            <div className="video-section-main__feature-cntr__regular">
            </div>   
          </div>
        </div>
                                    
        <section className="textSection theme-d-grey">
          <SwiperCarouselVideos key={data.id} data={data} />
          <div className="textSection__cntr"> 
            <div className="seeMore-cntr">
              <SeeMoreCtaLink data={data}/>
            </div> 
          </div>     
        </section>

    </section>
    </>
  )
}