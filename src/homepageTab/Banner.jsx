import React from 'react';
import { TiPlus } from "react-icons/ti";
import StatusCards from '../shared/StatusCards';

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div>
            <h1 className='text-center text-xl md:text-3xl lg:text-5xl font-bold text-[#1f2937] mb-2'>Friends to keep close in your life</h1>
            <p className='text-center text-[#64748b] mb-8'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
            relationships that matter most.</p>
            
            </div>
             
             <div className='flex justify-center items-center mb-25'>

            <button className='btn bg-[#244d3f] rounded-lg text-white'><TiPlus /> Add Friend</button>
             </div>

             {/* Show 4 summary cards  */}
             <div className='mb-20'>
                <StatusCards />
             </div>
        </div>
    );
};

export default Banner;