
import aboutImg from "../../assets/images/about.png"


const About = () => {
    return (
      


            <section className="lg:px-20 px-8 ">
                <div className="container">
                    <div className='flex justify-between gap-[50px] lg:gap-[130px] xl-gap-0 flex-col lg:flex-row'>

                        {/* about img  */}

                        <div className='w-3/4 lg:w-1/2 xl-w-[770px] order-2 lg:order-1'>
                            <img src={aboutImg} className="lg:h-80 mt-4 ml-8 lg:ml-0 " alt="" />
                          
                        </div>

                        {/* _______ About content _________ */}

                         <div className="w-full lg:w-1/2 xl:w-[690px] order-1 lg:order-2">
                            <h2 className="heading">Proud to be one of the nations best</h2>
                            <p className="text_para mt-[15px]"> Lorem ipsum dolor sit, amet consectetur adipisicing elit.nam illo eligendi.</p>
                            <p className="text_para mt-[5px]"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi in,</p>

                            <button className="btnn mb-5">
                                Learn More
                            </button>
                         </div>
                    </div>
                </div>
            </section>



    )
}

export default About