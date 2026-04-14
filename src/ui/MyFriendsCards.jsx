import React from 'react';

const MyFriendsCards = ({friend}) => {
    return (
        <div>
            <div
             
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
                  <h2 className="card-title mx-auto text-center font-semibold text-2xl text-[#1f2937]">
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
                            ? "bg-[#244d3f] text-white"
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
        </div>
    );
};

export default MyFriendsCards;