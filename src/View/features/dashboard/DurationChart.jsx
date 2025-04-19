
import React, { useEffect } from "react";
import { Pie, PieChart, ResponsiveContainer, Cell, Legend, Tooltip } from "recharts";
import useTheme from "../../../ViewModal/Hooks/ThemeHooks/useTheme";
import { data } from "autoprefixer";

const startDataLight = [
    {
      duration: "1 night",
      value: 0,
      color: "#ef4444",
    },
    {
      duration: "2 nights",
      value: 3,
      color: "#f97316",
    },
    {
      duration: "3 nights",
      value: 5,
      color: "#eab308",
    },
    {
      duration: "4-5 nights",
      value: 4,
      color: "#84cc16",
    },
    {
      duration: "6-7 nights",
      value: 9,
      color: "#22c55e",
    },
    {
      duration: "8-14 nights",
      value: 2,
      color: "#14b8a6",
    },
    {
      duration: "15-21 nights",
      value: 0,
      color: "#3b82f6",
    },
    {
      duration: "21+ nights",
      value: 0,
      color: "#a855f7",
    },
  ];
  
  const startDataDark = [
    {
      duration: "1 night",
      value: 0,
      color: "#b91c1c",
    },
    {
      duration: "2 nights",
      value: 3,
      color: "#c2410c",
    },
    {
      duration: "3 nights",
      value: 1,
      color: "#a16207",
    },
    {
      duration: "4-5 nights",
      value: 0,
      color: "#4d7c0f",
    },
    {
      duration: "6-7 nights",
      value: 5,
      color: "#15803d",
    },
    {
      duration: "8-14 nights",
      value: 0,
      color: "#0f766e",
    },
    {
      duration: "15-21 nights",
      value: 9,
      color: "#1d4ed8",
    },
    {
      duration: "21+ nights",
      value: 0,
      color: "#7e22ce",
    },
  ];

function DurationChart({ confirmedStays,stays }) {

const  {theme} = useTheme()

const startData = theme==='light' ? [...startDataLight]:[...startDataDark]
    function prepareData(startData, stays) {
        // A bit ugly code, but sometimes this is what it takes when working with real data 😅
      
        function incArrayValue(arr, field) {
          return arr.map((obj) =>
            obj.duration === field ? { ...obj, value: obj.value + 1 } : obj
          );
        }
      
        const data = stays
          .reduce((arr, cur) => {
            const num = cur.numNights;
            if (num === 1) return incArrayValue(arr, "1 night");
            if (num === 2) return incArrayValue(arr, "2 nights");
            if (num === 3) return incArrayValue(arr, "3 nights");
            if ([4, 5].includes(num)) return incArrayValue(arr, "4-5 nights");
            if ([6, 7].includes(num)) return incArrayValue(arr, "6-7 nights");
            if (num >= 8 && num <= 14) return incArrayValue(arr, "8-14 nights");
            if (num >= 15 && num <= 21) return incArrayValue(arr, "15-21 nights");
            if (num >= 21) return incArrayValue(arr, "21+ nights");
            return arr;
          }, startData)
          .filter((obj) => obj.value > 0);
      
        return data;
      }


  return (
    <div>
      <h3 className="text-xl font-bold">Stay duration summary</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={startDataDark}
            nameKey="duration"
            dataKey="value" // Corrected from "values" to "value"
            innerRadius={80}
            outerRadius={120}
            cx="40%"
            cy="50%"
            paddingAngle={3}
          >
            {startDataLight.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
            ))}
          </Pie>
          <Tooltip/>
          {/* <Legend verticalAlign="middle" align="right" width="30%" layout="vertical" iconSize={15} iconType="circle" /> */}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DurationChart;
