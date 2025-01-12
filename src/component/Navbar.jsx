import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-[100%] fixed top-0 left-0'>
        <Link to={"/"}><h2 className='text-white font-bold text-center lg:text-start text-md md:text-xl bg-black py-1'>Employee Management System</h2></Link> 
    </div>
  )
}

export default Navbar