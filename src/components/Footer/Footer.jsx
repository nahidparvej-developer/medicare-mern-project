
import logo from '../../assets/images/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
 <div>
     <footer className="footer text-base-content border-base-300 border-t px-10 py-2">
    <aside className="grid-flow-col items-center">
   <div>
 <a href="/">  <img src={logo} alt="" /></a>
      <p className='mt-3'>
      National Medicare Hospital and Research Center.
   
      
      </p>
   </div>
    </aside>
    <nav className="md:place-self-center md:justify-self-end">
      <div className="grid grid-flow-col gap-4">
        <a>
        <FaYoutube className=' w-10 h-10 text-red-600' />
        </a>
        <a href='https://github.com/nahidparvej-developer'>
        <FaGithub className=' w-8 h-8 text-black' />
        </a>
        <a href='https://www.facebook.com/nahidparvej.ofc'>
        <FaFacebook className=' w-8 h-8 text-blue-600' />
        </a>
      </div>
    </nav>
 
  </footer>
  <aside className=' border-base-300 border-t'>
    <p className='text-center justify-center font-[10px] '>Copyright © {new Date().getFullYear()} - All right reserved by Nahid Parvej</p>
  </aside>
 </div>
        
  )
}

export default Footer