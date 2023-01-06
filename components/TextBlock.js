import Image from "next/image";
import CtaBtn from './CtaBtn';

export default function TextBlock({ data }) {

    // Check hero media
    function checkMedia(data) {
        const isImg = data.img;

        if (isImg) { 
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
                <div className="img-cntr">
                    {data.img.map((img) => (
                        <div key={img.id} className="img-cntr__inner-cntr" style={ imgStyle }> </div>                
                    ))}
                </div>
                </>
            )
        } else { 
            return (null) 
        }
    }    

    return (
        <>
            <section className="textBlock" key={data.id}>
                <div  className="textBlock__cntr">
                    <div className="textBlock__cntr__inner-cntr"> 

                        <div className="textBlock__cntr__inner-cntr__col-1">
                            <div className="textBlock__cntr__inner-cntr__col-1__headline">
                                <h2>{data?.headline}</h2>
                            </div>   
                            <div className="textBlock__cntr__inner-cntr__col-1__text">
                                {data?.textSec.map((text) => (
                                    <p key={text.id}>
                                        {text.text}
                                    </p>
                                ))}
                            </div>                                                               
                        </div>

                        <div className="textBlock__cntr__inner-cntr__col-2">
                            {/* <div className="img-cntr"> */}
                            {checkMedia(data)}
                                {/* <div className="img-cntr__inner-cntr">
                                    {data?.img.map((img) => (
                                        <Image key={img.id} src={img.src} alt={img.alt} width={600} height={600} />
                                    ))}                              
                                </div> */}
                            {/* </div>                            */}
                        </div>

                        <div className="textBlock__cntr__inner-cntr__col-3">
                            <div className="cta-btn-cntr ylw-cta arrow-top-r">
                                {data?.link.map((link) => (
                                    <CtaBtn key={link.id} link={link}/>                          
                                ))}
                            </div>
                        </div>                          

                    </div>   
                </div>         
            </section>        
        </>
    )
}