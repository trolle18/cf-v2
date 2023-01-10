import Image from "next/image";
import SeeMoreCtaLink from "../SeeMoreCtaLink";


export default function SwiperArticlePodcast ({ data }) {

  return (
    <>
      <article className="swiper-article podcast-article" key={data.id}>
        <div className="img-cntr">
          {data.img.map((img) => (
            <Image key={img.id} src={img.src} alt={img.alt} height={600} width={600} />
          ))}
          <div className="podcast-icon"></div>
        </div>

        <div className="swiper-article-cont">
          <div className="swiper-article-cont__txt">
            <div className="article-details">
              <span className="show-details theme-light-green">{data?.tag}</span>
              <span className="show-details">{data?.episodes}</span>
              <span>{data?.createdDate}</span>
            </div>
            <p className="swiper-article-cont__txt__headline">{data.headline}</p>
          </div>
          <div className="seeMore-cntr">
            <SeeMoreCtaLink data={data}/>
          </div>
        </div>
      </article>
    </>
  )
}