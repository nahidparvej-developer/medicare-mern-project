/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import starIcon from "../../assets/images/Star.png"
import { CiCircleChevRight } from "react-icons/ci";


const DoctorsCard = ({ doctor }) => {

    const { name, specialty, avgRating, totalRating, photo, totalPatients, hospital } = doctor;

    return (
        <div className="p-3 lg:p-5 bg-base-100 shadow-xl">
          
              <div>
                <img src={photo}  alt="" />
              </div>
             
                    <h2 className="card-title text-headingColor font-[700] mt-2">{name}</h2>
                   <div className="mt-5  flex items-center justify-between">
                    <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 rounded font-semibold">
                       {specialty}
                    </span>

                    <div className="flex items-center">
                        <span className="flex items-center gap-[6px] text-[14px]">
                            <img src={starIcon} alt="" />
                            {avgRating}
                        </span>
                        <span className="flex items-center gap-[6px] text-[14px]">({totalRating})</span>
                    </div>
                   </div>
                 <div className="mt-3 lg:mt-5 flex items-center justify-between">
                    <div>
                        <h3 className="text-[16px] leading-7 lg:leading-[30px] font-semibold text-headingColor">*{totalPatients} Patients</h3>
                        <p className="text-[14px] leading-6 font-[400] text-textColor">{hospital}</p>
                    </div>
                    <Link to="/doctors">
                  <CiCircleChevRight className="w-[35px] h-[35px] rounded-full border text-primaryColor border-[#181A1E] mt-[30px] mx-auto items-center justify-center group hover:bg-primaryColor hover:text-white border-none hover:border-none" />
                </Link>
                 </div>
     
        </div>
    )
}

export default DoctorsCard