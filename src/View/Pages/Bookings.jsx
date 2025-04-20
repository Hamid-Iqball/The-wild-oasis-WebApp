import { useBookings } from "../../ViewModal/Hooks/BookingHooks/useBookings";
import BookingTable from "../features/Bookings/BookingTable";
import Filter from "../UI/Filter";

import SortingComp from "../UI/SortingComp";
import Spinner from "../UI/Spinner";

function Bookings() {
  const { isLoading } = useBookings();

  if (isLoading) return <Spinner />;

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
        <h2 className="text-customOrange-800 dark:text-customOrange-600 text-2xl sm:text-3xl font-[500]">
          Bookings
        </h2>

        <div className="flex flex-col sm:flex-row   sm:w-auto items-start xs:items-center gap-4">
          <Filter
            filterField="status"
            filteringOptions={[
              { value: "all", label: "All" },
              { value: "checked-out", label: "Checked out" },
              { value: "checked-in", label: "Checked in" },
              { value: "unconfirmed", label: "Unconfirmed" },
            ]}
          />

          <SortingComp
            sortingOptions={[
              { value: "startDate-desc", label: "Sort by date (recent first)" },
              { value: "startDate-asc", label: "Sort by date (earlier first)" },
              { value: "totalPrice-desc", label: "Sort by amount (high first)" },
              { value: "totalPrice-asc", label: "Sort by amount (low first)" },
            ]}
          />
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <BookingTable />
      </div>
    </div>
  );
}

export default Bookings;
