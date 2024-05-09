"use client"
import { Hourglass } from 'react-loader-spinner'
import RingLoader from "react-spinners/RingLoader";

export default function Loading() {
    

    return (
      <div className="h-[80vh] grid place-items-center" >
       <RingLoader color="#36d7b7" />
      </div>
    )
  }