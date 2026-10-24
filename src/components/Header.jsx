import React from "react";
import { HEADER_COPY } from "../data.js";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-xs w-full">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Logo & Nav */}
        <div className="flex items-center space-x-6 xl:space-x-10">
          {/* JAYLINK Logo Wordmark */}
          <div className="flex items-center text-3xl font-extrabold tracking-tight select-none cursor-pointer">
            <span className="text-[#0B1E48]">{HEADER_COPY.brand.prefix}</span>
            <span className="text-[#0A93E8]">{HEADER_COPY.brand.suffix}</span>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#78C000] ml-1 mb-1"></span>
          </div>

          {/* Navigation Links (hidden on small mobile, visible on desktop) */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[16px] lg:text-[17px] font-medium text-[#444]">
            {HEADER_COPY.navLinks.map((link) => {
              const isActive = link === HEADER_COPY.activeNav;
              return (
                <span
                  key={link}
                  className={`relative py-2 select-none cursor-pointer transition ${
                    isActive
                      ? "text-[#0A93E8] font-bold"
                      : "text-[#444] hover:text-[#0A93E8]"
                  }`}
                >
                  {link}
                  {isActive && (
                    <svg
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-2 text-[#0A93E8]"
                      viewBox="0 0 24 8"
                      fill="none"
                    >
                      <path
                        d="M2 2 Q12 7 22 2"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </span>
              );
            })}
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
          {/* Red Support notification icon (hidden on small mobile) */}
          <button
            type="button"
            className="hidden md:flex relative w-10 h-10 rounded-full bg-[#FAECEB] items-center justify-center text-[#D93025] hover:bg-red-100 transition cursor-default"
            aria-label="Support notifications"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#D93025] rounded-full border border-white"></span>
          </button>

          {/* Language Pill (hidden on small mobile) */}
          <button
            type="button"
            className="hidden md:flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full border border-gray-300 text-sm font-medium text-[#444] hover:border-gray-400 transition cursor-default"
          >
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span>{HEADER_COPY.langPill}</span>
          </button>

          {/* Pay Pill (hidden on small mobile) */}
          <button
            type="button"
            className="hidden md:flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full border border-gray-300 text-sm font-medium text-[#444] hover:border-gray-400 transition cursor-default"
          >
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span>{HEADER_COPY.payPill}</span>
          </button>

          {/* User Profile Icon (hidden on small mobile) */}
          <button
            type="button"
            className="hidden md:flex w-10 h-10 rounded-full border border-gray-300 items-center justify-center text-gray-600 hover:border-gray-400 transition cursor-default"
            aria-label="User profile"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>

          {/* Get SIM Button (always visible, as specified) */}
          <button
            type="button"
            className="flex items-center space-x-1 px-5 py-2.5 rounded-full bg-[#0A93E8] text-white text-[15px] font-semibold hover:bg-[#0882ce] shadow-sm transition cursor-default select-none"
          >
            <span>Get SIM</span>
            <span className="text-lg leading-none">→</span>
          </button>
        </div>
      </div>
    </header>
  );
}
