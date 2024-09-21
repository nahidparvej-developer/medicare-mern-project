import { useEffect, useRef } from "react"
import logo from "../../assets/images/logo.png"
import userImg from "../../assets/images/avatar-icon.jpg"
import { NavLink, Link } from "react-router-dom"
import {BiMenu} from "react-icons/bi"


const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctors",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
]

const Header = () => {

  const headerRef = useRef(null)
  const menusRef =useRef(null)


  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ){
        headerRef.current.classList.add('sticky-header')
      }else{
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }

  useEffect(() => {
    handleStickyHeader()

    return () => window.removeEventListener('scroll', handleStickyHeader)
  })


  const toggleMenus = () => menusRef.current.classList.toggle('show_menus')

  return <header className='header nav flex items-center lg:px-20 px-8' ref={headerRef}>
    <div className="container ">
      <div className='flex  items-center justify-between'>
        {/* _______Logo______ */}

        <div>
         <a href="/"> <img src={logo} alt="" className="lg:w-32 w-36 lg:gap-0 mr-3" /></a>
        </div>

        {/* ___menu______ */}

        <div className='navigation' ref={menusRef} onClick={toggleMenus} >
          <ul className='menus flex items-center text-sm md:gap-4 lg:gap-10'>
            {
              navLinks.map((link, index) => <li key={index}>
                <NavLink to={link.path} className={navClass => navClass.isActive
                  ? "text-primaryColor text-[16px] leading-7 font-[600] " : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor "}

                >
                  {link.display}
                </NavLink>
              </li>)
            }
          </ul>
        </div>
        {/* ______nav right_____ */}

        <div className='flex items-center gap-5'>
          <div className="hidden">
            <Link to="/" >
              <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                <img src={userImg} className='w-full rounded-full' alt="" />
              </figure>
            </Link>
          </div>

          <Link>
            <button className='bg-primaryColor ml-3 py-2 px-6 text-white font-[600] lg:h-[44px] h-9 w-16 lg:w-[90px] flex items-center justify-center rounded-[50px]'>
             <Link to='/login' >  Login</Link>
            </button>
          </Link>

          <span className='md:hidden' onClick={toggleMenus} >
            <BiMenu className="w-6 h-6 cursor-pointer" />
          </span>
        </div>

      </div>
    </div>
  </header>

}

export default Header