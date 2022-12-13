import SeeMoreCtaLink from "../SeeMoreCtaLink";

export default function TextColsRight({ data }) {

    return (
        <>                
        <div className="textSection__cntr" key={data.id}> 
            <div className="textSection__cntr__inner-cntr grid-cntr  grid-1-2">
                <div className="headline-cntr grid-1-2__col-1 headline-80w ">
                </div>    
                            
                <div className="txt-cntr grid-1-2__col-2">
                    <div className="txt-cntr__inner-cntr">                            
                        {data.textSec.map((data) => (
                            <div key={data.id} className="">
                                <p className="">
                                    {data.text}
                                </p>
                            </div>
                        ))} 

                        <div className="textSection__cntr"> 
                            <div className="seeMore-cntr">
                                <SeeMoreCtaLink data={data}/>
                            </div> 
                        </div>    
                        
                    </div>                                                               
                </div>     
            </div>                   
        </div>       
        </>
    )
}
