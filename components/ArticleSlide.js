import Image from "next/image";
import SeeMoreCtaLink from "./SeeMoreCtaLink";

export default function ArticleSlide ({ data }) {

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
    
    // Check article type
    function checkType(data) {
        const isType = data.category;

        if (isType.includes("news")) {
            return ( 
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
            )
        } 
        
        if (isType.includes("podcast")) {
            return (
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
            )
        } 
        
        if (isType.includes("video")) {
            return (
                <article className="swiper-article theme-plain" key={data.id}>
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
                </article>
            )
        } 
        
        else {
            return (
                <article className="swiper-article theme-plain" key={data.id}>
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
            )
        }
    }


    return (
        <>
            {checkType(data)}
        </>
    )
}
