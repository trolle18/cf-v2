

export default function FeatureArticle ( {data} ) {



    return (
        <>
            <article className="feature-article" key={data.id}>
                <div className="feature-img">
                    <div className="feature-img__video-cntr">
                    {data.video?.map((video) => (
                        <video
                        key={video.id}
                        >
                            <source src={video.src}/>
                        </video>
                    ))}                        
                </div>
                    
                </div>
                <div className="feature-cnt">
                    <div className="feature-cnt__txt">
                        <span className="feature-cnt__txt__tag">{data.tag}</span>
                        <h3 className="feature-cnt__txt__headline">{data.headline}</h3>
                        <span className="feature-cnt__txt__quote"></span>
                        <p className="feature-cnt__txt__text">{data.text}</p>
                    </div>
                </div>
            </article>
        </>
    )
}