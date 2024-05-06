"use client"
// import servicesData from "../../../utils/dummy/servicesData";
import ServiceCard from "../cards/ServiceCards";
import {useEffect,useState} from 'react'
import client from '../../../../client'
import CircleLoader from "../loader/CircleLoader";
import { toast } from 'react-toastify'

const Services = () => {

  const [userServices, setUserServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getServices = async () => {
    try {
      const servicesData = await client.fetch('*[_type == "services"] | order(_createdAt asc)[0...3]');
      console.log('services---------->', servicesData.name);
      setUserServices( servicesData); // Update state with fetched data
     
    } catch (error) {
      console.error('Error fetching services:', error);
    toast.error("An error occurred while fetching services. Please try again later.", {
      position: "top-right",
      autoClose: 5000, // Close after 5 second
    });
      // Handle errors gracefully, e.g., display an error message to the user
    } finally {
      setIsLoading(false); // Set loading to false after fetching (or error handling)
    }
  };


  useEffect(()=>{
    getServices()
  },[])

  
    
  return (
    <div className="w-full h-fit lg:h-[100vh] bg-slate-50 font-serif grid place-items-center ">
      <div className="containerize h-full flex flex-col justify-center ">
        <div data-aos="fade-up">
          <h3 className="section-header my-5 text-black">Services</h3>
        </div>
        {isLoading ? ( <CircleLoader />) :
      (

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center my-3 ">
          {userServices.map((serviceData:any, index:number) => (
            <ServiceCard
              index={index}
              key={index}
              title={serviceData.name}
              skills={serviceData.skills}
            />
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default Services;
