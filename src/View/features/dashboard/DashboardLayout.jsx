import React from "react";
import Cards from "./Cards";
import Spinner from "../../UI/Spinner";
import { useRecentBookings } from "../../../ViewModal/Hooks/DashboardHooks/useRecentBookings";
import { useRecentStays } from "../../../ViewModal/Hooks/DashboardHooks/useRecentStays";
import { useCabins } from "../../../ViewModal/Hooks/CabinHooks/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";

function DashboardLayout() {
  const { bookings, isLoading } = useRecentBookings();
  const { stays, isLoading: isStaying, confirmedStays, numDays } = useRecentStays();

  const { cabins, isLoading: isLoading3, isError } = useCabins();

  const cabinsCount = cabins ? cabins.length : 0;

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Activity */}
        <div className="bg-customGray-50 border-customGray-900 dark:border dark:border-customGray-700 dark:bg-Dark-100 rounded-md p-3 md:p-4">
          <h2 className="text-lg md:text-xl font-bold border-b dark:border-customGray-700 pb-3 md:pb-4">
            Today
          </h2>

          {/* Activity Item */}
          <div className="grid grid-cols-1 gap-4 ">
            <div className="flex flex-col flex-wrap sm:flex-row justify-between items-start sm:items-center py-3 border-b dark:border-customGray-700 gap-2 sm:gap-0">
              <span className="dark:bg-[#075985] dark:text-[#E0F2FE] bg-[#d0e8f8] text-[#075985] p-1 px-3 flex  justify-center items-center text-sm font-semibold rounded-full">
                Departing
              </span>
              <h2 className="flex gap-2 justify-start items-center font-semibold">
                <span>⛳</span>Jonas Schmedttmann
              </h2>
              <span className="font-semibold">5 nights</span>
              <button className="bg-customOrange-900 text-customOrange-50 text-sm font-semibold rounded-md py-1 px-2">
                CHECK OUT
              </button>
            </div>

            <div className="flex flex-col flex-wrap sm:flex-row justify-between items-start sm:items-center py-3 border-b dark:border-customGray-700 gap-2 sm:gap-0">
              <span className="dark:bg-[#075985] dark:text-[#E0F2FE] bg-[#d0e8f8] text-[#075985] p-1 px-3 flex justify-center items-center text-sm font-semibold rounded-full">
                Departing
              </span>
              <h2 className="flex gap-2 justify-start items-center font-semibold">
                <span>⛳</span>Jonas Schmedttmann
              </h2>
              <span className="font-semibold">5 nights</span>
              <button className="bg-customOrange-900 text-customOrange-50 text-sm font-semibold rounded-md py-1 px-2">
                CHECK OUT
              </button>
            </div>

            <div className="flex flex-col flex-wrap sm:flex-row justify-between items-start sm:items-center py-3 border-b dark:border-customGray-700 gap-2 sm:gap-0">
              <span className="dark:bg-[#075985] dark:text-[#E0F2FE] bg-[#d0e8f8] text-[#075985] p-1 px-3 flex justify-center items-center text-sm font-semibold rounded-full">
                Departing
              </span>
              <h2 className="flex gap-2 justify-start items-center font-semibold">
                <span>⛳</span>Jonas Schmedttmann
              </h2>
              <span className="font-semibold">5 nights</span>
              <button className="bg-customOrange-900 text-customOrange-50 text-sm font-semibold rounded-md py-1 px-2">
                CHECK OUT
              </button>
            </div>

            <div className="flex flex-col flex-wrap sm:flex-row justify-between items-start sm:items-center py-3 border-b dark:border-customGray-700 gap-2 sm:gap-0">
              <span className="dark:bg-[#075985] dark:text-[#E0F2FE] bg-[#d0e8f8] text-[#075985] p-1 px-3 flex justify-center items-center text-sm font-semibold rounded-full">
                Departing
              </span>
              <h2 className="flex gap-2 justify-start items-center font-semibold">
                <span>⛳</span>Jonas Schmedttmann
              </h2>
              <span className="font-semibold">5 nights</span>
              <button className="bg-customOrange-900 text-customOrange-50 text-sm font-semibold rounded-md py-1 px-2">
                CHECK OUT
              </button>
            </div>
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
