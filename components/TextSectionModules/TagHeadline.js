

export default function TagHeadline({data}) {

    return (
        <>                
        <div className="textSection__tag">
            <p>{data.tag}</p>
        </div>

        <div className="textSection__cntr" key={data.id}>
            <div className="textSection__cntr__inner-cntr grid-cntr grid-1-2">                
                <div className="grid-1-2__col-1  headline-cntr">
                    <h2>{data.headline}</h2>
                </div>    
            </div>                   
        </div>                
        </>
    )
}
