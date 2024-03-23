import docs from "../../utils/icons/docs.png"
import deleteIcon from "../../utils/icons/delete.png"
import viewIcon from "../../utils/icons/view.png"

const DashbordContent = () => {
  return (
    <div className="bg-[#F9F9F9F9] w-full h-full pt-8 px-4 overflow-scroll">
    <p className="text-black font-extrabold text-2xl md:text-3xl mb-4">Hello Mary Daniels!</p>
    <p className="text-[15px] text-black">18/03/2024</p>
    <div>
        <p className="my-6 font-semibold">Document Access</p>
        <div className="flex md:flex-row flex-col flex-wrap gap-5 md:justify-start lg:justify-center">
            <div className="flex flex-col items-start justify-center bg-white shadow-md rounded-md p-4 w-full md:w-[30%] lg:w-[23%]">
                <p className="text-2xl md:text-3xl font-extrabold mb-6">100 Level</p>
                <p className="text-[15px]">10 files</p>
            </div>
            <div className="flex flex-col items-start justify-center bg-white shadow-md rounded-md p-4 w-full md:w-[30%] lg:w-[23%]">
                <p className="text-2xl md:text-3xl font-extrabold mb-6">200 Level</p>
                <p className="text-[15px]">10 files</p>
            </div>
            <div className="flex flex-col items-start justify-center bg-white shadow-md rounded-md p-4 w-full md:w-[30%] lg:w-[23%]">
                <p className="text-2xl md:text-3xl font-extrabold mb-6">300 Level</p>
                <p className="text-[15px]">10 files</p>
            </div>
            <div className="flex flex-col items-start justify-center bg-white shadow-md rounded-md p-4 w-full md:w-[30%] lg:w-[23%]">
                <p className="text-2xl md:text-3xl font-extrabold mb-6">400 Level</p>
                <p className="text-[15px]">10 files</p>
            </div>
        </div>
        <p className="my-6 font-semibold">Document Access</p>
        <div className="flex md:flex-row flex-col flex-wrap gap-5 md:justify-start lg:justify-center">
            <div className="flex flex-col items-start justify-center bg-white shadow-md rounded-md p-4 w-full md:w-[30%] lg:w-[23%]">
                <img src={docs} alt="" />
                <p className="text-2xl font-extrabold mb-6">Project</p>
                <p className="text-[15px]">10 files</p>
            </div>
            <div className="flex flex-col items-start justify-center bg-white shadow-md rounded-md p-4 w-full md:w-[30%] lg:w-[23%]">
                 <img src={docs} alt="" />
                <p className="text-2xl font-extrabold mb-6">Acceptance Fee</p>
                <p className="text-[15px]">10 files</p>
            </div>
            <div className="flex flex-col items-start justify-center bg-white shadow-md rounded-md p-4 w-full md:w-[30%] lg:w-[23%]">
                 <img src={docs} alt="" />
                <p className="text-2xl font-extrabold mb-6">School Transit</p>
                <p className="text-[15px]">10 files</p>
            </div>
            <div className="flex flex-col items-start justify-center bg-white shadow-md rounded-md p-4 w-full md:w-[30%] lg:w-[23%]">
                 <img src={docs} alt="" />
                <p className="text-2xl font-extrabold mb-6">Portfolio</p>
                <p className="text-[15px]">10 files</p>
            </div>
        </div>
        <p className="my-6 font-semibold">Recent Files</p>
        <div className="pb-6 grid bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between gap-4 w-full mb-2">
                <p className="font-semibold w-2/3 md:w-1/3 text-start">Name</p>
                <p className="hidden md:block font-semibold w-1/3 text-center">Last Modified</p>
                <p className="font-semibold w-1/3 text-end">Action</p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between gap-4 w-full border p-2 rounded-md cursor-pointer hover:bg-[#E4EDF1]">
                    <p className="text-[12px] lg:text-sm w-2/3 md:w-1/3">My Course Registration 100l</p>
                    <p className="hidden md:block text-[12px] lg:text-sm w-1/3 text-center">Sept. 10th 2019|12:09</p>
                    <div className="w-1/3 flex justify-end gap-2">
                        <img src={deleteIcon} alt="" />
                        <img src={viewIcon} alt="" />
                    </div>
                </div>
                <div className="flex justify-between gap-4 w-full border p-2 rounded-md cursor-pointer hover:bg-[#E4EDF1]">
                    <p className="text-[12px] lg:text-sm w-2/3 md:w-1/3 text-start">School Transcript</p>
                    <p className="hidden md:block text-[12px] lg:text-sm w-1/3 text-center">Sept. 10th 2019|12:09</p>
                    <div className="w-1/3 flex justify-end gap-2">
                        <img src={deleteIcon} alt="" />
                        <img src={viewIcon} alt="" />
                    </div>
                </div>
                <div className="flex justify-between gap-4 w-full border p-2 rounded-md cursor-pointer hover:bg-[#E4EDF1]">
                    <p className="text-[12px] lg:text-sm w-2/3 md:w-1/3 text-start">Library Receipt</p>
                    <p className="hidden md:block text-[12px] lg:text-sm w-1/3 text-center">Sept. 10th 2019|12:09</p>
                    <div className="w-1/3 flex justify-end gap-2">
                        <img src={deleteIcon} alt="" />
                        <img src={viewIcon} alt="" />
                    </div>
                </div>
                <div className="flex justify-between gap-4 w-full border p-2 rounded-md cursor-pointer hover:bg-[#E4EDF1]">
                    <p className="text-[12px] lg:text-sm w-2/3 md:w-1/3 text-start">Medical Clearance</p>
                    <p className="hidden md:block text-[12px] lg:text-sm w-1/3 text-center">Sept. 10th 2019|12:09</p>
                    <div className="w-1/3 flex justify-end gap-2">
                        <img src={deleteIcon} alt="" />
                        <img src={viewIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default DashbordContent
