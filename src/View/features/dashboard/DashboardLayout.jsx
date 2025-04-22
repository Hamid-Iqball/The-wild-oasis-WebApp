import React from "react";
import Cards from "./Cards";
import Spinner from "../../UI/Spinner";
import { useRecentBookings } from "../../../ViewModal/Hooks/DashboardHooks/useRecentBookings";
import { useRecentStays } from "../../../ViewModal/Hooks/DashboardHooks/useRecentStays";
import { useCabins } from "../../../ViewModal/Hooks/CabinHooks/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import { useTodayActivity } from "../../../ViewModal/Hooks/BookingHooks/useTodayActivity";
import { Link } from "react-router-dom";
import { useCheckOut } from "../../../ViewModal/Hooks/BookingHooks/useCheckOut";

function DashboardLayout() {
  const { bookings, isLoading } = useRecentBookings();
  const { stays, isLoading: isStaying, confirmedStays, numDays } = useRecentStays();
  const { cabins, isLoading: isLoading3, isError } = useCabins();
  const cabinsCount = cabins ? cabins.length : 0;
  const  {stays:activityStays, isLoading:isActivityLoading} =useTodayActivity()
 const {checkOut, isCheckingOut} = useCheckOut()


  console.log(activityStays)

  if (isLoading || isStaying || isLoading3) {
    return <Spinner />;
  }

  return (
    <section className="flex flex-col gap-6 md:gap-8">
      <Cards
        bookings={bookings}
        confirmedStays={confirmedStays}
        cabinsCount={cabinsCount}
        numDays={numDays}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Activity */}
        <div className="bg-customGray-50 border-customGray-900 dark:border dark:border-customGray-700 dark:bg-Dark-100 rounded-md p-3 md:p-4">
          <h2 className="text-lg md:text-xl font-bold border-b dark:border-customGray-700 pb-3 md:pb-4">
            Today Activity
          </h2>

          {/* Activity Item */}
          <div className="grid grid-cols-1 gap-4 ">

          {
          !isActivityLoading 
            ? activityStays?.length > 0 
              ? activityStays.map((activity, index) => (
                  <div key={index} className="flex flex-col flex-wrap sm:flex-row justify-between items-start sm:items-center py-3 border-b dark:border-customGray-700 gap-2 sm:gap-0">
                  {activity.status==="unconfirmed"  && <span className="dark:bg-green-300  dark:text-green-950 bg-green-100 text-[#075985] p-1 px-3 flex justify-center items-center text-sm font-semibold rounded-full">
                    {activity.status}
                    </span>}
                  {activity.status==="checked-in"  && <span className="dark:bg-[#075985] dark:text-[#E0F2FE] bg-[#d0e8f8] text-[#075985] p-1 px-3 flex justify-center items-center text-sm font-semibold rounded-full">
                    {activity.status}
                    </span>}



                    <h2 className="flex gap-2 justify-start items-center font-semibold">
                      <span><img src={activity.guests.countryFlag} alt={activity.guests.country} className="w-5" /></span> 
                      {activity.guests.fullName}
                    </h2>
                    <span className="font-semibold">{activity.numNights} nights</span>
                  {activity.status==="unconfirmed" ?  <Link to={`/checkin/${activity.id}`} className="bg-customOrange-900 dark:bg-orange-500 text-customOrange-50 text-sm font-semibold rounded-md py-1 px-2">
                      CHECK IN
                    </Link> :( !isCheckingOut ? <button onClick={()=>checkOut(activity.id)} className="dark:bg-blue-500 bg-blue-800 text-customOrange-50 text-sm font-semibold rounded-md py-1 px-2" >CHECK OUT</button>:<Spinner/>)}
                  </div>
                ))
              : <div className="flex justify-center items-center p-2 font-semibold text-amber-600">No Activity Today</div>
            : <Spinner />
        }


          </div>
        </div>

        <div className="bg-customGray-50 border-customGray-900 dark:border dark:border-customGray-700 dark:bg-Dark-100 rounded-md p-3 md:p-4">
          <DurationChart confirmedStays={confirmedStays} />
        </div>
      </div>
      <div>
        <SalesChart bookings={bookings} numDays={numDays} />
      </div>
    </section>
  );
}

export default DashboardLayout;
