import React from "react";

interface ServiceCardProps {
  title: string;
  skills: string[];
  index: number;
}

const ServiceCard = ({ title, skills, index }: ServiceCardProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={
        (index === 0 && "200") ||
        (index === 1 && "400") ||
        (index === 2 && "600")
      }
      className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 "
    >
      <div className="flex items-baseline text-gray-900">
        <span className="text-xl lg:text-[22px] font-lighter tracking-tight text-customOrange font-semibold">
          {title}
        </span>
        {/* <span className="text-xl lg:text-2xl font-extrabold tracking-tight text-customOrange">{title}</span> */}
      </div>
      <ul role="list" className="space-y-3 my-3">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-lemon"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-[15px] xl:text-base font-normal leading-tight text-gray-500 ms-3">
              {skill}
            </span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="mt-2 text-white bg-customOrange hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
      >
        Choose plan
      </button>
    </div>
  );
};

export default ServiceCard;
