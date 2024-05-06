import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../../../../client';


interface PortfolioCard{
    title:string;
    about:string;
    image:string | StaticImport;
    index:number;
}

const PortfolioCard = ({title,about,image,index}:PortfolioCard) => {

    
  return (
   
<div  data-aos="fade-up" data-aos-delay={ (index === 0 && "200") || (index === 1 && "300") || (index === 2 && "400")} className="max-w-lg mx-auto">
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <Link href="">
            <Image src={urlFor(image).url()} width={200} height={200} className='rounded-t-lg w-full h-[255px] max-h-[255px] object-contain' alt={`Portfolio-Image-${index}`} />
        </Link>
        <div className="p-5">
            <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 line-clamp-1">{title}</h5>
            </a>
            <p className="font-normal text-gray-700 mb-3 line-clamp-2">{about}</p>
            {/* <a className="text-white bg-lemon hover:bg-lemon focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#"> */}
            <Link href="" className="text-white bg-customOrange hover:bg-lemon focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                Read more
            </Link>
        </div>
    </div>
   
</div>
  )
}

export default PortfolioCard