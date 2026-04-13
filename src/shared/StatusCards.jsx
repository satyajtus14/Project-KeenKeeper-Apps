import React from 'react';

const StatusCards = () => {
    return (
    <div className=' container mx-auto flex justify-between  gap-5'>
    <div className="card bg-slate-100 w-60 shadow-sm">
  <figure className="px-5 pt-5">
   <p className='text-2xl font-bold text-[#244d3f]'>10</p>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[#64748b]">Total Friend</h2>
  </div>
    </div>

    <div className="card bg-slate-100 w-60 shadow-sm">
  <figure className="px-5 pt-5">
   <p className='text-2xl font-bold text-[#244d3f]'>10</p>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[#64748b]">On Track</h2>
  </div>
    </div>

    <div className="card  bg-slate-100 w-60 shadow-sm">
  <figure className="px-5 pt-5">
   <p className='text-2xl font-bold text-[#244d3f]'>10</p>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[#64748b]">Need Attention</h2>
  </div>
    </div>

    <div className="card  bg-slate-100 w-70 shadow-sm ">
  <figure className="px-5 pt-5">
   <p className='text-2xl font-bold text-[#244d3f]'>10</p>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[#64748b]">Interactions This Month</h2>
  </div>
    </div>
</div>
    );
};

export default StatusCards;