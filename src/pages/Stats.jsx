import React, { useContext } from "react";
import { ContactHistoryContext } from "../context/ContactHistoryContext";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const Stats = () => {
  const { callLog, videoLog, textLog } = useContext(ContactHistoryContext);
  console.log(callLog, videoLog, textLog, "Access context data:");

  const data = [
    { name: "Text", value: textLog.length, fill: "#8027F5" },
    { name: "Call", value: callLog.length, fill: "#244d3f" },
    { name: "Video", value: videoLog.length, fill: "#5BB078" },
  ];

  return (
    <div className="container mx-auto my-5 shadow p-10 rounded-md border-slate-300">
      <h2 className="text-4xl font-bold mb-15">Friendship Analytics</h2>
      <div className="card bg-base-100 shadow border border-slate-300">
        <div className="card-body space-y-3">
          <h3 className="card-title text-[#244d3f]">By Interaction Type</h3>

          {callLog.length === 0 &&
          videoLog.length === 0 &&
          textLog.length === 0 ? (
            <h2 className="font-bold text-4xl text-[#244d3f] text-center my-5">
              No Interaction History Information Found !
            </h2>
          ) : (
            <>
              <div>
                <PieChart
                  style={{
                    width: "100%",
                    maxWidth: "500px",
                    maxHeight: "80vh",
                    margin: "auto",
                    aspectRatio: 1,
                    marginBottom: "20px",
                  }}
                  responsive
                >
                  <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    fill="#8884d8"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                  />
                  <Legend wrapperStyle={{
                       marginBottom: -40
                     }}/>
                  <Tooltip />
                </PieChart>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;
