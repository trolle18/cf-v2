import Image from "next/image";
import { motion } from "framer-motion";


export default function SwiperVideoArticle ({ data }) {

  function getMedia(data) {
    if (data?.video.alt?.includes === "video") {
      return (
        <div className="swiper-article__img-cntr">
          {data.img.map((img) => (
            <Image key={img.id} src={img.src} alt={img.alt} height={600} width={600} />
          ))}
        </div>
      )
    } else {
      return (
        <div className="swiper-article__video-cntr">
          {data.video.map((video) => (
            <video key={video.id} >
              <source src={video.src}/>
            </video>
          ))}
        </div>
      )
    }
  }

  return (
    <>
      <motion.article 
      className="swiper-article theme-plain" 
      key={data.id}
      initial={ {opacity: 0} }
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={ {duration: 0.2} }
      >
        {getMedia(data)}

        <div className="swiper-article-cont">
          <div className="swiper-article-cont__txt">
            <div className="swiper-article-cont__txt__details">
              <span className="show-details">{data?.tag}</span>
              <span className="show-details">{data?.episodes}</span>
              <span>{data?.createdDate}</span>
            </div>

            <p className="swiper-article-cont__txt__headline">{data.headline}</p>
          </div>
        </div>
      </motion.article>
    </>
  )
}
