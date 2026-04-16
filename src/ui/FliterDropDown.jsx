import React from 'react';
import { useContext } from 'react';
import { ContactHistoryContext } from '../context/ContactHistoryContext';

const FliterDropDown = () => {

    const { sortingType, setSortingType} = useContext(ContactHistoryContext);
  
    console.log(
    sortingType,
    setSortingType,
    
    "Access context data to FilterDropDown"
  );
    return (
        <div>
            <div className="dropdown dropdown-start">
      {/* Dropdown Trigger */}
      <label
        tabIndex={0}
        className="btn m-1 flex items-center gap-2"
      >
        {sortingType ? `Filter Timeline:` : "Filter Timeline"}
        {/* Arrow Down Icon */}
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </label>

      {/* Dropdown Menu */}
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow"
      >
           <li>
          <label ></label>
           </li>
        <li onClick={()=> setSortingType("Call")}>
          <label className={sortingType === "Call" ? "font-bold text-[#244d3f]" : ""}>Call</label>
        </li>
        <li onClick={()=> setSortingType("Video")}>
          <label className={sortingType === "Video" ? "font-bold text-[#244d3f]" : ""}>Video</label>
        </li>
        <li onClick={()=> setSortingType("Text")}>
          <label className={sortingType === "Text" ? "font-bold text-[#244d3f]" : ""}>Text</label>
        </li>
      </ul>
    </div>
        </div>
    );
};

export default FliterDropDown;