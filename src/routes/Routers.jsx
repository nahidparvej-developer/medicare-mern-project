import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Doctors from '../pages/Doctors/Doctors'
import DoctorsDetails from '../pages/Doctors/DoctorsDetails'

import { Routes, Route } from 'react-router-dom'

const Routers = () => {
  return (
   <div>
     <Routes>
      <Route path='/' element={<Home></Home>}>   </Route>
      <Route path='/home' element={<Home></Home>}>  </Route>
      <Route path='/doctors' element={<Doctors />}>  </Route>
      <Route path='/doctors/:id' element={<DoctorsDetails />}>  </Route>
      <Route path='/login' element={<Login></Login>}>  </Route>
      <Route path='/register' element={<Signup />}> </Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/services' element={< Services />} >  </Route>
  

    </Routes>
   </div>
  )
}

export default Routers