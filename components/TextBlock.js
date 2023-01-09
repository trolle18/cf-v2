import { motion } from "framer-motion";
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
                <motion.div 
                className="img-cntr"
                initial={ {opacity: 0} }
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={ {duration: 0.2} }
                >
                    {data.img.map((img) => (
                        <div key={img.id} className="img-cntr__inner-cntr" style={ imgStyle }> </div>                
                    ))}
                </motion.div>
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
                                <motion.h2
                               initial={ {opacity: 0} }
                               whileInView={{ opacity: 1 }}
                               viewport={{ once: true }}
                               transition={ {duration: 0.2} }
                                >
                                    {data?.headline}
                                </motion.h2>
                            </div>   
                            <div className="textBlock__cntr__inner-cntr__col-1__text">
                                {data?.textSec.map((text) => (
                                    <motion.p 
                                    key={text.id}
                                    initial={ {opacity: 0} }
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={ {duration: 0.2} }
                                    >
                                        {text.text}
                                    </motion.p>
                                ))}
                            </div>                                                               
                        </div>

                        <div className="textBlock__cntr__inner-cntr__col-2">
                            {checkMedia(data)}
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