import Services from '../components/services/Services' 
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'


const ServicesPage = () => {
 
  return (
    <>
    
    <Navbar />
    <div className='mt-[70px]' >
      <Services />
    </div>
    <Footer />  
    </>
  )
}

export default ServicesPage