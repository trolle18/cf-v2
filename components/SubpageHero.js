import Image from 'next/image';
import CtaBtn from './CtaBtn';

export default function SubpageHero({ data }) {

    
    function checkMedia(data) {
        const isVideo = data.video;
        const isImg = data.img;
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
        if (isImg) { 
            return (
                <div className="hero-cntr__img-cntr">
                    {data.img.map((img) => (
                        <Image key={img.id} src={img.src} alt={img.alt} height={2000} width={2000} />
                
                    ))}
                </div>
            ) 
        }
        else { 
            return (
                <div className="hero-cntr__img-cntr color-hero"></div>
            ) 
        }
    }

    return (
        <>
            <div className="hero" key={data.id}>
                
                <div className="hero-cntr color-hero">         
                {checkMedia(data)}           

                    <div className="hero-cntr__txt-cntr subpage-hero-text">
                        <div className="hero-cntr__txt-cntr__headline">
                            <h1>{data.headline}</h1>
                        </div>
                    </div>

                </div>            
                
            </div>
        {/* </section> */}
        </>
    )
}