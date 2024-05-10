import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

type layoutProps =  {
    children:React.ReactNode
}

const layout = ({children}:layoutProps) => {
  return (
    <div>
        <Navbar />
        <div className='mt-[70px]'  >
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default layout