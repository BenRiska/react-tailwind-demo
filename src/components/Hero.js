import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='flex max-w-1200 p-4 mx-auto space-x-2 items-center mt-8'>
          <div className="flex-grow md:block flex flex-col items-center">
              <h1 className="mt-12 text-center md:text-left">
                <span className="text-5xl block font-bold mb-2">Full package, fuss-free</span>
                <span className="text-5xl block font-bold">accounting for £39/month</span>
              </h1>
              <ul className="mt-8 space-y-3">
                <li className="flex space-x-3">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10.5" cy="10.5" r="10.5" fill="#00b67a"></circle><path d="M15.2072 7.96484L9.2331 13.7579L6.51758 11.1247" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  <span className="font-light text-lg">Real-time accounting you'll actually understand.</span>
                </li>
                <li className="flex space-x-3">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10.5" cy="10.5" r="10.5" fill="#00b67a"></circle><path d="M15.2072 7.96484L9.2331 13.7579L6.51758 11.1247" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  <span className="font-light text-lg">All of your taxes optimised and filed with HMRC.</span>
                </li>
                <li className="flex space-x-3">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10.5" cy="10.5" r="10.5" fill="#00b67a"></circle><path d="M15.2072 7.96484L9.2331 13.7579L6.51758 11.1247" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  <span className="font-light text-lg">Unlimited accounting and tax support from our team of experts</span>
                </li>
              </ul>
              <div className="flex space-x-4 mt-8">
                <button className="py-4 px-8 font-bold bg-red-400 text-white rounded">Try 1 month free</button>
                <button className="py-4 px-8 bg-gray-100 font-bold rounded">Book a demo</button>
              </div>
              <p className="text-sm mt-3">
                It only takes <strong>5 minutes</strong> to switch from your existing system. No credit card required.
              </p>
          </div>
          <img className="max-h-120 md:block object-contain max-w-half hidden" src="https://images.prismic.io/ember-bank/0b20b735-1bd3-4db1-accc-cdd66834baf7_Group+155.png?auto=compress,format&height=970" alt="hero display"/>
        </div>
    )
}

export default Hero
