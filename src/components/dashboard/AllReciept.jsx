import deleteIcon from "../../utils/icons/delete.png"
import viewIcon from "../../utils/icons/view.png"

const AllReciepts = () => {
  return (
    <div className="bg-[#F9F9F9F9] w-full h-full pt-8 px-4 overflow-scroll">
    <p className="text-black font-extrabold text-2xl md:text-3xl mb-4">All receipts</p>
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
  )
}

export default AllReciepts
