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
                <div className="hero-overlay"></div>
            </div>
            ) 
        }
        if (isImg) { 
            const imgSrc = ( data.img.map((img) => (img.src)) )
            const imgPos = ( data.img.map((img) => (img.pos)) )

            const imgStyle = {
                height: "100%",
                width: "100%",
                backgroundImage: `url( ${imgSrc} )`,
                backgroundPosition: `${imgPos}`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }

            return (
                <>
                <div className="hero-cntr__img-cntr">
                    {data.img.map((img) => (
                        <div key={img.id} className="hero-cntr__img-cntr__img" style={ imgStyle }> </div>                
                    ))}
                </div>
                </>
            )
        }
        else { 
            return (
                <div className="hero-cntr__img-cntr color-hero">
                    <div className="hero-cntr__txt-cntr subpage-hero-text">
                        <div className="hero-cntr__txt-cntr__headline">
                            <h1>{data.headline}</h1>
                        </div>
                    </div>
                </div>
            ) 
        }
    }
// console.log(data)
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
        </>
    )
}