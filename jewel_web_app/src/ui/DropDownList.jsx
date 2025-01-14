import PropTypes from "prop-types";
import { useState } from "react";
import { useAuth } from "../context/authContext";


export default function DropDownList({onClick}) {
  const [isOpen, setIsOpen] = useState(false);

  const { logout } = useAuth();

  const handleMouseEnter = () => {
    setTimeout(() => {
        setIsOpen(true);
    },100)
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
        setIsOpen(false);
    },100)
  };

  const handleLogOut = () => {
      logout();
  }

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md border-none bg-transparent shadow-sm p-3 text-sm font-medium text-gray-700 hover:focus:outline-none"
        id="menu-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <svg
          className="ml-2 -mr-1 h-5 w-5 text-text-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
              onClick={onClick}
            >
              View Profile
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
              onClick={handleLogOut}
            >
              LogOut
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

DropDownList.propTypes = {
    onClick : PropTypes.func
}
