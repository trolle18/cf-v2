import Image from 'next/image';
import SeeMoreCtaLink from './SeeMoreCtaLink';

export default function PurposeSection({ data }) {

    return (
        <>
            <section className="textSection theme-midnight-green">

                <div className="textSection__cntr " key={data.id}> 
                    <div className="textSection__cntr__inner-cntr grid-cntr  grid-1-2 top-bottom-spacer">
                        <div className="headline-cntr grid-1-2__col-1 headline-60w ">
                            <h2>{data.headline}</h2>
                        </div>    
                                    
                        <div className="txt-cntr grid-1-2__col-2-2">
                            <div key={data.id} className="inner-grid-cntr">
                                {data.textSec.map((data) => (
                                    <div key={data.id} className="inner-grid-column">
                                        {data.img.map((img) => (
                                            <div key={img.id} className="inner-grid-column__img-cntr">
                                                <Image src={img.src} alt={img.alt} height={600} width={600}/>
                                            </div>
                                        ))} 
                                        <h3 className="inner-grid-column__headline">
                                            {data.headline}
                                        </h3>
                                        <p className="inner-grid-column__text">
                                            {data.text}
                                        </p>
                                    </div>
                                ))} 
                            </div>
                        </div>     
                    </div>  

                   
                    <div className="seeMore-cntr">
                        <SeeMoreCtaLink data={data}/>
                    </div>           
                </div>       

                
            </section>
        </>
    )
}