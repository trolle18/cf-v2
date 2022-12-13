
export default function SeeMoreCtaLink({ data }) {

    function checkLinkText(data) {
        const textExists = data.text;
        if (textExists) { 
            return (<p>{data.text}</p>) 
        }
        else { 
            return(null) 
        }
    }

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

    return (
        <>
        {data?.link.map((data) => (
            <a className="seeMore-cntr__inner-cntr" key={data.id} href={data?.url}>
                <div className="arrow-cntr">
                    {checkArrowType(data)}
                </div>
                {checkLinkText(data)}
            </a>
        ))}
        </>
    )
}