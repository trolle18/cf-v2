
export default function SeeMoreCtaLink({ data }) {

    // Check for link text, else return null
    function checkLinkText(data) {
        const isText = data.text;
        if (isText) { 
            return (<p>{data.text}</p>) 
        }
        else { 
            return(null) 
        }
    }

    // Check for arrow, and arrow type, else return null
    function checkArrowType(data) {
        const isArrow = data.arrow;
        if (isArrow === "down right") { 
            return (
            <span className="arrow-down-right"></span>
            ) 
        }
        if (isArrow === "up right") { 
            return (
            <span className="arrow-top-right"></span>
            ) 
        }
        if (isArrow === "right") { 
            return (
            <span className="arrow-right"></span>
            ) 
        }        
        if (isArrow === "down left") { 
            return (
            <span className="arrow-down-left"></span>
            ) 
        }
        if (isArrow === "up left") { 
            return (
            <span className="arrow-up-left"></span>
            ) 
        }
        if (isArrow === "left") { 
            return (
            <span className="arrow-left"></span>
            ) 
        }             
        else { 
            return(
                <span className="arrow-top-right"></span>
            ) 
        }
    }

    // Check for url, else return null
    function checkUrl(data) {
        const isUrl = data.url;       

        if (isUrl) {
            return (<>{data.url}</>)
        } else {
            return (null)
        } 
    }

    // Check if showCta = y / n
    function setCta(data) {
        const isShow = data.showCta;
        if (isShow === "y") {
            return ( 
                <a className="seeMore-cntr__inner-cntr" key={data.id} href={checkUrl(data)}>
                    <div className="arrow-cntr">{checkArrowType(data)}</div>
                    {checkLinkText(data)}
                </a>
            )
        } else if (isShow !== "n") {
            return ( 
                <a className="seeMore-cntr__inner-cntr" key={data.id} href={checkUrl(data)}>
                    <div className="arrow-cntr">{checkArrowType(data)}</div>
                    {checkLinkText(data)}
                </a>
            )
        } 
        else {
            return (null)
        }
    }

    return (
        <>
        {data?.link.map((data) => (
           <>{setCta(data)}</>
        ))}
        </>
    )
}
