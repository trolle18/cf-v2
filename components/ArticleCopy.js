import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import SeeMoreCtaLink from "./SeeMoreCtaLink";

export default function ArticleTest ( {data} ) {
    const router = useRouter()
    const id = router.query.id

    // Check type -> set styletag
    function getMediaType(data) {
        const type = data.type;

        if (type === "article") {
            return (
                <div className="article-img__img-cntr">
                    {data?.img?.map((img) => (
                        <Image key={img?.id} src={img?.src} alt={img?.alt} height={600} width={600} />
                    ))}
                </div>
            ) 
        } 
        if (type === "video") {
            return (
                <div className="article-img__img-cntr">
                    {data.video?.map((video) => (
                        <video
                        key={video.id}
                        muted
                        controls={false}
                        >
                            <source src={video.src}/>
                        </video>
                    ))}                        
                </div>
            ) 
        } 
    }

    return (
        <>
        <Link href={`/artikler/${id}`} data={data}>
            <motion.article 
            key={data?.id}
            className="article" 
            initial={ {opacity: 0} }
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={ {duration: 0.4} }
            >
                <div className="article-img">
                    {/* {getMediaType(data)} */}
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
            </Link>
        </>
    )
}