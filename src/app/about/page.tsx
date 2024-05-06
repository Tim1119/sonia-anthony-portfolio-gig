"use client"
import aboutImage from '../assets/sonia/about-image.png'
import Link from 'next/link'
import Image from 'next/image'
import Button from "../components/button/Button"
import {useEffect,useState} from 'react'
import client from '../../../client'
import CircleLoader from '../components/loader/CircleLoader'
import { toast } from 'react-toastify';
import PortableText from "react-portable-text";

const AboutPage = () => {
  const notify = () => toast("Wow so easy !");
  const [aboutSoniaDetail, setAboutSoniaDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAboutSonia = async () => {
    try {
      const aboutSoniaData = await client.fetch('*[_type == "about"]');
      console.log('about---------->', aboutSoniaData);
      setAboutSoniaDetail( aboutSoniaData); // Update state with fetched data
    } catch (error) {
      console.error('Error fetching about Sonia:', error);
      // Handle errors gracefully, e.g., display an error message to the user
      toast.error("An error occurred while fetching portfolio. Please try again later.", {
        position: "top-right",
        autoClose: 5000, // Close after 5 second
      });
    } finally {
      setIsLoading(false); // Set loading to false after fetching (or error handling)
    }
  };


  useEffect(()=>{
    getAboutSonia()
  },[])

  return (
    <div className="font-serif pt-5 grid place-items-center w-full bg-white " >
      
    {isLoading ? ( <CircleLoader />) :
      (
    <div className='containerize grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4 h-full ' data-aos="fade-up">

    <div className='h-full grid place-items-center' data-aos="fade-up" data-aos-delay="200"> 
        <div className='gap-2 lg:gap-5 space-y-1 lg:space-y-2' >
            <div>

            <h3 className='section-header text-left mt-7 mb-3' data-aos="fade-up" >About Me</h3>
            
            </div>
            
            <p className='text-[15px] lg:text-base font-normal text-justify lg:leading-8 leading-8' data-aos="fade-up" data-aos-delay="400" >
            {/* {aboutSoniaDetail?.about} */}
            <article>

            <PortableText
            className="text-justify"
            content={aboutSoniaDetail[0]?.about}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            serializers={{
              h1: (props: any) => (
                <h1 className="my-5 text-2xl font-bold" {...props}></h1>
              ),
              h2: (props: any) => (
                <h1 className="my-5 text-xl font-bold" {...props}></h1>
              ),
              li: ({ children }: any) => (
                <li className="ml-4 list-disc">{children}</li>
              ),
              link: ({ children, href }: any) => (
                <a href={href} className="text-blue-500 hover:underline">
                  {children}
                </a>
              ),
            }}
          />
            </article>

            </p>
            <Link href='/' >
            <Button   buttonClassName={"mt-5 mx-auto lg:mx-0 flex text-sm lg:text-base items-center spacing-3 gap-3 btn px-4 py-2 rounded-md my-5 text-white bg-lemon hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700"} />
                
            </Link>

        </div>
    </div>
   
    <div data-aos="zoom-out" data-aos-delay="200"   className='flex items-end justify-center lg:justify-around  h-full'>
        <Image src="/sonia/about-image.png" width={300} height={300} className='object-contain lg:h-[90%]' alt="Sonia-About-IMage" />
        </div>
      </div>
      )}

</div>
  )
}

export default AboutPage