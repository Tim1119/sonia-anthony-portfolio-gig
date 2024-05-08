"use client"
import portfolioData from "../../../utils/dummy/portfolioData"
import PortfolioCard from '../cards/PortfolioCard'
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect,useState } from 'react';
import client from '../../../../client'
import CircleLoader from "../loader/CircleLoader";
import { toast } from 'react-toastify'
import Error from "../error/Error";


const Portfolio = () => {

  const [userPortfolios, setUserPortfolios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: userPortfolios?.length > 3 ? 3 : userPortfolios.length,
    slidesToScroll: userPortfolios?.length > 3 ? 3 : userPortfolios.length,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init()
  }, [])

  

  const getPortfolio = async () => {
    try {
      const portfolioData = await client.fetch('*[_type == "portfolio"]');
      setUserPortfolios(portfolioData); 
    } catch (error) {
      console.error('Error fetching portfolio:', error);
      setIsError(true)
      toast.error("An error occurred while fetching portfolio. Please try again later.", {
        position: "top-right",
        autoClose: 5000, // Close after 5 second
      });
      
    } finally {
      setIsLoading(false); 
    }
  };


  useEffect(()=>{
    getPortfolio()
  },[])

  
  return (
    
    <div className="w-full my-6 py-5  font-serif grid place-items-center " >
    <div className='containerize  overflow-x-hidden mx-auto' >
        <h3 className='section-header' >Portfolio</h3>
        <div>
          {isError && <Error message="An error occured when fetching portfolio" />}
        </div>
        {isLoading ? ( <CircleLoader />) :
      (
        <Slider {...settings}  className="grid place-items-center l py-3 mt-4 mb-10">   
            {userPortfolios.map((portfolio:any, index:number) => (
              <PortfolioCard  key={index} index={index} title={portfolio.title} about={portfolio.about[0].children[0].text} image={portfolio.mainImage} />
        ))}
      </Slider>
         

      )}
    </div>
</div>
  )
}

export default Portfolio