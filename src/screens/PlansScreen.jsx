import React, { useState } from "react";
import Header from "../components/Header.jsx";
import PlanCard from "../components/PlanCard.jsx";
import DetailsModal from "../components/DetailsModal.jsx";
import {
  TABS_COPY,
  BANNER_COPY,
  PLANS_DATA,
  ADDONS_COPY,
  SERVICES_COPY,
  EMAIL_BLOCK_COPY,
  FOOTER_COPY,
} from "../data.js";

export default function PlansScreen({ variant, onSignUp }) {
  const [selectedPlanForDetails, setSelectedPlanForDetails] = useState(null);

  const handleOpenDetails = (plan) => {
    setSelectedPlanForDetails(plan);
  };

  const handleCloseDetails = () => {
    setSelectedPlanForDetails(null);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Sticky Header */}
      <Header />

      {/* Main Content */}
      <main className="w-full flex-1 pb-24">
        {/* HERO / TABS SECTION */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
          {/* Centered Tabs (inert) with smile arc */}
          <div className="flex justify-center items-center space-x-10 sm:space-x-16 text-2xl sm:text-3xl font-bold tracking-tight mb-8">
            <button
              type="button"
              className="text-gray-400 hover:text-gray-500 transition cursor-default select-none"
            >
              {TABS_COPY.simOnly}
            </button>
            <div className="flex flex-col items-center">
              <button
                type="button"
                className="text-[#0A93E8] font-bold cursor-default select-none pb-0.5"
              >
                {TABS_COPY.contract}
              </button>
              <svg
                className="w-10 h-2.5 text-[#0A93E8]"
                viewBox="0 0 40 10"
                fill="none"
              >
                <path
                  d="M2 2 Q20 10 38 2"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Lime Notice Banner */}
          <div className="w-full bg-[#F5FBED] border border-[#A7E04C] rounded-xl px-6 sm:px-8 py-4 mb-10 shadow-xs">
            <h3 className="text-[#78C000] font-bold text-base sm:text-lg mb-1.5">
              {BANNER_COPY.heading}
            </h3>
            <p className="text-[#666666] text-sm sm:text-[15px] leading-relaxed">
              {BANNER_COPY.body}
            </p>
          </div>

          {/* 3 PLAN CARDS GRID (1024px+ 3 columns, <768px single column) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {PLANS_DATA.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                onViewDetails={handleOpenDetails}
                onSignUp={() => onSignUp(plan)}
              />
            ))}
          </div>
        </section>

        {/* GET ADD-ONS SECTION */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Heading with smile arc */}
          <div className="text-center mb-12 flex flex-col items-center">
            <h2 className="text-3xl font-extrabold text-[#222]">
              {ADDONS_COPY.heading}
            </h2>
            <svg
              className="w-10 h-2.5 text-[#0A93E8] mt-1"
              viewBox="0 0 40 10"
              fill="none"
            >
              <path
                d="M2 2 Q20 10 38 2"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Two Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Card: Local Data */}
            <div className="bg-gradient-to-br from-[#EAF5DF] to-[#DCF0CC] rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-[#CEE7B6] shadow-xs relative overflow-hidden min-h-[220px]">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  <span className="text-[#222]">
                    {ADDONS_COPY.leftCard.line1Part1}
                  </span>
                  <span className="text-[#D93025]">
                    {ADDONS_COPY.leftCard.line1Part2Red}
                  </span>
                </h3>
                <p className="text-xl font-bold mb-3">
                  <span className="text-[#0A93E8]">
                    {ADDONS_COPY.leftCard.line2Part1Blue}
                  </span>
                  <span className="text-[#222]">
                    {ADDONS_COPY.leftCard.line2Part2}
                  </span>
                </p>
                <p className="text-sm text-gray-600 mb-6">
                  {ADDONS_COPY.leftCard.description}
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="px-7 py-2.5 bg-[#0A93E8] text-white font-semibold rounded-full shadow hover:bg-[#0882ce] transition cursor-default"
                >
                  {ADDONS_COPY.leftCard.buttonLabel}
                </button>
              </div>
            </div>

            {/* Right Card: Roaming */}
            <div className="bg-gradient-to-br from-[#E6F3FB] to-[#D5EBF8] rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-[#C5E1F4] shadow-xs relative overflow-hidden min-h-[220px]">
              {/* Faint world map svg background */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-15 pointer-events-none flex items-center justify-center">
                <svg
                  className="w-full h-full text-[#0A93E8]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
                </svg>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3">
                  <span className="text-[#78C000]">
                    {ADDONS_COPY.rightCard.line1Part1Lime}
                  </span>
                  <span className="text-[#0A93E8]">
                    {ADDONS_COPY.rightCard.line1Part2Blue}
                  </span>
                  <span className="text-[#222]">
                    {ADDONS_COPY.rightCard.line1Part3}
                  </span>
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  {ADDONS_COPY.rightCard.description}
                </p>
              </div>

              <div className="relative z-10">
                <button
                  type="button"
                  className="px-7 py-2.5 bg-[#0A93E8] text-white font-semibold rounded-full shadow hover:bg-[#0882ce] transition cursor-default"
                >
                  {ADDONS_COPY.rightCard.buttonLabel}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* UNIQUE SERVICES SECTION (pale-blue background band) */}
        <section className="bg-[#EFF7FC] py-16 border-y border-[#E2EEF7]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Left: Photo Card with green curved arc */}
              <div className="relative rounded-3xl overflow-hidden min-h-[300px] h-[340px] shadow-xs group bg-gradient-to-tr from-[#6C7A9C] via-[#94A5C6] to-[#CBD8EC] flex items-center justify-center">
                {/* Visual placeholder graphic matching screenshot */}
                <div className="flex flex-col items-center justify-center text-white/50">
                  <div className="w-20 h-20 rounded-2xl border-4 border-white/40 flex items-center justify-center bg-white/10 backdrop-blur-xs">
                    <svg
                      className="w-10 h-10 text-white/70"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Overlay gradient & Green arc graphic */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Green curved arc graphic */}
                <svg
                  className="absolute top-0 right-0 w-48 h-48 text-[#78C000] opacity-80 pointer-events-none"
                  fill="none"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M0,0 Q100,0 100,100"
                    fill="none"
                    stroke="#78C000"
                    strokeLinecap="round"
                    strokeWidth="12"
                  ></path>
                </svg>

                <div className="absolute bottom-8 left-8 right-8">
                  <h2 className="text-white text-3xl font-extrabold tracking-tight">
                    {SERVICES_COPY.leftCardTitle}
                  </h2>
                </div>
              </div>

              {/* Right: White Card (1-Card-Multi-Number) */}
              <div className="bg-white rounded-3xl p-8 shadow-xs border border-gray-100 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#222] mb-6">
                    {SERVICES_COPY.rightCardTitle}
                  </h3>
                  <div className="space-y-6">
                    {/* Row 1 */}
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-[#EBF6FE] flex items-center justify-center shrink-0 text-[#0A93E8]">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-[15px] text-[#444] leading-relaxed pt-1">
                        {SERVICES_COPY.rightCardRows[0]}
                      </p>
                    </div>

                    {/* Row 2 */}
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-[#EBF6FE] flex items-center justify-center shrink-0 text-[#0A93E8]">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-[15px] text-[#444] leading-relaxed pt-1">
                        {SERVICES_COPY.rightCardRows[1]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* View Details Link (inert) */}
                <div className="pt-6 border-t border-gray-100">
                  <span className="text-[#0A93E8] font-bold text-[15px] hover:underline flex items-center cursor-default select-none">
                    <span>{SERVICES_COPY.rightCardLink.replace(" >", "")}</span>
                    <span className="ml-1 text-xs">&gt;</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EMAIL BLOCK */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xs border border-gray-100 max-w-4xl mx-auto flex flex-col items-center text-center">
            {/* Envelope Icon with small green % price tag */}
            <div className="relative mb-4">
              <div className="w-14 h-14 rounded-2xl bg-[#EAF5FE] flex items-center justify-center text-[#0A93E8]">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <span className="absolute -top-1.5 -right-2 bg-[#78C000] text-white text-[11px] font-black px-1.5 py-0.5 rounded-full shadow-xs">
                %
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#222] mb-2">
              {EMAIL_BLOCK_COPY.heading}
            </h3>
            <p className="text-gray-500 text-[15px] mb-8">
              {EMAIL_BLOCK_COPY.subtitle}
            </p>

            {/* Input & Button Form - PRIVACY RULE: styled non-editable <div>, NOT an <input> or <textarea>, and Submit does nothing */}
            <div className="flex flex-col sm:flex-row items-center w-full max-w-lg gap-3">
              <div className="w-full sm:flex-1 px-5 py-3.5 rounded-full border border-gray-300 text-[15px] text-gray-400 select-none cursor-default text-left bg-white shadow-inner">
                {EMAIL_BLOCK_COPY.placeholder}
              </div>
              <button
                type="button"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#0A93E8] text-white font-bold text-[15px] rounded-full shadow hover:bg-[#0882ce] transition shrink-0 cursor-default"
              >
                {EMAIL_BLOCK_COPY.buttonLabel}
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* MINIMAL FOOTER */}
      <footer className="w-full border-t border-gray-200 py-8 bg-[#FAFAFA] text-center text-xs text-gray-500">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {FOOTER_COPY.text}
        </div>
      </footer>

      {/* Plan Details Modal */}
      <DetailsModal
        isOpen={Boolean(selectedPlanForDetails)}
        onClose={handleCloseDetails}
        plan={selectedPlanForDetails}
      />
    </div>
  );
}
