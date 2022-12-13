import Image from "next/image";

export default function Article ( {data} ) {

    return (
        <>
            <article className="article" key={data.id}>
                <div className="article__img-cntr">
                {data.img.map((img) => (
                    <Image key={img.id} src={img.src} alt={img.alt} height={100} width={100} />
                ))}
                </div>
                <div className="article-cntn">
                    <div className="article-cntn__txt">
                        {/* <div className="txt-top"> */}
                            {/* <span>{data.category}</span> */}
                            <span className="article-cntn__txt__details">{data.createdDate}</span>
                        {/* </div> */}

                        <p className="article-cntn__txt__headline">{data.title}</p>
                        {/* <span>{data.tag}</span>
                        <p>{data.desc}</p> */}
                    </div>

                    {/* <div className="article-cntn__btm">
                        {data.link.map((link) => (
                            <a className="btm-link" key={link.id}>
                                {link.txt}
                            </a>
                        ))}
                    </div> */}
                </div>
                
               

            </article>
        </>
    )
}