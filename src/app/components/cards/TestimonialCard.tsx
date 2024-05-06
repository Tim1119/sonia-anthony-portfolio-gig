import { FaStar } from "react-icons/fa";
import Image from 'next/image'
import { urlFor } from '../../../../client';


interface TestimonialCardProps{
  name:string;
  image:string;
  position:string;
  testimony:string;
}

const TestimonialCard = ({name,image,position,testimony}:TestimonialCardProps) => {
    
  return (
    <div className="w-full  p-4">
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden px-6 pb-3">

      <div className="mt-10" >
          <div className=" text-xl flex items-center justify-center mt-6 mb-3">
          {[...Array(5)].map((_, index) => (
            
            <FaStar key={index} size={20} className="text-[#FFC107]" />
          ))}
            
          </div>
          <p className=" leading-sm text-base  mb-5  text-center italic line-clamp-[8]">
         {testimony}
        </p>
      </div>
      <div className="grid place-items-center gap-5" >
          <div className="flex-shrink-0">
            <Image width={200} height={200} src={urlFor(image).url()} alt={"Tesimonial Picture"}  className="w-16 h-16 rounded-full" />
             
            </div>
            <div className="gap-1 grid place-items-center" >

            <h3 className="text-lg font-semibold capitalize">{name}</h3>
            <p className="text-gray-500 capitalize text-sm">{position}</p>
            </div>
      </div>
    
      </div>
  </div>
  )
}

export default TestimonialCard