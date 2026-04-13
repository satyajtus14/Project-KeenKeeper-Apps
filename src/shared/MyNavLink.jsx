import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({to, children}) => {
    return (
        <NavLink to={to} className={ ({isActive}) => `${isActive ? " bg-[#244d3f] border border-[#244d3f] text-white p-2 flex justify-between gap-1 items-center rounded-md" : "bg-white text-[#64748b] flex justify-between gap-1 items-center p-2 rounded-md"}  `}> 
        
        {children}
        </NavLink>
    );
};

export default MyNavLink;