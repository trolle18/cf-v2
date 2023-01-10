// import Image from "next/image";

export default function VideoArticle ( {data} ) {

    // function getMedia(data) {
    //     if (data.video.alt === "video") {
    //         return (
    //             <div className="article-img__video-cntr">
    //                 {data.video?.map((video) => (
    //                     <video
    //                     key={video.id}
    //                     // autoPlay
    //                     muted
    //                     controls={true}
    //                     // loop
    //                     >
    //                         <source src={video.src}/>
    //                     </video>
    //                 ))}                        
    //             </div>
                
    //         )
    //     }
    //       if (data.video.alt != "video") {
    //         return (
    //             <div className="article-img__img-cntr">
    //                 {data.img.map((img) => (
    //                     <Image key={img.id} src={img.src} alt={img.alt} height={1000} width={1000} />
    //                 ))}
    //             </div>
    //         )
    //     }
    // }
    


    return (
        <>
            <article className="video-article" key={data.id}>
                <div className="article-img">
                    {/* {getMedia(data)} */}
                    <div className="article-img__video-cntr">
                        {data.video?.map((video) => (
                            <video
                            key={video.id}
                            muted
                            controls={true}
                            >
                                <source src={video.src}/>
                            </video>
                        ))}                        
                    </div>
                    
                </div>
                <div className="article-cnt">
                    <div className="article-cnt__txt">
                    <span className="article-cnt__txt__tag article-cnt__txt__details">{data.tag}</span>
                        <span className="article-cnt__txt__time article-cnt__txt__details">{data.time}</span>
                        <h3 className="article-cnt__txt__headline">{data.headline}</h3>
                        <p className="article-cnt__txt__text">{data.text}</p>
                    </div>
                </div>
            </article>
        </>
    )
}