"use client"
import { Hourglass } from 'react-loader-spinner'

export default function Loading() {
    // Or a custom loading skeleton component

    return (
      <div className="h-[80vh] grid place-items-center" >
        <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#007BFF', '#F85A40']}
  />
       
    </div>
    )
  }