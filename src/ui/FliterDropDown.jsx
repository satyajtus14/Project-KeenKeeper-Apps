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
        <label tabIndex={0} className="btn m-1 flex items-center gap-2">
          {sortingType ? `Filter: ${sortingType}` : "Filter Timeline"}
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
          {/* Clears the selection → button shows "Filter Timeline" again */}
          <li onClick={() => setSortingType("")}>
            <button></button>
          </li>
          <li onClick={() => setSortingType("Call")}>
            <button className={sortingType === "Call" ? "font-bold text-[#244d3f]" : ""}>
              Call
            </button>
          </li>
          <li onClick={() => setSortingType("Video")}>
            <button className={sortingType === "Video" ? "font-bold text-[#244d3f]" : ""}>
              Video
            </button>
          </li>
          <li onClick={() => setSortingType("Text")}>
            <button className={sortingType === "Text" ? "font-bold text-[#244d3f]" : ""}>
              Text
            </button>
          </li>
        </ul>
      </div>
    </div>
    );
};

export default FliterDropDown;