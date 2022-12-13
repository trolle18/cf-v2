import Image from "next/image";

export default function PodcastArticle ( {data} ) {

    return (
        <>
            <article className="video-article" key={data.id}>
                <div className="article-img">
                    <div className="article-img__img-cntr">
                        {data.img.map((img) => (
                            <Image key={img.id} src={img.src} alt={img.alt} height={100} width={100} />
                        ))}
                    </div> 
                </div>

                <div className="article-cnt">
                    <div className="article-cnt__txt show-details">
                    <span className="article-cnt__txt__tag show-details article-cnt__txt__details">{data.tag} </span>
                        {/* <span className="article-cnt__txt__time article-cnt__txt__details">{data.time}</span> */}
                        <h3 className="article-cnt__txt__headline">{data.headline}</h3>
                        <p className="article-cnt__txt__text">{data.text}</p>
                    </div>
                </div>
            </article>
        </>
    )
}