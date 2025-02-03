import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Filter from "../UI/Filter";


function Dashboard() {
  return (
    <div className="p-6 ">
      <div className="flex justify-between items-center">

      <h2 className="text-customOrange-800 text-3xl font-[500] ">Dashboard</h2>
  
      <DashboardFilter/>
      </div>
      <DashboardLayout />

     
    </div>
  );
}

export default Dashboard;
