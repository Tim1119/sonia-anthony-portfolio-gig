import React from 'react'
// import { ColorRing } from 'react-loader-spinner'
import ClipLoader from "react-spinners/ClipLoader";

const CircleLoader = () => {
  return (
    <div className="h-[60vh] flex items-center justify-center ">
      <ClipLoader color="#82c829" />
    </div>
  )
}

export default CircleLoader