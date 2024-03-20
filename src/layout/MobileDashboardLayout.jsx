import { useState } from 'react'
import { Link } from 'react-router-dom'
import storeGaurdIcon from '../utils/icons/storegaurd.png'
import search from "../utils/icons/searchIcon.png"
import dummy from "../utils/icons/dummy.png"
import notification from "../utils/icons/notification.png"
import overview from "../utils/icons/overview.png"
import reciept from "../utils/icons/reciept.png"
import files from "../utils/icons/files.png"
import settings from '../utils/icons/settings.png'
import largelogo from '../utils/icons/largelogo.png'
import arrowDown from '../utils/icons/arrowDown.png'

const MobileDashboardLayout = ({children}) => {
  const [showFilesContent, setShowFilesContent] = useState(false)
  const [showRecieptContent, setShowRecieptContent] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [viewProfile, setViewProfile] = useState(false)
  const [isNavOpen, setIsNavbarOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
    setIsNavbarOpen(!isNavOpen)
  }

  const openFileContent  = () =>{
      setShowFilesContent(!showFilesContent)
  }

  const openRecieptContent  = () =>{
      setShowRecieptContent(!showRecieptContent)
  }
  
  const openProfileContent = () => {
      setViewProfile(!viewProfile)
  }

  return (
    <div>
      <div className="w-full h-full flex justify-between items-center bg-white px-4 py-6">
        <div className="flex flex-row-reverse items-center justify-center gap-5">
          <Link to="/">
            <img src={storeGaurdIcon} alt="" />
          </Link>
          <button
            className="hidden max-[768px]:inline text-2xl left-3 bottom-1rem text-[#222] cursor-pointer max-[768px]:text-xl"
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
        </div>
        <div className='flex justify-center items-center gap-6'>
          <img src={search} alt="" className='cursor-pointer' />
          <img src={notification} alt="" className='cursor-pointer' />
          <img src={dummy} alt="" className='cursor-pointer w-10 h-10' onClick={openProfileContent} />
        </div>
    </div>
    {viewProfile && 
        (<div className='text-[poppins] absolute top-[10vh] right-4 py-2 flex flex-col items-center justify-center gap-6 w-[200px] shadow-lg rounded-md z-10 bg-white'>
            <img src={dummy} alt="" className='cursor-pointer' />
            <p className='text-xs font-bold'>Mary Daniels</p>
            <p className='text-[10px]'>Imachristt328@gmail.com</p>
            <div className='w-full'>
                <p className='text-xs font-semibold px-5 py-2'>settings</p>
                <hr />
                <p className='text-xs text-[#F90101] px-5 py-2'>Log Out</p>
            </div>
        </div>
    )}{isNavOpen && (
      <div className='absolute flex flex-col items-center justify-between bg-[#131021] pt-10 shadow-sm md:w-[30%] lg:w-[20%] h-[90vh] z-10'>
        <div className='flex flex-col items-start justify-center gap-10'>
          <Link to="/dashboard">
            <div className='flex items-center justify-center gap-4 cursor-pointer'>
              <img src={overview} alt="" className='w-6 h-6' />
              <p className='text-xl text-[#FF8D22]'>Overview</p>
            </div>
          </Link>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center gap-4 cursor-pointer' onClick={openRecieptContent}>
                <img src={reciept} alt="" className='w-6 h-6' />
                <p className='text-xl text-white'>Receipt</p>
                <img src={arrowDown} alt="" className={showRecieptContent ? '-rotate-180' : 'rotate-360'} />
            </div>
            {showRecieptContent && (
                <div className='text-white flex flex-col gap-3 mt-3'>
                    <p className='cursor-pointer text-xs'>Upload</p>
                    <p className='cursor-pointer text-xs'>Retrieve</p>
                </div>
            )}
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center gap-4 cursor-pointer' onClick={openFileContent}>
                <img src={files} alt="" className='w-6 h-6' />
                <p className='text-xl text-white'>My Files</p>
                <img src={arrowDown} alt="" className={showFilesContent ? '-rotate-180' : 'rotate-360'}/>
            </div>
            {showFilesContent && (
                <div className='text-white flex flex-col gap-3 mt-3'>
                    <p className='cursor-pointer text-xs'>School Fees</p>
                    <p className='cursor-pointer text-xs'>Project</p>
                    <p className='cursor-pointer text-xs'>Clearance</p>
                </div>
            )}
          </div>
          <div className='flex items-center justify-center gap-4 cursor-pointer'>
              <img src={settings} alt="" className='w-6 h-6' />
              <p className='text-xl text-white'>Settings</p>
          </div>
        </div>
        <img src={largelogo} alt="" />
      </div>
    )}
    <div className='flex item-center h-[90vh]'>
      <div className='w-full'>
        {children}
      </div>
    </div>
  </div>
  )
}

export default MobileDashboardLayout