import Image from "next/image";
import SeeMoreCtaLink from "./SeeMoreCtaLink";
import { motion } from "framer-motion";

export default function Article ( {data} ) {

    return (
        <>
            <motion.article 
            className="article" 
            key={data?.id}
            initial={ {opacity: 0} }
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={ {duration: 0.2} }
            >
                <div className="article-img">
                    <div className="article-img__img-cntr">
                        {data?.img?.map((img) => (
                            <Image key={img?.id} src={img?.src} alt={img?.alt} height={600} width={600} />
                        ))}
                    </div>
                </div>

                <div className="article-cnt">
                    <div className="article-cnt__txt">
                        <span className="article-cnt__txt__details">{data?.subheadline}</span>
                        <p className="article-cnt__txt__headline">{data?.headline}</p>
                        <p className="article-cnt__txt__text">{data?.text}</p>
                    </div>

                    <div className="article-cnt__btm">
                        <div className="seeMore-cntr seeMore-cntr-trimspace">
                            <SeeMoreCtaLink data={data}/>
                        </div>
                    </div>
                </div>

            </motion.article>
        </>
    )
}