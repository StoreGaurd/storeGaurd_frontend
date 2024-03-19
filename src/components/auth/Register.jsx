import { useEffect } from 'react'
import storeGaurdIcon from '../../utils/icons/storegaurd.png'
import { Link } from 'react-router-dom'

const Register = () => {

    const handleCallbackResponse = (response) =>{
        console.log('google response', response.credentials)
    } 

    useEffect(()=>{
        /* global google */
        google.accounts.id.initialize({
            client_id: "674864356084-nro7otb59q30qj43o507679uhbdb6s9k.apps.googleusercontent.com", 
            callback: handleCallbackResponse
        })

        google.accounts.id.renderButton(
            document.getElementById('signinDiv'), 
            {theme: "outline", size: "large"}

        )

    }, [])
  return (
    <div className='flex'>
      <div className="registration flex justify-center items-center h-[90vh] w-1/2">
        <div className='bg-[#0C2C6833] py-10 px-12 mx-10'>
            <div
                className="flex items-center justify-start cursor-pointer mb-10"
            >
                <Link to='/'>
                <div className="flex items-center gap-2">
                    <img src={storeGaurdIcon} className=''/>
                    <p className="text-white font-semibold text-xl">
                        <span className='oldEnglish'>Store</span><span className='Jacques'>Gaurd</span>
                    </p>
                </div>
                </Link>
            </div>
            <div>
                <p className='text-4xl font-semibold text-white mb-10'>Your Secure Receipt Management Solution</p>
                <p className='text-white'>Store, organize and retrieve your receipts effortlessly with us.</p>
            </div>
        </div>
      </div>
        <div className='w-1/2 bg-white'>
            <div id='signinDiv'></div>
        </div>
    </div>
  )
}

export default Register
