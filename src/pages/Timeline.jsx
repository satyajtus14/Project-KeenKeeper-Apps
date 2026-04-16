import { useContext } from "react";
import { ContactHistoryContext } from "../context/ContactHistoryContext";
import callIMG from "../assets/images/call.png";
import videoIMG from "../assets/images/video.png";
import textIMG from "../assets/images/text.png";

const Timeline = () => {
  const { callLog, videoLog, textLog} =
    useContext(ContactHistoryContext);
  console.log(
    callLog,
    videoLog,
    textLog,
    "Access context data:"
  );

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-4xl font-bold mb-15">Timeline</h2>
      <div className="card bg-base-100 shadow border border-slate-300">
        <div className="card-body space-y-3">
          <h2 className="card-title text-[#244d3f]">Interaction History</h2>

          {callLog.length === 0 &&
          videoLog.length === 0 &&
          textLog.length === 0 ? (
            <h2 className="font-bold text-4xl text-[#244d3f] text-center my-5">
              No Interaction History Found !
            </h2>
          ) : (
            <>
              {/* Call Logs */}
              <div>
                {callLog.map((call, ind) => {
                  const currentTime = new Date().toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  });

                  return (
                    <div
                      key={`call-${ind}`}
                      className="flex gap-4 items-center shadow p-4 rounded-md bg-slate-100 mb-2"
                    >
                      <img
                        src={callIMG}
                        alt="Dialer Image"
                        className="h-[30px] w-auto"
                      />
                      <div>
                        <h2 className="font-semibold text-md text-[#64748b]">
                          <span className="font-semibold text-xl text-black">
                            Call
                          </span>{" "}
                          with {call.name}
                        </h2>
                        <p className="text-sm text-gray-500">{currentTime}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Video Logs */}
              <div>
                {videoLog.map((videoCall, ind) => {
                  const currentTime = new Date().toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  });

                  return (
                    <div
                      key={`video-${ind}`}
                      className="flex gap-4 items-center shadow p-4 rounded-md bg-slate-100 mb-2"
                    >
                      <img
                        src={videoIMG}
                        alt="Video Image"
                        className="h-[30px] w-auto"
                      />
                      <div>
                        <h2 className="font-semibold text-md text-[#64748b]">
                          <span className="font-semibold text-xl text-black">
                            Video
                          </span>{" "}
                          with {videoCall.name}
                        </h2>
                        <p className="text-sm text-gray-500">{currentTime}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Text Logs */}
              <div>
                {textLog.map((text, ind) => {
                  const currentTime = new Date().toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  });

                  return (
                    <div
                      key={`text-${ind}`}
                      className="flex gap-4 items-center shadow p-4 rounded-md bg-slate-100 mb-2"
                    >
                      <img
                        src={textIMG}
                        alt="Text Image"
                        className="h-[30px] w-auto"
                      />
                      <div>
                        <h2 className="font-semibold text-md text-[#64748b]">
                          <span className="font-semibold text-xl text-black">
                            Text
                          </span>{" "}
                          with {text.name}
                        </h2>
                        <p className="text-sm text-gray-500">{currentTime}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
