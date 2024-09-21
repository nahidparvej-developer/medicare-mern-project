import { Link } from "react-router-dom"
import heroImg01 from "../assets/images/hero-img01.png"
import heroImg02 from "../assets/images/hero-img02.png"
import heroImg03 from "../assets/images/hero-img03.png"
import icon01 from "../assets/images/icon01.png"
import icon02 from "../assets/images/icon02.png"
import icon03 from "../assets/images/icon03.png"
import feauterImg from "../assets/images/feature-img.png"
import { CiCircleChevRight } from "react-icons/ci";
import About from "../components/About/About"
import ServicesList from "../components/services/ServicesList"
import DoctorsList from "../components/Doctors/DoctorsList"

import faqImg from "../assets/images/faq-img.png"
import FaqList from "../components/Faq/FaqList"
import Testimonial from "../components/Testimonial/Testimonial"

const Home = () => {
  return (
    <>
      {/* ____Hero section_____ */}



      <section className='hero-section lg:px-20 px-2   pt-[50px] 2xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[30px] items-center justify-between'>

            {/*___ __Hero Content _____ */}

            <div className="py-20">
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[44px]
            md:leading-[70px]
    '>We help paitents live a healthy, longer life.</h1>
                <p className='text_para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere nihil rerum minus vel
                  nesciunt earum vitae optio atque iste sapiente accusamus autem sit.
                </p>
                <button className='btnn'>Request an Appointment</button>
              </div>

              {/* ______hero counter_____ */}

              <div className='mt-[20px] lg:mt-[20px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>

                <div>
                  <h2 className='text-[20px] leading-[56px] lg:text-[30px] lg:leading-[54px] font-[700] text-headingColor'>10+</h2>
                  <span className='w-[80px] h-2 bg-yellowColor rounded-full block mt-[10px]'></span>
                  <p className='text_para'>Years of Experience</p>
                </div>
                <div>
                  <h2 className='text-[20px] leading-[56px] lg:text-[30px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>
                  <span className='w-[80px] h-2 bg-purpleColor rounded-full block mt-[10px]'></span>
                  <p className='text_para'>Clinic Location </p>
                </div>
                <div>
                  <h2 className='text-[20px] leading-[56px] lg:text-[30px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                  <span className='w-[80px] h-2 bg-irisBlueColor rounded-full block mt-[10px]'></span>
                  <p className='text_para'>Patient satisfaction</p>
                </div>

              </div>



            </div>

            {/* ______hero counter_____ */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img src={heroImg01} className="w-full" alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} className="w-full mb-[30px]" alt="" />
                <img src={heroImg03} className="w-full mb-[30px]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ____Hero section end _____ */}


      <section className="lg:px-20 px-2">
        <div className="container">
          <div className="lg:w-[500px] mx-auto">
            <h2 className="heading text-center">Providing the best medical services</h2>
            <p className="text_para text-center">
              world class care for everyone.Our health offers unmatched,expert health care
            </p>
          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">

            <div className="py-[30px] lg:px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Doctors</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <Link to="/doctors">
                  <CiCircleChevRight className="w-[44px] h-[44px] rounded-full border text-primaryColor border-[#181A1E] mt-[30px] mx-auto items-center justify-center group hover:bg-primaryColor hover:text-white border-none hover:border-none" />
                </Link>
              </div>
            </div>
            <div className="py-[30px]lg:px-5 mt-7">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Location</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <Link to="/doctors">
                  <CiCircleChevRight className="w-[44px] h-[44px] rounded-full border text-primaryColor border-[#181A1E] mt-[30px] mx-auto items-center justify-center group hover:bg-primaryColor hover:text-white border-none hover:border-none" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] lg:px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Book Appoinment</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <Link to="/doctors">
                  <CiCircleChevRight className="w-[44px] h-[44px] rounded-full border text-primaryColor border-[#181A1E] mt-[30px] mx-auto items-center justify-center group hover:bg-primaryColor hover:text-white border-none hover:border-none" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/*_________About section started __________ */}

      <About></About>

      {/*_________About section end __________ */}





      {/* -__________ service section______ */}


      <section className="lg:px-20 px-2">
        <div className="container">
          <div className="xl-w-[470px] mx-auto">
            <h2 className="heading text-center">
              Our Medical Services
            </h2>
            <p className="text_para text-center">
              world class care for everyone. Our health system offers unmatched, expert healt care.
            </p>
          </div>
          <ServicesList />
        </div>
      </section>


      {/* -__________ service section end_____ */}


      {/* _______future section start______ */}

      <section className="lg:px-20 px-2">
        <div className="container">

          <div className="flex   items-center justify-between flex-col-reverse gap-14 lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">Get virtual treatment <br />anytime.</h2>
              <ul className="pl-4">
                <li className="text_para">1. Scheule the appointment directly</li>
                <li className="text_para">2. search for your phycician here, and contact their office.</li>
                <li className="text_para">3. View our phycician who are accepting new patients,</li>
              </ul>

              <Link> <button className="btnn mb-5">
                Learn More
              </button>
              </Link>
            </div>

            {/* _______future content____ */}




            <div className="flex justify-end mt-[55px] lg:mt-5 xl:w-[770px]">
              <img src={feauterImg} className="w-3/4 mr-8 lg:mr-0 lg:h-80" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* _______future section start end ______ */}


      {/* ___________ */}

      <section className="lg:px-20 px-2">
        <div className="container">
          <div className="xl-w-[470px] mx-auto">
            <h2 className="heading text-center">
              Our Get Doctors
            </h2>
            <p className="text_para text-center">
              world class care for everyone. Our health system offers unmatched, expert healt care.
            </p>
          </div>
          <DoctorsList />
        </div>
      </section >


      {/*           faq */}

      <section className="lg:px-20 px-2">
    <div className="container">
      <div className="flex justify-between md:gap-5 lg:gap-14">
        <div>
          <img src={faqImg} className="lg:w-[480px] hidden md:block" alt="" />
        </div>
        <div className="w-full md:h-1/2">
          <h2 className="heading mb-5">Most Quetions by our beloved patients</h2>

          <FaqList></FaqList>
        </div>
      </div>
    </div>
      </section>

{/* testimonial _________ */}

<section className="lg:px-20 px-2">
<div className="container">
          <div className="xl-w-[470px] mx-auto">
            <h2 className="heading text-center">
             What our patients say
            </h2>
            <p className="text_para text-center">
              world class care for everyone. Our health system offers unmatched, expert healt care.
            </p>
          </div>
          
          <Testimonial/>
        </div>
</section>
    </>
  )
}

export default Home



// w-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto items-center justify-center group hover:bg-primaryColor hover:border-none