import CtaBtn from './CtaBtn';
import FeatureArticle from './FeatureArticle';
import TagHeadlineSubheadline from './TextSectionModules/TagHeadlineSubheadline';
import VideoArticle from './VideoArticle';

export default function AboutPurposeSection({ data }) {

    return (
        <>
            <section className="textSection textSection-underlined theme-d-grey">
                <TagHeadlineSubheadline data={data}/>      

                
                <section className="video-section">
                    <div className="video-section-main">
                        <div className="video-section-main__feature-cntr">
                            <div className="video-section-main__feature-cntr__feature">
                                {data.articles
                                .filter((data) => data.styleTag.includes('feature'))
                                .map((data) => (
                                    <FeatureArticle key={data.id} data={data}/>
                                ))}
                            </div>  
                        </div>
                    </div>
                    
                    <div className="textSection__cntr"> 
                        <div className="txt-cntr grid-1-2__col-2-2">
                            <div key={data.id} className="inner-grid-cntr max-80w">

                                {data.textSec.map((data) => (
                                    <div key={data.id} className="inner-grid-column">
                                        <p className="inner-grid-column__text">
                                            {data.text}
                                        </p>
                                    </div>
                                ))} 
                            </div> 
                        </div>  
                    </div>
                            
                </section>           

            </section>
        </>
    )
}