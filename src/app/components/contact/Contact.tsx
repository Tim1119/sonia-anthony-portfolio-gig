import React from 'react'

const Contact = () => {
  return (
    <div className="  my-6 py-5  font-serif grid place-items-center ">
      <div className="containerize  h-full flex flex-col justify-center items-center">
        <h3 className="section-header my-7">Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div>
            <div>
              <h3 className="text-center lg:text-left font-bold text-customOrange text-[22px] lg:text-3xl my-3">
                Get in Touch
              </h3>
              <p className="text-base font-normal tracking-wide max-w-md my-4">
                Have any questions about my services? Looking to hire a virtual
                assistant? Looking to collab or partner with me? Send me a
                message!
              </p>
            </div>
           
          </div>
          <div className=" h-fit p-2 py-3">
            {/* <form   className=" mx-auto px-5 pt-5 pb-2 bg-[#f2f2f2] rounded-lg"> */}
            <form   className=" mx-auto px-5 pt-5 pb-2 bg-white py-4 shadow-lg border-t rounded-lg">
              <div className="mb-5 my-4">
                <input
                 
                  type="text" 
                  name="user_name"
                  placeholder="Full Name"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lemon focus:border-green-600 block w-full p-2.5  "
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  
                  type="email"
                   name="user_email" 
                  
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lemon focus:border-green-600 block w-full p-2.5  "
                  placeholder="Your Email"
                  required
                />
              </div>
             
              <div className="mb-5">
                <textarea
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lemon focus:border-gree-600 block w-full p-2.5 h-[100px]"
                  placeholder="Message"
                  name="message" 
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                //   disabled={isSubmitting}
                  className="text-white text-center bg-customOrange hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 "
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact