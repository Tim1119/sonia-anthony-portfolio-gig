import React from 'react'

interface ErrorProps{
    message:string;
}

const Error = ({message}:ErrorProps) => {
  return (
    <div className="h-[60vh] flex items-center justify-center ">
      <h4 className="font-semibold text-red-400 text-2xl" >
      {message}
      </h4>
    </div>
  )
}

export default Error