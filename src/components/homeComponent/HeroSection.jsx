import { Link } from 'react-router-dom'
import techyjaunt from '../../utils/icons/techyjaunt.png'
const HeroSection = () => {
  return (
    <div>
        <div className="text-center px-5 lg:px-24">
            <div className="text-white h-[90vh] flex flex-col items-center justify-center">
                <p className="font-semibold md:text-2xl">Welcome To StoreGuard</p>
                <p className="font-semibold text-4xl md:text-[50px] my-6 leading-[50px] md:leading-[76px]">Your Secure Receipt <br/>Management Solution</p>
                <p className="font-normal mb-6">Store, organize and retrieve your receipts effortlessly with us.</p>
                <button className="cursor-pointer py-3 px-10 bg-[#FF8D22] rounded-xl text-sm font-semibold"> 
                    <Link to='/dashboard'>Get Started</Link>
                </button>
            </div>
            <div className='mb-8'>
                <p className="text-white text-3xl md:text-4xl mb-5">Supported by</p>
                <div className='flex justify-center gap-20 items-center'>
                    <div>
                        <img src={techyjaunt} />
                        <p className='text-[#5460F5] text-xl'>TechyJaunt</p>
                    </div>
                    <div>
                        <img src={techyjaunt} />
                        <p className='text-[#5460F5] text-xl'>TechyJaunt</p>
                    </div>
                    <div className='hidden md:block'>
                        <img src={techyjaunt} />
                        <p className='text-[#5460F5] text-xl'>TechyJaunt</p>
                    </div>
                    <div className='hidden md:block'>
                        <img src={techyjaunt} />
                        <p className='text-[#5460F5] text-xl'>TechyJaunt</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
