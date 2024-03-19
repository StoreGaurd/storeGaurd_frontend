import { useNavigate } from 'react-router-dom'
import storeGaurdIcon from "../utils/icons/storegaurd.png"
import { Link} from 'react-router-dom'
import { HashLink } from "react-router-hash-link"

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
        className="flex items-center cursor-pointer"
      >
        <Link to='/'>
          <div className="flex justify-center items-center gap-2">
            <img src={storeGaurdIcon} className=''/>
            <p className="text-white font-semibold text-xl">
              <span className='oldEnglish'>Store</span><span className='Jacques'>Gaurd</span>
            </p>
          </div>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-6 font-normal">
        <div className="flex items-center gap-7">
          <p
            className="text-white cursor-pointer hover:text-[#FF8D22]"
          >
            <Link to="/">
              Home
            </Link>
          </p>
          <p
            className="text-white cursor-pointer hover:text-[#FF8D22]"
          >
            <Link to='/signin'>
              Receipt Upload
            </Link>
          </p>
          <p
            className="text-white cursor-pointer hover:text-[#FF8D22]"
          >
            <HashLink smooth to='/#about'>
              About Us
            </HashLink>
          </p>
          <p
            className="text-white cursor-pointer hover:text-[#FF8D22]"
          >
            <HashLink smooth to='/#contact'>
              Contact Us
            </HashLink>
          </p>
          {access_token && (
            <p
              className="text-white cursor-pointer hover:text-[#FF8D22]"
            >
              <Link to='/dashbord'>
                Dashboard
              </Link>
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
            className="cursor-pointer py-3 px-10 text-[#fff] bg-[#FF8D22] rounded-xl text-sm font-semibold"
          >
            <Link to='/register'>
              Register
            </Link>
          </p>
        )}
      </div>
    </div>
  )
}

export default DesktopHeader
