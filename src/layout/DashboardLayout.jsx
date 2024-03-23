import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import storeGuardIcon from '../utils/icons/storegaurd.png';
import dummy from "../utils/icons/dummy.png";
import notification from "../utils/icons/notification.png";
import overview from "../utils/icons/overview.png";
import receipt from "../utils/icons/reciept.png";
import files from "../utils/icons/files.png";
import settings from '../utils/icons/settings.png';
import arrowDown from '../utils/icons/arrowDown.png';
import logoutIcon from '../utils/icons/logout.png';
import UseClickAway from '../common/UseClickAway';

const DashboardLayout = ({ children }) => {
    const [showFilesContent, setShowFilesContent] = useState(false);
    const [showReceiptContent, setShowReceiptContent] = useState(false);
    const [viewProfile, setViewProfile] = useState(false);
    const dummyRef = useRef(null);
    const profileRef = useRef(null);
    const excludedRefs = [dummyRef];

  UseClickAway(profileRef, () => setViewProfile(false), excludedRefs);

    const openFileContent = () => {
        setShowFilesContent(!showFilesContent);
    };

    const openReceiptContent = () => {
        setShowReceiptContent(!showReceiptContent);
    };

    const openProfileContent = () => {
        setViewProfile(!viewProfile);
    };

    return (
        <div className='relative'>
            <div className='flex justify-between items-center bg-white px-10 py-6 shadow-md h-[10vh]'>
                <Link to="/">
                    <img src={storeGuardIcon} alt="" />
                </Link>
                <div className='flex justify-center items-center gap-6'>
                    <img src={notification} alt="" className='cursor-pointer' />
                    <img src={dummy} alt="" className='cursor-pointer w-10 h-10' onClick={openProfileContent} ref={dummyRef} />
                    <p className='font-inter text-base text-black'>Mary Daniels</p>
                </div>
            </div>
            {viewProfile &&
            (<div ref={profileRef} className='text-poppins absolute top-[10vh] right-8 py-2 flex flex-col items-center justify-center gap-6 w-[250px] shadow-lg rounded-md z-10 bg-white'>
                <img src={dummy} alt="" className='cursor-pointer' />
                <p className='text-xs font-bold'>Mary Daniels</p>
                <p className='text-[10px]'>Imachristt328@gmail.com</p>
                <div className='w-full'>
                    <p className='text-xs font-semibold px-5 py-2'>Settings</p>
                    <hr />
                    <p className='text-xs text-red-500 px-5 py-2'>Log Out</p>
                </div>
            </div>
            )}
            <div className='flex item-center h-[90vh] z-10'>
                <div className='flex flex-col items-center justify-between bg-[#131021] pt-10 shadow-sm md:w-[30%] lg:w-[20%] h-[90vh]'>
                    <div className='flex flex-col items-start justify-center gap-10 z-10'>
                        <Link to="/dashboard">
                            <div className='flex items-center justify-center gap-4 cursor-pointer'>
                                <img src={overview} alt="" className='w-6 h-6' />
                                <p className='text-xl text-[#FF8D22]'>Overview</p>
                            </div>
                        </Link>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='flex items-center justify-center gap-4 cursor-pointer' onClick={openReceiptContent}>
                                <img src={receipt} alt="" className='w-6 h-6' />
                                <p className='text-xl text-white'>Receipt</p>
                                <img src={arrowDown} alt="" className={showReceiptContent ? '-rotate-180' : 'rotate-360'} />
                            </div>
                            {showReceiptContent && (
                                <div className='text-white flex flex-col gap-3 mt-3'>
                                    <p className='cursor-pointer text-[13px]'>Upload</p>
                                    <p className='cursor-pointer text-[13px]'>All receipts</p>
                                </div>
                            )}
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='flex items-center justify-center gap-4 cursor-pointer' onClick={openFileContent}>
                                <img src={files} alt="" className='w-6 h-6' />
                                <p className='text-xl text-white'>My Files</p>
                                <img src={arrowDown} alt="" className={showFilesContent ? '-rotate-180' : 'rotate-360'} />
                            </div>
                            {showFilesContent && (
                                <div className='text-white flex flex-col gap-3 mt-3'>
                                    <p className='cursor-pointer text-[13px]'>School Fees</p>
                                    <p className='cursor-pointer text-[13px]'>Project</p>
                                    <p className='cursor-pointer text-[13px]'>Clearance</p>
                                </div>
                            )}
                        </div>
                        <div className='flex items-center justify-center gap-4 cursor-pointer'>
                            <img src={settings} alt="" className='w-6 h-6' />
                            <p className='text-xl text-white'>Settings</p>
                        </div>
                        <div className='flex items-center justify-center gap-4 cursor-pointer'>
                            <img src={logoutIcon} alt="" className='w-6 h-6' />
                            <p className='text-xl text-white'>Logout</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
