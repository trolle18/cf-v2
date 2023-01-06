import Image from "next/image";
import TagHeadlineSubheadline from './TextSectionModules/TagHeadlineSubheadline';
import SeeMoreCtaLink from './SeeMoreCtaLink';

export default function BlockGridSection({ data }) {

  return (
    <>
    <section className="textSection theme-l-grey" key={data.id}>
      <TagHeadlineSubheadline data={data}/>    

      <div className="textSection__cntr">

        <div className="textSection__cntr__inner-cntr flex-textblock-cntr"> 
        
          <div className="flex-textblock-cntr__col flex-textblock-cntr__col-1">              
            {data.articles
            .filter((data) => data.styleTag.includes('regular'))
            .map((data) => (
              <div className="flex-textblock-cntr__col__block" key={data.id}>
                <div className="flex-textblock-cntr__col__block__text">

                  <p className="flex-textblock-cntr__col__block__text__headline">
                    {data.headline}
                  </p>

                  <div className="flex-textblock-cntr__col__block__text__btm">
                    <p>{data.text}</p> 
                    <div className="seeMore-cntr seeMore-cntr-trimspace ">
                      <SeeMoreCtaLink data={data}/>
                    </div>
                  </div>

                </div>                     
              </div> 
            ))}
          </div> 

          <div className="flex-textblock-cntr__col flex-textblock-cntr__col-2">  
            {data.articles
            .filter((data) => data.styleTag.includes('feature'))
            .map((data) => (
              <div className="flex-textblock-cntr__col__block" key={data.id}>

               <div className="flex-textblock-cntr__col__block__img-cntr">
                  {data.img.map((img) => (
                    <Image key={img.id} src={img.src} alt={img.alt} height={600} width={600}/>
                  ))}
                </div>

                <div className="flex-textblock-cntr__col__block__text">
                  <p className="flex-textblock-cntr__col__block__text__headline">
                    {data.headline}
                  </p>

                  <div className="flex-textblock-cntr__col__block__text__btm">
                    <p>{data.text}</p> 

                    <div className="seeMore-cntr seeMore-cntr-trimspace">
                      <SeeMoreCtaLink data={data}/>
                    </div>           
                  </div>

                </div>                                                               
              </div> 
            ))}
          </div>
         
        </div>   

      </div>         
    </section>        
    </>
  )
}