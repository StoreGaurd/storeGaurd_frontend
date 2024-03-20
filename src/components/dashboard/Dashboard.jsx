import DashboardLayout from "../../layout/DashboardLayout"
import DashbordContent from "./DashbordContent"
import MobileDashboardLayout from "../../layout/MobileDashboardLayout"

const Dashboard = () => {
    
  return (
    <div>
        <div className="hidden md:block">
            <DashboardLayout>
                <DashbordContent />
            </DashboardLayout>
        </div>
        <div className="block md:hidden">
            <MobileDashboardLayout>
                <DashbordContent />
            </MobileDashboardLayout>
        </div>
    </div>
   
  )
}

export default Dashboard
