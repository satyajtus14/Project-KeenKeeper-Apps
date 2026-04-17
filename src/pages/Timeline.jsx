import React, { useContext } from "react";
import { ContactHistoryContext } from "../context/ContactHistoryContext";
import callIMG from "../assets/images/call.png";
import videoIMG from "../assets/images/video.png";
import textIMG from "../assets/images/text.png";
import FliterDropDown from "../ui/FliterDropDown";
import CurrentTimeStamp from "../ui/CurrentTimeStamp";

const Timeline = () => {
  const { callLog, videoLog, textLog, sortingType } = useContext(
    ContactHistoryContext
  );

  // Combine all logs and add a "type" property to each item
  const allLogs = [
    ...callLog.map((item) => ({ ...item, type: "Call" })),
    ...videoLog.map((item) => ({ ...item, type: "Video" })),
    ...textLog.map((item) => ({ ...item, type: "Text" })),
  ];

  let filteredData = allLogs;

  if (sortingType) {
    filteredData = allLogs.filter((item) => item.type === sortingType);
  }

  return (
    <div className="container mx-auto my-6 md:my-10 px-4">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10">Timeline</h2>

      <div className="card bg-base-100 shadow border border-slate-300">
        <div className="card-body space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="card-title text-[#244d3f] text-lg md:text-2xl">
              Interaction History
            </h2>
            <FliterDropDown />
          </div>

          {filteredData.length === 0 ? (
            <h2 className="font-bold text-xl md:text-4xl text-[#244d3f] text-center my-5">
              No Interaction History Found!
            </h2>
          ) : (
            filteredData.map((item) => (
              <div
                key={item.id}
                className="flex items-start sm:items-center gap-3 md:gap-4 shadow p-3 md:p-4 rounded-md bg-slate-100"
              >
                <img
                  src={
                    item.type === "Call"
                      ? callIMG
                      : item.type === "Video"
                      ? videoIMG
                      : textIMG
                  }
                  alt={item.type}
                  className="h-6 w-6 md:h-8 md:w-8"
                />

                <div className="flex-1">
                  <h2 className="text-sm md:text-base text-[#64748b]">
                    <span className="font-semibold text-base md:text-xl text-black">
                      {item.type}
                    </span>{" "}
                    with {item.name}
                  </h2>

                  <p className="text-xs md:text-sm text-gray-500">
                    <CurrentTimeStamp />
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
