"use client"
import { Hourglass } from 'react-loader-spinner'
import RingLoader from "react-spinners/RingLoader";

export default function Loading() {
    

    return (
      <div className="h-screen grid place-items-center" >
       <RingLoader color="#36d7b7" />
      </div>
    )
  }