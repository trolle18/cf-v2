import Image from "next/image";
import CtaLink from './CtaLink';

export default function MasonArticle({article}) {

    return (
        <>
        <article key={article.id} className="mason-article">                                
            <div className="mason-article__img-cntr">
                {article?.img.map((img) => (
                    <Image key={img.id} src={img.src} alt={img.alt} width={100} height={100} />
                ))}                              
            </div>

            <div className="mason-article__txt-cntr">
                <div className='mason-article__txt-cntr__cont'>
                    <p className="mason-article__txt-cntr__cont__tag">{article.tag}</p>
                    <p className="mason-article__txt-cntr__cont__headline">{article.headline}</p>
                    {article?.link.map((data) => (
                        <div key={data.id} className="arrow-right">
                            <CtaLink key={data.id} data={data}/>
                        </div>
                    ))} 
                </div>    
                
                <div className="mason-article__txt-cntr__vertical-right">
                    <div className="mason-article__txt-cntr__vertical-right__inner-cntr">
                        <p>{article.dayMonth}</p><span></span><p>{article.year}</p>
                    </div>
                </div>
            </div>
        </article> 
        </>
    )
}
