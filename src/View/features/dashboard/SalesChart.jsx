import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import useTheme from "../../../ViewModal/Hooks/ThemeHooks/useTheme";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";

function SalesChart({ bookings, numDays }) {
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    const totalSales = bookings
      .filter((booking) => isSameDay(date, new Date(booking.created_at)))
      .reduce((acc, curr) => acc + curr.totalPrice, 0);

    const extrasSales = bookings
      .filter((booking) => isSameDay(date, new Date(booking.created_at)))
      .reduce((acc, curr) => acc + (curr.extrasPrice || 0), 0); // Assuming extrasPrice exists

    return {
      label: format(date, "MMM dd"),
      totalSales,
      extrasSales,
    };
  });

  console.log(data); // Debugging: Check if data is formatted correctly

  const { theme } = useTheme();

  const colors =
    theme === "dark"
      ? {
          totalSales: { stroke: "#4f46e5", fill: "#4f46e5" }, // Fixed totalSales color
          extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
          text: "#e5e7eb",
          background: "#18212f",
          grid: "#334155",
        }
      : {
          totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
          extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
          text: "#374151",
          background: "#fff",
          grid: "#e5e7eb",
        };

  return (
    <div className="bg-gray-50 p-3 rounded-md dark:bg-Dark-100">
      <h2>Sales</h2>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <XAxis dataKey="label" tick={{ fill: colors.text }} stroke={colors.text} />
          <YAxis unit="$" tick={{ fill: colors.text }} stroke={colors.text} />
          <CartesianGrid strokeDasharray="4" stroke={colors.grid} />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={2}
            name="Total Sales"
            unit="$"
          />
          <Area
            dataKey="extrasSales"
            type="monotone"
            stroke={colors.extrasSales.stroke}
            fill={colors.extrasSales.fill}
            strokeWidth={2}
            name="Extras Sales"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;
