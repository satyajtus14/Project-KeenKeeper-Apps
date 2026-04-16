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
    <div className="container mx-auto my-10">
      <h2 className="text-4xl font-bold mb-15">Timeline</h2>

      <div className="card bg-base-100 shadow border border-slate-300">
        <div className="card-body space-y-3">
          <div className="flex justify-start items-center gap-8">
            <h2 className="card-title text-[#244d3f]">Interaction History</h2>
            <FliterDropDown />
          </div>

          {filteredData.length === 0 ? (
            <h2 className="font-bold text-4xl text-[#244d3f] text-center my-5">
              No Interaction History Found!
            </h2>
          ) : (
            filteredData.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center shadow p-4 rounded-md bg-slate-100 mb-2"
              >
                <img
                  src={
                    item.type === "Call"
                      ? callIMG
                      : item.type === "Video"
                      ? videoIMG
                      : textIMG
                  }
                  className="h-[30px] w-auto"
                />

                <div>
                  <h2 className="font-semibold text-md text-[#64748b]">
                    <span className="font-semibold text-xl text-black">
                      {item.type}
                    </span>{" "}
                    with {item.name}
                  </h2>

                  <p className="text-sm text-gray-500">
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
