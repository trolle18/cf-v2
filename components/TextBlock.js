import Image from "next/image";
import CtaBtn from './CtaBtn';

export default function TextBlock({ data }) {

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
                            <div className="img-cntr">
                                <div className="img-cntr__inner-cntr">
                                    {data?.img.map((img) => (
                                        <Image key={img.id} src={img.src} alt={img.alt} width={600} height={600} />
                                    ))}                              
                                </div>
                            </div>                           
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