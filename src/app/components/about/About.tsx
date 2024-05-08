import aboutImage from '../../assets/sonia/about-image.png'
import Link from 'next/link'
import Image from 'next/image'
import Button from "../button/Button"




const About = () => {
  return (
    <div className="font-serif pt-5 grid place-items-center w-full bg-white overflow-hidden" >
    <div className='containerize grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4 h-full ' data-aos="fade-up">

    <div className='h-full grid place-items-center' data-aos="fade-up" data-aos-delay="200"> 
        <div className='gap-2 lg:gap-5 space-y-1 lg:space-y-2' >
            <div>
                <h3 className='section-header text-left mt-7 mb-1 text-black' data-aos="fade-up" >About Me</h3> 
            </div>
            <div data-aos="fade-up" data-aos-delay="400" >
                <p className='text-[15px] lg:text-base font-normal text-justify leading-[32px] lg:leading-8'  >
                    {`Hi, I'm Sonia, your Executive Zen Assistant. I specialize in streamlining your workload and
                    coordinating executive schedules, making your life easier. Whether it's managing administrative
                    tasks, organizing your lifestyle, or fostering creativity, I'm here to ensure every aspect of your
                    schedule comes alive through impeccable organization.
                    I offer a comprehensive range of services tailored to your needs.
                    Let's work together to achieve your goals, while reclaiming your time and embracing a
                    well-balanced life.`}
                </p>
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

export default About