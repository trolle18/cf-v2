import { motion } from "framer-motion";
import SeeMoreCtaLink from './SeeMoreCtaLink';
import SwiperCarousel from './Swiper/SwiperCarousel';
import TagHeadlineSubheadline from './TextSectionModules/TagHeadlineSubheadline';

export default function TextCarouselSection({ data }) {

    return (
        <>
            <section className="textSection theme-l-orange" key={data.id}>
                <TagHeadlineSubheadline data={data}/>
                <motion.div 
                className="swiper-cntr swiper-news-cntr"
                initial={ {opacity: 0} }
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={ {duration: 0.2} }
                >
                    <SwiperCarousel data={data}/>
                </motion.div>

                <div className="textSection__cntr"> 
                    <div className="seeMore-cntr">
                        <SeeMoreCtaLink data={data}/>
                    </div> 
                </div>
            </section>        
        </>
    )
}