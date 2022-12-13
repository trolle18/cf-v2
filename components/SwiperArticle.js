import Image from "next/image";

export default function SwiperArticle ( {data} ) {

    return (
        <>
            <article className="swiper-article swiper-news-article theme-plain" key={data.id}>

                <div className="swiper-article__img-cntr">
                    {data.img.map((img) => (
                        <Image key={img.id} src={img.src} alt={img.alt} height={600} width={600} />
                    ))}                   
                </div>

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

            </article>
        </>
    )
}