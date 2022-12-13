import Image from 'next/image';
import CtaLink from './CtaLink';
import SeeMoreCtaLink from './SeeMoreCtaLink';
import TagHeadlineSubheadline from './TextSectionModules/TagHeadlineSubheadline';
// import SeeMoreCtaLink from './SeeMoreCtaLink';

export default function TextFondetsMidler({ data }) {

    return (
        <>
        <section className="textSection  theme-midnight-green">
            <TagHeadlineSubheadline data={data}/>   <br/><br/>

            <div className="textSection__cntr" key={data.id}> 
                <div className="textSection__cntr__inner-cntr grid-cntr grid-rows">
                         
                    {data.articles.map((data) => (
                        <div key={data.id} className="grid-rows__row-cntr">

                            <div className="grid-rows__row-cntr__inner-cntr">
                                <div className="grid-rows__row-cntr__inner-cntr__col">
                                    <p className="grid-rows__row-cntr__inner-cntr__col__text">
                                        {data.headline}
                                    </p>
                                </div>
                            </div>

                            <div className="grid-rows__row-cntr__inner-cntr">
                                <div className="grid-rows__row-cntr__inner-cntr__col col-1">
                                    <h3 className="grid-rows__row-cntr__inner-cntr__col__number">
                                        {data.number}
                                    </h3>
                                    <p className="grid-rows__row-cntr__inner-cntr__col__text">
                                        {data.text}
                                    </p>
                                </div>
                                

                                <div className="grid-rows__row-cntr__inner-cntr__col col-2">                               
                                    <div className="grid-rows__row-cntr__inner-cntr__col__img">
                                        {data.img.map((img) => (
                                            <Image key={img.id} src={img.src} alt={img.alt} height={200} width={200} />
                                        ))} 
                                    </div>
                                    <div className="grid-rows__row-cntr__inner-cntr__col__link">
                                        {data.link.map((data) => (
                                            <div className="seeMore-cntr__inner-cntr" key={data.id}>  
                                                <div className="arrow-cntr">
                                                    <span className="arrow-down-right"></span>
                                                </div>                                        
                                                <p>{data.text}</p>                                            
                                            </div>  
                                        ))}
                                    </div>

                                </div>

                            </div>
                        </div>
                    ))} 


                </div>                   
            </div>       

        </section>
        </>
    )
}