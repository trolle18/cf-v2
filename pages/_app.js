import Footer from '../components/Footer'
import PageHead from "../components/PageHead";
import '../scss/Main.scss'

function MyApp({ Component, pageProps }) {

  return ( 
    <>
     <PageHead/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
