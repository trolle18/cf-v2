import { motion } from "framer-motion";


export default function TagHeadline({data}) {

    return (
        <>                
        <div className="textSection__tag">
        <motion.p
            initial={ {opacity: 0} }
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={ {duration: 0.2} }
            >
                {data.tag}
            </motion.p>
        </div>

        <div className="textSection__cntr" key={data.id}>
            <div className="textSection__cntr__inner-cntr grid-cntr grid-1-2">                
                <div className="grid-1-2__col-1  headline-cntr">
                    <motion.h2
                    initial={ {opacity: 0} }
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={ {duration: 0.2} }
                    >
                        {data.headline}
                    </motion.h2>
                </div>    
            </div>                   
        </div>                
        </>
    )
}
