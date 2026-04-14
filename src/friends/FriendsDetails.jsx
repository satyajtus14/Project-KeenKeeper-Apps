import React from 'react';
// import { useParams } from 'react-router';
import { useParams } from 'react-router-dom';
import useFndHook from '../customHook/useFndHook';
import { ClipLoader } from "react-spinners";



const FriendsDetails = () => {
    const {fnd_id} = useParams();
    console.log(fnd_id,"Loading data from friends details page")

    const {friends, loading} = useFndHook();
    console.log(friends, loading, "Loading:","friend:")

    // Find the friend by ID
    const expectedFriend = friends.find((friend) => friend.id === Number(fnd_id))
    console.log(expectedFriend,"expectedFriend")

    // Loading State
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ClipLoader color="#1f2937"/>
      </div>
    );
  }

  // Not Found State
  if (!expectedFriend) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="alert alert-error shadow-lg">
          <span>Friend not found.</span>
        </div>
      </div>
    );
  }

  // Destructure after confirming existence
    const {name,
         picture,
        email,
        days_since_contact,
        status,
        tags,
        bio,goal,
        next_due_date} = expectedFriend;
 

    return (
        <div className='container mx-auto'>
            <div className="min-h-screen bg-base-200 p-6">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column — Friend Info Card */}
        <div className="lg:col-span-1">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              
              {/* Profile Picture */}
              <div className="avatar">
                <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={picture} alt={name} />
                </div>
              </div>

              {/* Name */}
              <h2 className="card-title mt-4 text-2xl">{name}</h2>

              {/* Status */}
              <div>
                      <label
                        className={`mx-auto mr-3 rounded-full border overflow-hidden p-3 py-2 mt-3 mb-3 ${
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
           

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {tags?.map((tag, ind) => (
                         <span
                         key={ind}
                         className="text-[#1f2937] font-semibold bg-green-300 rounded-full px-3 py-2 text-sm">
                         {tag.toUpperCase()}
                       </span>
                ))}
              </div>

              {/* Bio */}
              <p className="mt-4 text-sm text-gray-500">{bio}</p>

              {/* Email */}
              <p className="mt-2 font-medium text-gray-500">Preferred: email</p>
              <p className="font-sans">{email}</p>

              {/* Action Buttons */}
              <div className="card-actions flex flex-col items-center w-full gap-2 mt-6">
                <button className="btn  rounded-lg">
                  ⏰ Snooze 2 Weeks
                </button>
                <button className="btn  rounded-lg">
                  📦 Archive
                </button>
                <button className="btn  rounded-lg">
                  🗑️ Delete
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* ① Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Days Since Contact */}
            <div className="stat bg-base-100 shadow rounded-box">
              <div className="stat-title">Days Since Contact</div>
              <div className="stat-value text-primary">
                {days_since_contact}
              </div>
            </div>

            {/* Goal */}
            <div className="stat bg-base-100 shadow rounded-box">
              <div className="stat-title">Goal (Days)</div>
              <div className="stat-value text-secondary">
                {goal}
              </div>
            </div>

            {/* Next Due Date */}
            <div className="stat bg-base-100 shadow rounded-box">
              <div className="stat-title">Next Due Date</div>
              <div className="stat-value text-accent text-lg">
                {new Date(next_due_date).toLocaleDateString()}
              </div>
            </div>
          </div>

          {/* Placeholder for Additional Sections */}
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title">Interaction History</h2>
              <p className="text-gray-500">
                This section can display past interactions, notes, or reminders.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title">Notes</h2>
              <p className="text-gray-500">
                Add personal notes about your friend here.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  
        </div>
    );
};

export default FriendsDetails;