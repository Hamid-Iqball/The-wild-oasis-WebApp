import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Filter from "../UI/Filter";


function Dashboard() {
  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h2 className="text-customOrange-800 dark:text-customOrange-500 text-2xl md:text-3xl font-[500]">Dashboard</h2>
        <DashboardFilter />
      </div>
      <DashboardLayout />
    </div>
  );
}

export default Dashboard;
