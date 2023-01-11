import Link from "next/link";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";


export default function Error() {

  return (
    <>
      <section className="hero-wrapper theme-midnight-green" style={{backgroundColor: "#000"}}>
        <div className="hero" >
          <div className="hero-cntr color-hero" style={{backgroundColor: "#000"}}>
            <div className="hero-cntr__txt-cntr ">
              <div className="hero-cntr__txt-cntr error-text">
                <div>
                  <h1>Hov ... </h1>
                  <p>Siden kunne desværre ikke findes</p>
                </div>
                
                <Link href='/' >
                  {/* <AiOutlineArrowLeft/> */}
                  Tilbage til forsiden
                  <div>
                    <AiOutlineArrowRight/>
                  </div>
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
