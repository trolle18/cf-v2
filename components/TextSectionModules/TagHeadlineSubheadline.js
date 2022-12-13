
export default function TagHeadlineSubheadline({data}) {

    return (
        <>        
        <div className="textSection__tag">
            <p>{data.tag}</p>
        </div>
        
        <div className="textSection__cntr" key={data.id}> 
            <div className="textSection__cntr__inner-cntr grid-cntr  grid-1-2">
                <div className="headline-cntr grid-1-2__col-1 headline-80w ">
                    <h2>{data.headline}</h2>
                </div>    
                            
                <div className="txt-cntr grid-1-2__col-2">
                    <div className="txt-cntr__inner-cntr">                            
                        <div className="subheader">
                            <p>
                                {data.subheadline}
                            </p>                                
                        </div>
                    </div>                                                               
                </div>     
            </div>                   
        </div>       
        </>
    )
}
