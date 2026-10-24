import React from "react";

export default function PlanCard({ plan, onViewDetails, onSignUp }) {
  return (
    <div className="relative bg-gradient-to-b from-[#F2F8FD] to-[#E9F3FB] border border-[#D5E6F5] rounded-3xl p-6 sm:p-7 flex flex-col shadow-xs h-full">
      {/* 12 Months header with curved smile arc underline */}
      <div className="text-center pb-4 mb-4 border-b border-[#D8E9F6]">
        <div className="inline-flex flex-col items-center">
          <span className="text-[#0A93E8] font-bold text-base sm:text-[17px] leading-tight">
            {plan.duration}
          </span>
          <svg
            className="w-7 h-2 text-[#0A93E8] mt-1"
            viewBox="0 0 28 8"
            fill="none"
          >
            <path
              d="M2 2 Q14 8 26 2"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* 5G Ribbon Badge */}
      <div className="relative mb-3 flex items-center">
        <span className="relative inline-flex items-center px-2.5 py-0.5 rounded-t-md rounded-br-md bg-[#0A93E8] text-white text-xs font-black tracking-wider uppercase shadow-xs">
          {plan.badge}
          <span className="absolute -bottom-1 left-0 w-0 h-0 border-t-[4px] border-t-[#066db0] border-l-[4px] border-l-transparent"></span>
        </span>
      </div>

      {/* Plan Title & Price */}
      <div className="flex items-baseline justify-between mb-3">
        <h2 className="text-3xl sm:text-[34px] font-extrabold text-[#222] tracking-tight">
          {plan.title}
        </h2>
        <div className="text-right">
          <span className="text-[#E4087F] font-bold text-2xl sm:text-[28px]">{plan.price}</span>
          <span className="text-xs text-[#222] font-semibold">{plan.period}</span>
        </div>
      </div>

      {/* Promo Box (only on cards with promotions; no artificial spacer on others) */}
      {plan.promo && (
        <div className="bg-[#E2F59D] rounded-lg p-3 mb-4 text-[#5D8B00] font-semibold text-xs leading-5">
          {plan.promo.map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>
      )}

      {/* Benefits List Panel */}
      <div className="bg-[#F0F7FD] rounded-2xl p-4 sm:p-5 flex-1 mb-4 flex flex-col justify-start">
        <ul className="space-y-3.5 text-xs text-[#333] leading-snug">
          {plan.benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start space-x-2.5">
              <svg
                className="w-4 h-4 text-[#78C000] shrink-0 mt-0.5"
                viewBox="0 0 20 20"
                fill="none"
              >
                <circle cx="10" cy="10" r="8.5" stroke="#78C000" strokeWidth="1.8" />
                <path
                  d="M6.5 10.2L8.8 12.5L13.8 7.5"
                  stroke="#78C000"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="leading-snug">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* After Contract Period Note */}
      <div className="px-1 mb-5">
        <div className="text-[11px] font-normal text-gray-500 mb-1">
          {plan.afterContractTitle}
        </div>
        <ul className="text-[11px] text-gray-400 space-y-0.5 list-disc list-inside">
          {plan.afterContract.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Bottom Actions (Clean without divider line to match screenshot) */}
      <div className="mt-auto flex items-center justify-between pt-1">
        <button
          type="button"
          onClick={() => onViewDetails(plan)}
          className="text-[#0A93E8] text-sm font-semibold hover:underline cursor-pointer bg-transparent border-none p-0"
        >
          {plan.viewDetailsLabel}
        </button>
        <button
          type="button"
          onClick={() => onSignUp(plan)}
          className="px-6 py-2.5 bg-[#0A93E8] text-white font-semibold text-sm rounded-full shadow-sm hover:bg-[#0882ce] transition cursor-pointer"
        >
          {plan.signUpLabel}
        </button>
      </div>
    </div>
  );
}
