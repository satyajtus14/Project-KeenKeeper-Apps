import React, { useContext } from "react";
import { ContactHistoryContext } from "../context/ContactHistoryContext";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const Stats = () => {
  const { callLog, videoLog, textLog } = useContext(ContactHistoryContext);
  console.log(callLog, videoLog, textLog, "Access context data:");

  const data = [
    { name: "Text", value: textLog.length, fill: "#8027F5" },
    { name: "Call", value: callLog.length, fill: "#244d3f" },
    { name: "Video", value: videoLog.length, fill: "#5BB078" },
  ];

  return (
    <div className="container mx-auto my-5 shadow p-4 md:p-8 rounded-md border border-slate-300">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12">
        Friendship Analytics
      </h2>

      <div className="card bg-base-100 shadow border border-slate-300">
        <div className="card-body space-y-4">
          <h3 className="card-title text-[#244d3f] text-lg md:text-2xl">
            By Interaction Type
          </h3>

          {callLog.length === 0 &&
          videoLog.length === 0 &&
          textLog.length === 0 ? (
            <h2 className="font-bold text-xl md:text-4xl text-[#244d3f] text-center my-5">
              No Interaction History Information Found !
            </h2>
          ) : (
            <div className="w-full h-[280px] sm:h-[350px] md:h-[450px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    innerRadius="70%"
                    outerRadius="90%"
                    cornerRadius={8}
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                  />
                  <Legend />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;
