import React, { useEffect, useState } from "react";

const AllFriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const friendsFetchData = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();
      console.log("Data fetching from AllFriendsList page", data);
      setFriends(data);
    };
    friendsFetchData();
  }, []);

  console.log(friends);

  return (
    <div className="container mx-auto mb-15">
      <h2 className="text-2xl text-[#1f2937] font-semibold">
        Your Friends
      </h2>
      <div className=" p-4 grid grid-cols-1 md:grid-cols-4 gap-4 ">
        {friends.map((friend, ind) => {
          return (
            <div
              key={ind}
              className="shadow-sm rounded-lg border overflow-hidden border-zinc-300"
            >
              <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                  <img
                    src={friend.picture}
                    alt={friend.name}
                    className="rounded-full mt-5 "
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title mx-auto text-center">
                    {friend.name}
                  </h2>
                  <p className="mx-auto text-center mb-1">
                    <small>{friend.days_since_contact}d ago</small>
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mt-2 mb-3">
                    {friend.tags &&
                      friend.tags.map((tag, ind) => (
                        <span
                          key={ind}
                          className="text-[#1f2937] font-semibold bg-green-300 rounded-full px-3 py-2 text-sm"
                        >
                          {tag.toUpperCase()}
                        </span>
                      ))}
                  </div>
                  <div className="card-actions justify-center items-center">
                    <div>
                      <label
                        className={`mx-auto mr-3 rounded-full border overflow-hidden p-3 py-2 mt-3 mb-3 ${
                          friend.status === "Almost Due"
                            ? "bg-amber-500 text-white"
                            : friend.status === "Overdue"
                            ? "bg-red-500 text-white"
                            : friend.status === "On-Track"
                            ? "bg-[#1f2937] text-white"
                            : "bg-gray-300 text-gray-700"
                        }`}
                      >
                        {friend.status}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllFriendsList;
