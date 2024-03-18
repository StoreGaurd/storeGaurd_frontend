import storeGaurdIcon from "../utils/icons/storegaurd.png"
import linkedin from "../utils/icons/linkedin.png"
import pinterest  from "../utils/icons/pinterest.png"
import twitter from "../utils/icons/twitter.png"
import doubleArrow from '../utils/icons/doubleArrow.png'
import tele from '../utils/icons/tele.png'
import mail from '../utils/icons/mail.png'

const Footer = () => {
  return (
    <div className="text-center py-5 md:py-10 px-3 md:px-5 lg:px-24 bg-[#01091C]">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex justify-center items-center gap-2 mb-4 md:mb-0">
          <img src={storeGaurdIcon} className=''/>
          <p className="text-white font-semibold text-2xl md:text-3xl">
            <span className='oldEnglish'>Store</span><span className='Jacques'>Gaurd</span>
          </p>
        </div>
        <div className="w-full md:w-[40%] text-center md:text-start">
          <p className="text-white text-xl md:text-2xl font-semibold">Subscribe To Our Newsletter</p>
          <p className="text-white text-sm mb-4">Be The First To Know About Updates And Trends!</p>
          <div className="relative flex justify-center items-center">
            <input type="text" placeholder="Enter your email address" className="bg-white w-full px-3 py-4  rounded-md"/>
            <button className="absolute right-2 cursor-pointer py-3 px-4 text-[#fff] bg-[#FF8D22] rounded-xl text-sm font-semibold">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-8">
        <div className="w-full md:w-[30%] mb-4 md:mb-0">
          <p className="hidden md:block text-white text-[10px] text-start">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
          <div className="flex items-center justify-center gap-8 md:justify-between mt-4">
            <div className="bg-[#052A82] p-1 cursor-pointer"> 
              <img src={linkedin} alt="" className="w-5 h-5"/>
            </div>
            <div className="bg-[#052A82] p-1 cursor-pointer">
              <img src={pinterest} alt="" className="w-5 h-5"/>
            </div>
            <div className="bg-[#052A82] p-1 cursor-pointer">
              <img src={twitter} alt="" className="w-5 h-5"/>
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-[55%] justify-between">
          <div className="text-white">
            <p className="text-xl font-semibold mb-4 text-start">Explore</p>
            <div className="grid items-start gap-4">
              <div className="flex gap-1">
                <img src={doubleArrow} alt="" />
                <p className="text-sm">About Us</p>
              </div>
              <div className="flex gap-1">
                <img src={doubleArrow} alt="" />
                <p className="text-[10px] md:text-sm">Testimonials</p>
              </div>
              <div className="flex gap-1">
                <img src={doubleArrow} alt="" />
                <p className="text-[10px] md:text-sm">Terms and Conditions</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block text-white">
            <p className="text-xl font-semibold mb-4 text-start">Useful  Links</p>
            <div className="grid items-start gap-4">
              <div className="flex gap-1">
                <img src={doubleArrow} alt="" />
                <p className="text-[10px] md:text-sm">Contact Us</p>
              </div>
              <div className="flex gap-1">
                <img src={doubleArrow} alt="" />
                <p className="text-[10px] md:text-sm">Upload Receipt</p>
              </div>
            </div>
          </div>
          <div className="text-white">
            <p className="text-xl font-semibold mb-4 text-start">Contact Us</p>
            <div className="grid items-start gap-4">
              <div className="flex gap-1">
                <img src={tele} alt="" />
                <p className="text-[10px] md:text-sm">09146273838</p>
              </div>
              <div className="flex gap-1">
                <img src={mail} alt="" />
                <p className="text-[10px] md:text-sm">storeguard@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm text-white mt-8">Copyright 2024. All rights reserved</p>
    </div>
  )
}

export default Footer
