// import React, { useEffect, useState } from "react";
import MyFriendsCards from "../ui/MyFriendsCards";
import { ClipLoader } from "react-spinners";

import useFndHook from "../customHook/useFndHook";

const AllFriendsList = () => {
  // const [friends, setFriends] = useState([]);

  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const friendsFetchData = async () => {
  //     const res = await fetch("/friends.json");
  //     const data = await res.json();
  //     console.log("Data fetching from AllFriendsList page", data);
  //     setFriends(data);
  //     setLoading(false);
  //   };
  //   friendsFetchData();
  // }, []);
 
  /* Use Custom hook to loading data */
  const {friends, loading} = useFndHook();

  console.log(friends);
  console.log(loading,"Loading data");

  return (
    <div className="container mx-auto mb-15">
      <h2 className="text-2xl text-[#1f2937] font-semibold">
        Your Friends
      </h2>
      {loading ? ( <div className="flex justify-center items-center">
        <ClipLoader color="#1f2937"/> </div>) : ( <div className=" p-4 grid grid-cols-1 md:grid-cols-4 gap-4 ">
        {friends.map((friend, ind) => {
          return (
            <MyFriendsCards friend={friend} key={ind}/>
          );
        })}
      </div> )}
    </div>
  );
};

export default AllFriendsList;
