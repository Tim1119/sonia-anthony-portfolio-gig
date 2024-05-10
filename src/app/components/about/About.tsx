import aboutImage from '../../assets/sonia/about-image.png'
import Link from 'next/link'
import Image from 'next/image'
import Button from "../button/Button"
import {AboutType} from '../../../../types/index'
import {getAbout} from '../../../../sanity/sanity.query'
import PortableText from "react-portable-text";

export default async function About () {
    const about: AboutType[] = await getAbout();
 
  return (
    <div className="font-serif pt-5 grid place-items-center w-full bg-white overflow-hidden" >
    <div className='containerize grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4 h-full ' data-aos="fade-up">

    <div className='h-full grid place-items-center' data-aos="fade-up" data-aos-delay="200"> 
        <div className='gap-2 lg:gap-5 space-y-1 lg:space-y-2' >
            <div>
                <h3 className='section-header text-left mt-7 mb-1 text-black' data-aos="fade-up" >About Us</h3> 
            </div>
            <div data-aos="fade-up" data-aos-delay="400" >
                <div className='text-[15px] lg:text-base font-normal text-justify leading-[32px] lg:leading-8 line-clamp-[8]'  >
                    
                <PortableText
                  className="text-justify"
                  content={about[0]?.about}
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
                  
                </div>
            </div>
            <Link href='/' >
                <Button buttonClassName={"mt-5 mx-auto lg:mx-0 flex text-sm lg:text-base items-center spacing-3 gap-3 btn px-4 py-2 rounded-md my-5 text-white bg-lemon hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green- shadow-md"} />  
            </Link>

        </div>
    </div>
    <div data-aos="zoom-out" data-aos-delay="200"   className='flex items-end justify-center lg:justify-around  h-full'>
        <Image src="/sonia/about-image.png" width={300} height={300} className='object-contain lg:h-[90%]' alt="Sonia-About-Image" />
        </div>
    </div>
</div>

  )
}

