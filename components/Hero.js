// import Image from 'next/image';
import Image from 'next/image';
import CtaBtn from './CtaBtn';

export default function Hero({ data }) {

    function checkMedia(data) {
        const isVideo = data.video;
        if (isVideo) { 
            return (
                <div className="hero-cntr__video-cntr">
                {data.video.map((video) => (
                    <video
                    key={video.id}
                    autoPlay
                    muted
                    // loop
                    >
                        <source src={video.src}/>
                    </video>
                ))}
                <div className='hero-overlay'></div>
            </div>
            ) 
        }
        else { 
            return (
                <div className="hero-cntr__img-cntr">
                    {data.img.map((img) => (
                        <Image key={img.id} src={img.src} alt={img.alt} height={1000} width={1000} />
                
                    ))}
                </div>
            ) 
        }
    }


    return (
        <>
        {/* <section className="hero-wrapper" key={data.id} > */}
            <div className="hero" key={data.id}>
                
                <div className="hero-cntr">                    
                    {/* <div className="hero-cntr__img-cntr">
                        {data.img.map((img) => (
                            <Image key={img.id} src={img.src} alt={img.alt} height={1000} width={1000} />
                   
                        ))}
                    </div> */}

                    <div className="hero-cntr__video-cntr">
                        {data.video.map((video) => (
                            <video
                            key={video.id}
                            autoPlay
                            muted
                            // loop
                            >
                                <source src={video.src}/>
                            </video>
                        ))}
                        <div className='hero-overlay'></div>
                    </div>
                    {/* {checkMedia(data)} */}


                    <div className="hero-cntr__txt-cntr">
                        <div className="hero-cntr__txt-cntr__headline">
                            <h1>{data.headline}</h1>
                        </div>
                        <div className="hero-cntr__txt-cntr__btm">
                            <div className="hero-cntr__txt-cntr__btm__text">
                                <p>{data.text}</p>
                            </div>

                            <div className="hero-cntr__txt-cntr__btm__cta" href={data.ctaUrl}>
                            
                                <div className="cta-inner-cntr">
                                    <div className="cta-btn-cntr plain-light-cta arrow-top-r">
                                        {data?.link.map((link) => (
                                            <CtaBtn key={link.id} link={link}/>                          
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>

                </div>            
                
            </div>
        {/* </section> */}
        </>
    )
}