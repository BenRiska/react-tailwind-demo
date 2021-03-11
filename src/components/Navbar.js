import React from 'react'
import {Link} from "react-router-dom"
import emberLogo from "../images/ember.svg"

const Navbar = () => {
    return (
        <nav
      className='container mx-auto flex justify-between items-center h-20 bg-white text-black relative'
      role='navigation'
    >
      <div className="flex justify-between items-center">
        <Link to='/' className='px-4 cursor-pointer'>
          <img className="h-7" src="https://images.prismic.io/ember-bank/72b3bd16-d681-4ce3-bfab-674761131a4b_Group+8.png?auto=compress,format&rect=0,0,2618,691&w=197&h=52" alt="ember logo"/>
        </Link>
        <div className='pr-8 lg:block ml-4 space-x-6 hidden'>
          <Link to='/' className='p-4 relative font-bold group'>
            Who we're for
            <div className="absolute space-y-2 hidden group-hover:block shadow-lg w-52 p-4">
              <p className="font-normal">Freelancers</p>
              <p className="font-normal">Contracters</p>
              <p className="font-normal">Startups</p>
              <p className="font-normal">Small businesses</p>
            </div>
          </Link>
          <Link to='/menu' className='p-4 font-bold'>
            Pricing
          </Link>
          <Link to='/about' className='p-4 font-bold'>
            Partner
          </Link>
          <Link to='/contact' className='p-4 font-bold'>
            Blog
          </Link>
        </div>
      </div>
      <div className="space-x-4">
        <button className="py-2 px-8 bg-gray-100 font-bold rounded">Login</button>
        <button className="py-2 px-8 font-bold bg-red-400 text-white rounded">Try 1 month free</button>
      </div>
    </nav>

    )
}

export default Navbar
