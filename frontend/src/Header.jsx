import React from "react";
import {Link} from "react-router-dom"
function Header() {
  return (
    <header className="flex justify-between shadow-md shadow-gray-200">
      <Link to='/' className="flex items-center gap-1">
        Logo
      </Link>
      <div className="flex border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
        <div>Any where</div>
        <div className="border-l border-gray-300"></div>
        <div>Any Week</div>
        <div className="border-l border-gray-300"></div>
        <div>Add Guests</div>
        <button className="bg-primary text-white rounded-full p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center border border-gray-300 rounded-full py-2 px-4 overflow-hidden">
        {/* flex border border-gray-300 rounded-full py-2 px-4 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
        <Link to="/login" className="bg-gray-500 text-white rounded-full border border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 relative top-1 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default Header;
