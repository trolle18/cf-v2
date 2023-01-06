import SeeMoreCtaLink from './SeeMoreCtaLink';


export default function Hero({ data }) {

    // Check hero media
    function checkMedia(data) {
        const isVideo = data.video;
        const isImg = data.img;

        if (isVideo) { 
            return (
                <div className="hero-cntr__video-cntr">
                    {data.video.map((video) => (
                        <video key={video.id}
                        // autoPlay
                        muted
                        >
                            <source src={video.src}/>
                        </video>
                    ))}
                    <div className="hero-overlay"></div>
                </div>
            ) 
        } else if (isImg) { 
            const imgSrc = ( data.img.map((img) => (img.src)) )
            const imgStyle = {
                height: "100%",
                width: "100%",
                backgroundImage: `url( ${imgSrc} )`,
                backgroundPosition: "center",
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
        } else { 
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

    // Check theme -> set styletag
    function getTheme(data) {
        const theme = data.theme;

        if (theme) {
            return(theme)
        }
    }
    // Check type -> set styletag
    function getType(data) {
        const type = data.type;

        if (type === "frontpage") {
            return ("") 
        } else {
            return ( "subpagehero-wrapper" )
        }
    }


    // Get hero type 
    function getHeroType(data) {
        const isType = data.type;

        if (isType === "frontpage") { // If hero type is "frontpage"
            return (
                <>
                <div className="hero-cntr">
                    {checkMedia(data)}
                    <div className="hero-cntr__txt-cntr">
                        <div className="hero-cntr__txt-cntr__headline">
                            <h1>{data.headline}</h1>
                        </div>

                        <div className="hero-cntr__txt-cntr__btm">
                            <div className="hero-cntr__txt-cntr__btm__text">
                                <p>{data.text}</p>
                            </div>

                            <div className="hero-cntr__txt-cntr__btm__cta">
                                <div className="seeMore-cntr theme-cta-white seeMore-cntr-trimspace-center" >
                                    <SeeMoreCtaLink data={data} />
                                </div>
                            </div>
                        </div>   

                    </div>
                </div>
                </>
            ) 

        } else { 
            return (
                <>
                <div className="hero-cntr color-hero">
                    {checkMedia(data)}
                    <div className="hero-cntr__txt-cntr subpage-hero-text">
                        <div className="hero-cntr__txt-cntr__headline">
                            <h1>{data.headline}</h1>
                        </div>
                    </div>
                </div>
                </>
            )
        }
    }


    return (
        <>
        <section className={`hero-wrapper ${getTheme(data)} ${getType(data)}`} >
            <div className="hero" >
                {getHeroType(data)}
            </div>
        </section>
        </>
    )
}
