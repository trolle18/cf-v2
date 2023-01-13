import { motion } from "framer-motion";

export default function VideoArticle ( {data} ) {

  return (
    <>
      <motion.article 
      className="video-article" 
      key={data.id}
      initial={ {opacity: 0} }
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={ {duration: 0.2} }
      >
        <div className="article-img">
          <div className="article-img__video-cntr">
            {data.video?.map((video) => (
              <video
              key={video.id}
              muted
              controls={true}
              >
                <source src={video.src}/>
              </video>
            ))}                        
          </div>            
        </div>
        
        <div className="article-cnt">
          <div className="article-cnt__txt">
            <span className="article-cnt__txt__tag article-cnt__txt__details">{data.tag}</span>
            <span className="article-cnt__txt__time article-cnt__txt__details">{data.time}</span>
            <h3 className="article-cnt__txt__headline">{data.headline}</h3>
            <p className="article-cnt__txt__text">{data.text}</p>
          </div>
        </div>
      </motion.article>
    </>
  )
}