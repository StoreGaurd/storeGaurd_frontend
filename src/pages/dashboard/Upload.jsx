import ReceiptUpload from "../../components/dashboard/ReceiptUpload"
import DashboardLayout from "../../layout/DashboardLayout"
import MobileDashboardLayout from "../../layout/MobileDashboardLayout"
const Upload = () => {
  return (
    <div>
        <div className="hidden md:block">
            <DashboardLayout>
                <ReceiptUpload />
            </DashboardLayout>
        </div>
        <div className="block md:hidden">
            <MobileDashboardLayout>
                <ReceiptUpload />
            </MobileDashboardLayout>
        </div>
    </div>
  )
}

export default Upload
