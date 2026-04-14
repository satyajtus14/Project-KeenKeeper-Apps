import React, { useEffect, useState } from 'react';

const StatusCards = () => {
  const [friends, setFriends] = useState([]);

  const [almostDueCount, setAlmostDueCount] =useState(0);

  const [onTrackCount, setOnTrackCount] =useState(0);

  const [needAttentionCount, setNeedAttentionCount] =useState(0);

  
  useEffect(() => {
    const friendsFetchData = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();
      console.log("Data fetching from Status Cards page", data);
      setFriends(data);
      
      const count = data.filter((friend)=> friend.status === 'Almost Due').length;
      setAlmostDueCount(count);

      const trackCount = data.filter((friend)=> friend.status === 'On-Track').length;
      setOnTrackCount(trackCount)

      const needAttentionCount = data.filter((friend)=> friend.status === 'Overdue').length;
      setNeedAttentionCount(needAttentionCount)
    };
    friendsFetchData();
  }, []);

  console.log(friends);

    return (
    <div className=' container mx-auto flex justify-between  gap-5'>
    <div className="card bg-white w-60 shadow">
  <figure className="px-5 pt-5">
   <p className='text-4xl font-bold text-[#244d3f]'>{friends.length}</p>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[#64748b] ">Total Friend</h2>
  </div>
    </div>

    <div className="card bg-white w-60 shadow">
  <figure className="px-5 pt-5">
   <p className='text-4xl font-bold text-[#244d3f]'>{onTrackCount}</p>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[#64748b]">On Track</h2>
  </div>
    </div>

    <div className="card  bg-white w-60 shadow">
  <figure className="px-5 pt-5">
   <p className='text-4xl font-bold text-[#244d3f]'>{needAttentionCount}</p>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[#64748b]">Need Attention</h2>
  </div>
    </div>

    <div className="card  bg-white w-70 shadow ">
  <figure className="px-5 pt-5">
   <p className='text-4xl font-bold text-[#244d3f]'>{almostDueCount}</p>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[#64748b]">Interactions This Month</h2>
  </div>
    </div>
</div>
    );
};

export default StatusCards;