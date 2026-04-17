import React, { useContext } from "react";
// import { useParams } from 'react-router';
import { useParams } from "react-router-dom";
import useFndHook from "../customHook/useFndHook";
import { ClipLoader } from "react-spinners";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { BsChatLeftText } from "react-icons/bs";
import { GoDeviceCameraVideo } from "react-icons/go";
import { ContactHistoryContext } from "../context/ContactHistoryContext";

import { toast } from "react-toastify";

const FriendsDetails = () => {
  const { fnd_id } = useParams();
  console.log(fnd_id, "Loading data from friends details page");

  const { friends, loading } = useFndHook();
  console.log(friends, loading, "Loading:", "friend:");

  // Find the friend by ID
  const expectedFriend = friends.find((friend) => friend.id === Number(fnd_id));
  console.log(expectedFriend, "expectedFriend");

  // Destructing variable by context
  const { callLog, setCallLog, videoLog, setVideoLog, textLog, setTextLog } =
    useContext(ContactHistoryContext);

  // Loading State
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ClipLoader color="#1f2937" />
      </div>
    );
  }

  // Call button
  const handleCallLog = () => {
    setCallLog([...callLog, expectedFriend]);
    toast.success(`${expectedFriend.name} Call !`);
  };
  // Video button
  const handleVideoLog = () => {
    setVideoLog([...videoLog, expectedFriend]);
    toast.success(`${expectedFriend.name} Video Call !`);
  };
  // Text Button
  const handleTextLog = () => {
    setTextLog([...textLog, expectedFriend]);
    toast.success(`${expectedFriend.name} Text !`);
  };

  // Not Found State
  if (!expectedFriend) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="alert alert-error shadow-lg">
          <h2 className="text-center text-3xl font-bold text-black my-5">
            No Friend found to your list!
          </h2>
        </div>
      </div>
    );
  }

  // Destructure after confirming existence
  const {
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = expectedFriend;

  return (
    <div className="container mx-auto mb-10 px-4">
      <div className="min-h-screen bg-base-200 p-3 md:p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-1">
            <div className="card bg-base-100 shadow-xl border border-slate-300 rounded-md">
              <div className="card-body items-center text-center">
                <div className="avatar">
                  <div className="w-24 md:w-32 rounded-full ring ring-[#244d3f] ring-offset-base-100 ring-offset-2">
                    <img src={picture} alt={name} />
                  </div>
                </div>

                <h2 className="card-title mt-2 mb-2 text-xl md:text-2xl text-[#244d3f]">
                  {name}
                </h2>

                <div>
                  <label
                    className={`rounded-full p-2 px-4 text-sm md:text-base ${
                      status === "Almost Due"
                        ? "bg-amber-500 text-white"
                        : status === "Overdue"
                        ? "bg-red-500 text-white"
                        : status === "On-Track"
                        ? "bg-[#244d3f] text-white"
                        : "bg-gray-300 text-gray-700"
                    }`}
                  >
                    {status}
                  </label>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {tags?.map((tag, ind) => (
                    <span
                      key={ind}
                      className="text-[#1f2937] font-semibold bg-green-300 rounded-full px-3 py-1 text-xs md:text-sm"
                    >
                      {tag.toUpperCase()}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-sm text-[#64748b]">"{bio}"</p>

                <p className="mt-2 font-medium text-[#64748b]">
                  Preferred: email
                </p>
                <p className="font-sans break-all">{email}</p>

                <div className="card-actions flex flex-col items-center w-full gap-2 mt-6">
                  <button className="btn border border-slate-300 rounded-lg w-full">
                    <RiNotificationSnoozeLine /> Snooze 2 Weeks
                  </button>
                  <button className="btn border border-slate-300 rounded-lg w-full">
                    <FiArchive /> Archive
                  </button>
                  <button className="btn border border-slate-300 rounded-lg text-red-500 w-full">
                    <RiDeleteBin6Line /> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Days Since Contact */}
              <div className="stat bg-base-100 shadow border border-slate-300 rounded-box">
                <div className="stat-value text-4xl text-[#244d3f]">
                  {days_since_contact}
                </div>
                <div className="stat-title text-[#64748b]">
                  Days Since Contact
                </div>
              </div>

              {/* Goal */}
              <div className="stat bg-base-100 shadow border border-slate-300 rounded-box">
                <div className="stat-value text-4xl text-[#244d3f]">{goal}</div>
                <div className="stat-title text-[#64748b]">Goal (Days)</div>
              </div>

              {/* Next Due Date */}
              <div className="stat bg-base-100 shadow border border-slate-300 rounded-box">
                <div className="stat-value text-[#244d3f] text-3xl">
                  {new Date(next_due_date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <div className="stat-title text-[#64748b]">Next Due Date</div>
              </div>
            </div>

            {/* Relationship Goal */}
            <div className="card bg-base-100 shadow border border-slate-300">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 gap-4">
                <div>
                  <h2 className="card-title text-[#244d3f]">
                    Relationship Goal
                  </h2>
                  <p className="text-[#64748b]">
                    Connect every{" "}
                    <span className="font-bold text-lg text-[#244d3f]">
                      {goal} days
                    </span>
                  </p>
                </div>

                <button className="btn btn-active border border-slate-300 rounded-lg">
                  Edit
                </button>
              </div>
            </div>

            {/* Quick Check-In */}
            <div className="card bg-base-100 shadow border border-slate-300">
              <div className="card-body">
                <h2 className="card-title text-[#244d3f]">Quick Check-In</h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <button
                    className="btn btn-active p-6 flex flex-col gap-2"
                    onClick={handleCallLog}
                  >
                    <FiPhoneCall />
                    Call
                  </button>

                  <button
                    className="btn btn-active p-6 flex flex-col gap-2"
                    onClick={handleVideoLog}
                  >
                    <BsChatLeftText />
                    Text
                  </button>

                  <button
                    className="btn btn-active p-6 flex flex-col gap-2"
                    onClick={handleTextLog}
                  >
                    <GoDeviceCameraVideo />
                    Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;
