import AllReciepts from "../../components/dashboard/AllReciept"
import DashboardLayout from "../../layout/DashboardLayout"
import MobileDashboardLayout from "../../layout/MobileDashboardLayout"
const Upload = () => {
  return (
    <div>
        <div className="hidden md:block">
            <DashboardLayout>
                <AllReciepts />
            </DashboardLayout>
        </div>
        <div className="block md:hidden">
            <MobileDashboardLayout>
                <AllReciepts />
            </MobileDashboardLayout>
        </div>
    </div>
  )
}

export default Upload
