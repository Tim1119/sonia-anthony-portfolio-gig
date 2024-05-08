"use client"
import TestimonialCard from '../cards/TestimonialCard'
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect,useState } from 'react';
import client from '../../../../client'
import CircleLoader from '../loader/CircleLoader';
import { toast } from 'react-toastify'
import Error from "../error/Error";

const Testimonials = () => {
    const [userTestimonials, setUserTestimonials] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: userTestimonials?.length > 3 ? 3 : userTestimonials.length,
        slidesToScroll: userTestimonials?.length > 3 ? 3 : userTestimonials.length,
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

      
    
      const getTestimonials = async () => {
        try {
          const testimonialData = await client.fetch('*[_type == "testimonial"]');
          console.log('testimonial---------->', testimonialData);
          setUserTestimonials(testimonialData); 
        } catch (error) {
          console.error('Error fetching testimonial:', error);
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
        getTestimonials()
      },[])
    
     
    
    
  return (
    <div className="w-full my-6 py-5 font-serif grid place-items-center">
    <div className="containerize overflow-x-hidden mx-auto ">
      <h3 className="section-header ">Testimonials</h3>
      <div>
          {isError && <Error message="An error occured when fetching testimonial" />}
        </div>
      {isLoading ? ( <CircleLoader />) :
      (

      <Slider {...settings}  className="grid place-items-center l py-3 mb-10">
       {userTestimonials?.map((testimony:any, index) => (
          <TestimonialCard
            key={index}
            name={testimony.clientName}
            image={testimony.profilePictureofClient}
            position={testimony.clientPosition}
            testimony={testimony.testimony}
          />
        ))}
      </Slider>
      )}
    </div>
  </div>
  
    
  )
}

export default Testimonials