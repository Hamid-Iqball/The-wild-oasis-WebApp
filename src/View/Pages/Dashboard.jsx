import DashboardLayout from "../features/dashboard/DashboardLayout";
import Filter from "../UI/Filter";


function Dashboard() {
  return (
    <div className="p-6 ">
      <div className="flex justify-between items-center">

      <h2 className="text-customOrange-800 text-3xl font-[500] ">Dashboard</h2>
  
      <Filter filterField='last' filteringOptions={[
        {value:'7', label:'Last 7 days'},
        {value:'30', label:'Last 30 days'},
        {value:'90', label:'Last 90 days'},
    
      ]} />
      </div>
      <DashboardLayout />

     
    </div>
  );
}

export default Dashboard;
