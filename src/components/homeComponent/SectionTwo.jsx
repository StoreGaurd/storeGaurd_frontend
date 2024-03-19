import {chooseUsData, faqData, testimonialData} from '../../data'; 
import aboutImg from "../../utils/images/aboutImg.png"
import arrowDown  from "../../utils/icons/arrowDown.png" 
import bottomSun from '../../utils/images/bottomSun.png';
import featureOne from "../../utils/images/featureOne.png"
import featureTwo from "../../utils/images/featureTwo.png"
import featureThree from "../../utils/images/featureThree.png"
import rock from '../../utils/images/rock.png';
import topSun from '../../utils/images/topSun.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SectionTwo = () => {
    const [visibleAnswers, setVisibleAnswers] = useState({})

    const handleDropdown = (index) => {
        setVisibleAnswers((prev) => ({
            ...prev,
            [index]: !prev[index], 
        }));
    }
  return (
    <>
        {/* about section */}
        <div className="text-center py-5 md:py-10 md:px-5 lg:px-24" id='about'>
            <p className="text-white text-3xl md:text-4xl font-semibold mb-4">About Us</p>
            <div className="flex items-center bg-[image:var(--image-url)] bg-center px-10 text-xl font-semibold text-white h-[350px] md:h-[250px]" style={{'--image-url': `url(${aboutImg})` }}><p>StoreGuard offers a groundbreaking solution to help people store, manage and retrieve their receipts efficiently. With its decentralized architecture and innovative features, we set the standard for the safety of your receipts in this digital age.</p></div>
        </div>
        {/* features section */}
        <div className="text-center py-5 md:py-10 px-3 md:px-5 lg:px-24">
            <p className='text-white text-3xl md:text-4xl font-semibold my-3 md:my-6'>Features</p>
            <div className="flex flex-col justify-center items-center gap-6">
                <div className="flex md:flex-row flex-col justify-start items-center gap-8">
                    <img src={featureOne} className="w-full md:w-[380px] h-[250px] md:h-[280px] rounded-md"/>
                    <div className="w-full md:w-[50%] text-start">
                        <p className="text-3xl md:text-4xl mb-2 text-white">Receipt Upload and Retrieval</p>
                        <p className="text-sm leading-[20px] text-white">Allows you to upload images or digital copies of your receipts effortlessly. Upload receipts using various file formats. Options to add metadata such as date, merchant and amount. Feedback on successful upload and confirmation of receipt. You can also recover misplaced or lost receipts quickly,</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                    <img src={featureTwo} className="w-[380px] h-[280px] rounded-md"/>
                    <div className="w-full md:w-[40%] text-start">
                        <p className="text-3xl md:text-4xl mb-2 text-white">User Authentication</p>
                        <p className="text-sm leading-[20px] text-white">Implement decentralized identity solutions such DIDs and Vcs to authenticate your data securely without relying on centralized authorities making sure that only authorized users can access your receipts</p>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col justify-start items-center gap-8">
                    <img src={featureThree} className="w-[380px] h-[280px] rounded-md"/>
                    <div className="w-full md:w-[40%] text-start">
                        <p className="text-3xl md:text-4xl mb-2 text-white">Receipt Management</p>
                        <p className="text-sm leading-[20px] text-white">This feature helps you to manage your receipts efficiently with features such as categorization, tagging, and searching. You can easily organize and locate your receipt with ease.</p>
                    </div>
                </div>
                <button className="cursor-pointer py-3 px-10 text-[#fff] bg-[#FF8D22] rounded-xl text-sm font-semibold">
                    <Link to='/dashboard'>Learn more</Link>
                </button>
            </div>
        </div>
        {/*why choose us section */}
        <div className="text-center py-5 md:py-10 px-3 md:px-5 lg:px-24">
            <p className="text-white text-4xl font-semibold mb-6">Why Choose Us</p>
            <div className="flex md:flex-row flex-col justify-around items-center gap-6">
                {chooseUsData.map((item, index) => (
                <div
                    key={index}
                    className={`flex flex-col items-center ${item.backgroundColor} p-4 w-full md:w-[250px] h-[270px] rounded-xl shadow-lg`}
                >
                    <p className="text-white text-center">{item.title}</p>
                    <p className="text-white m-auto">{item.description}</p>
                </div>
                ))}
            </div>
        </div>
        {/* integration section*/}
        <div className="text-center py-5 md:py-10 px-3 md:px-5 lg:px-24">
            <p className="text-white text-3xl md:text-4xl font-semibold mb-4">Integration</p>
            <div className="px-4 md:px-16 lg:px-24 py-4 md:h-[300px] flex flex-col justify-center items-center gap-6 bg-slate-900 bg-opacity-40 rounded-lg shadow-md">
                <p className="text-white text-xl text-start">seamless connection to decentralized storage platforms like DIDs and VCs for secure receipt upload and storage. The integration of blockchain technology for timestamping receipts to ensure data immutability and transparency in receipt management. </p>
                <button className="cursor-pointer py-3 px-10 text-[#fff] bg-[#FF8D22] rounded-xl text-sm font-semibold">
                    <Link to='/dashboard'>Get Started</Link>
                </button>
            </div>
        </div>
        {/* testimonials section*/}
        <div className="text-center py-5 md:py-10 px-3 md:px-5 lg:px-24">
            <p className="text-white text-3xl md:text-4xl font-semibold mb-4">Testimonials</p>
            <div className="relative p-4 md:pl-4 md:pr-10 py-4 md:h-[400px] flex flex-col justify-center bg-slate-900 bg-opacity-20 rounded-lg shadow-md">
                <div className="flex md:flex-row flex-col justify-between item-center">
                <div className="w-full md:w-1/4 mb-4">
                    <p className="text-white text-2xl font-semibold text-center md:text-start">
                    Testimonials
                    </p>
                    <p className="font-semibold text-white text-center md:text-start">
                    See feedbacks from our students
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center md:items-start md:flex-row gap-5">
                    {testimonialData.map((student, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-6 bg-white rounded-xl shadow-md w-full md:w-[230px] h-[200px] md:h-[250px] px-3 py-5"
                    >
                        <div className="flex gap-4 items-center">
                        <img src={student.image} alt="" />
                        <div className="text-start">
                            <p className="text-sm font-semibold">{student.name}</p>
                            <p className="text-xs">{student.university}</p>
                            <p className="text-xs">{student.year}</p>
                        </div>
                        </div>
                        <p className="text-xs text-start">{student.feedback}</p>
                    </div>
                    ))}
                </div>
                </div>
                <img src={topSun} alt="" className="absolute top-2 right-2 hidden md:block" />
                <img src={bottomSun} alt="" className="absolute bottom-2 right-2 hidden md:block" />
                <img src={rock} alt="" className="absolute bottom-2 left-2 hidden md:block" />
            </div>
        </div>
        {/* FAQs section*/}
        <div className="text-center py-5 md:py-10 px-3 md:px-5 lg:px-24">
            <p className="text-white text-3xl md:text-4xl font-semibold mb-4">FAQs</p>
            <p className="text-white text-2xl md:text-3xl mb-4">See Frequently Asked Questions</p>
            <div className="flex flex-col gap-4 bg-gradient-to-r from-[#0E306D] to-[#901216] p-2 md:p-6 rounded-lg">
                {faqData.map((faq, index) => (
                <div key={index} className="flex flex-col">
                    <div className='flex justify-between items-center pb-1 border-white border-b-2'>
                        <p className="text-white text-xs md:text-xl">{faq.question}</p>
                        <div className="bg-[#BF1212] rounded-[50%] p-1 cursor-pointer" onClick={() => handleDropdown(index)}>
                            <img src={arrowDown} alt="" className={visibleAnswers[index] ? '-rotate-180' : ''}/>
                        </div>
                    </div>
                    {visibleAnswers[index] && ( <p className='text-white text-xs md:text-xl bg-[#222] text-start pt-2 pb-6 px-2'>{faq.answer}</p>)}
                </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default SectionTwo
