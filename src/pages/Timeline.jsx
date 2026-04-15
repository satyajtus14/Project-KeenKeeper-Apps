import React from 'react';

const Timeline = () => {
    return (
        <div className='container mx-auto mb-10'>
            <h2 className='text-6xl font-bold mb-15'>Timeline</h2>
            <div className="card bg-base-100 shadow border border-slate-300">
            <div className="card-body space-y-3">
              <h2 className="card-title text-[#244d3f]">Interaction History</h2>
        
              <p className="text-[#64748b]">
                Call with 
              </p>
              <p className="text-[#64748b]">
                Text with 
              </p>
              <p className="text-[#64748b]">
                Video with 
              </p>
            </div>
          </div>
        </div>
    );
};

export default Timeline;