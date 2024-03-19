import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import storeGaurdIcon from '../utils/icons/storegaurd.png'
import { HashLink } from "react-router-hash-link"

const Header = () => {
  const history = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const access_token = false


  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleSignout = () => {
    localStorage.clear()
    history('/')
    window.location.reload()
  }

  return (
    <header className="flex items-center justify-between w-full px-5 py-2  z-50 bg-[white]">
      <div
        onClick={() => history('/')}
        className="flex flex-col items-start cursor-pointer"
      >
        <img src={storeGaurdIcon} className="" alt=""/>
        <p className="text-amber-600 font-semibold">STOREGAURD</p>
      </div>
      <div className="relative w-full h-full flex justify-between items-center">
        <button
          className="hidden absolute max-[768px]:inline text-2xl right-2 bottom-1rem text-[#222] cursor-pointer max-[768px]:text-xl"
          onClick={toggleDropdown}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        {isOpen && (
          <div className=" w-48 bg-[#fff] rounded-md shadow-lg  top-8 right-2 h-96 z-10 absolute">
            <ul className="w-full h-full flex flex-col items-center justify-center gap-10">
              <li className="text-[#000] font-medium max-[600px]:text-base hover:text-[#FF8D22]">
                <Link to="/">Home</Link>
              </li>
              <li className="text-[#000] font-medium max-[600px]:text-base hover:text-[#FF8D22]">
                <Link to="/dashboard">Receipt Upload</Link>
              </li>
              <li className="text-[#000] font-medium max-[600px]:text-base hover:text-[#FF8D22]">
                <HashLink smooth to="/#about">About Us</HashLink>
              </li>
              <li className="text-[#000] font-medium max-[600px]:text-base hover:text-[#FF8D22]">
                <HashLink to="/#contact">Contact Us</HashLink>
              </li>
              {access_token && (
                <li
                  onClick={handleSignout}
                  className="text-[#000] font-medium max-[600px]:text-base hover:text-[#FF8D22]"
                >
                  <p>Sign Out</p>
                </li>
              )}
              {access_token ? (
                <li className="font-medium max-[600px]:text-base rounded-md border text-white hover:text-[#000] hover:bg-white bg-[#FF8D22] duration-500 transition-all px-6 py-2">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              ) : (
                <li className="font-medium max-[600px]:text-base rounded-md border text-white hover:text-[#000] hover:bg-white bg-[#FF8D22] duration-500 transition-all px-6 py-2">
                  <Link to="/dashboard">Register</Link>
                </li>
               )} 

            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
