import { useNavigate } from 'react-router-dom'
import storeGaurdIcon from "../utils/icons/storegaurd.png"

const DesktopHeader = () => {
  const history = useNavigate()
//   const cookie = new Cookies()
  const access_token = false

  const handleSignout = () => {
    history('/')
    window.location.reload()
  }

  return (
    <div className="flex justify-between py-4 px-2 md:px-5 lg:px-20">
      <div
        onClick={() => history('/')}
        className="flex items-center cursor-pointer"
      >
        <div className="flex justify-center items-center gap-2">
          <img src={storeGaurdIcon} className=''/>
          <p className="text-white font-semibold text-xl">
            <span className='oldEnglish'>Store</span><span className='Jacques'>Gaurd</span>
          </p>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6 font-normal">
        <div className="flex items-center gap-7">
          <p
            onClick={() => history('/about')}
            className="text-white cursor-pointer border-b-2 border-[#FF8D22]"
          >
            Home
          </p>
          <p
            onClick={() => history('/contact')}
            className="text-white cursor-pointer"
          >
            Receipt Upload
          </p>
          <p
            onClick={() => history('/contact')}
            className="text-white cursor-pointer"
          >
            About Us
          </p>
          <p
            onClick={() => history('/contact')}
            className="text-white cursor-pointer"
          >
            Contact Us
          </p>
          {access_token && (
            <p
              onClick={() => history('/dashboard')}
              className="text-white cursor-pointer"
            >
              Dashboard
            </p>
          )}
        </div>
        {access_token ? (
          <p
            onClick={handleSignout}
            className="cursor-pointer py-3 px-10 text-[#fff] bg-[#FF8D22] rounded-xl text-sm font-semibold"
          >
            Sign out
          </p>
        ) : (
          <p
            onClick={() => history('/login')}
            className="cursor-pointer py-3 px-10 text-[#fff] bg-[#FF8D22] rounded-xl text-sm font-semibold"
          >
            Register
          </p>
        )}
      </div>
    </div>
  )
}

export default DesktopHeader
