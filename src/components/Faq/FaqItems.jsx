/* eslint-disable react/prop-types */

import { useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'


const FaqItems = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAcordion = () => {
    setIsOpen(!isOpen)
  };


  return (
    <div className="p-2 lg:p-2 rounded-md border border-solid border-[#D9DCE2] mb-2 cursor-pointer">
      <div className="flex items-center justify-between gap-5"
        onClick={toggleAcordion}>
        <h4 className="text-[10px] leading-7 lg:text-[20px] lg:leading-8 text-headingColor">
          {item.question}
        </h4>
        <div className={`${isOpen && "bg-primaryColor text-white border-none"} w-7 h-7 lg:w-8 lg-h-8 border border-solid border-[#141F21] rounded flex items-center justify-center`}>
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      {
        isOpen && <div className="mt-4">
          <p className="text-[12px] leading-7 lg:leading-8 text-headingColor">{item.content}</p>
        </div>
      }
    </div>
  )
}

export default FaqItems