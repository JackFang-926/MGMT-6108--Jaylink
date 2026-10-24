import React, { useState } from "react";
import { VARIANT_B_PLAN_DATA } from "../data.js";

export default function PlanCard({ plan, variant = "A", onViewDetails, onSignUp }) {
  const [isRoamingOpen, setIsRoamingOpen] = useState(false);

  // ----------------------------------------------------
  // VARIANT A: Byte-for-byte identical to baseline
  // ----------------------------------------------------
  if (variant !== "B") {
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
        <div className="bg-[#F0F7FD] rounded-2xl px-[14px] py-[12px] flex-1 mb-4 flex flex-col justify-start">
          <ul className="text-[13px] leading-[1.55] text-[#333]">
            {plan.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start space-x-2.5 mb-[10px] last:mb-0">
                <svg
                  className="w-[16px] h-[16px] text-[#78C000] shrink-0 mt-[1px]"
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
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* After Contract Period Note */}
        <div className="px-1 mb-5">
          <div className="text-[11px] font-normal text-[#999] mb-[6px]">
            {plan.afterContractTitle}
          </div>
          <ul className="text-[11px] font-normal text-[#999] leading-[1.5] list-disc list-inside">
            {plan.afterContract.map((item, idx) => (
              <li key={idx} className="mb-[4px] last:mb-0">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Actions */}
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

  // ----------------------------------------------------
  // VARIANT B: Findings 1 - 6
  // ----------------------------------------------------
  const bData = VARIANT_B_PLAN_DATA[plan.id] || {};
  const cardTitle = bData.title || plan.title;
  const localBenefits = plan.groupedBenefits?.local || [];
  const roamingBenefits = plan.groupedBenefits?.roaming || [];
  const callsAndSmsBenefits = plan.groupedBenefits?.callsAndSms || [];
  const changesAfterContract = bData.changesAfterContract || [];

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

      {/* FINDING 1 & 3: Plan Title & Price Layout */}
      <div className="flex items-start justify-between mb-3 gap-2">
        <h2 className="text-3xl sm:text-[34px] font-extrabold text-[#222] tracking-tight shrink-0">
          {cardTitle}
        </h2>
        <div className="text-right">
          <div className="text-[#E4087F] font-bold text-2xl sm:text-[28px] leading-tight">
            {bData.largePrice}
          </div>
          <div className="text-xs text-[#777] mt-1 leading-normal max-w-[210px] ml-auto">
            {bData.subPrice}
          </div>
        </div>
      </div>

      {/* Promo Box (preserved if present) */}
      {plan.promo && (
        <div className="bg-[#E2F59D] rounded-lg p-3 mb-4 text-[#5D8B00] font-semibold text-xs leading-5">
          {plan.promo.map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>
      )}

      {/* FINDING 4 & 6: Categorized Benefits List Panel */}
      <div className="bg-[#F0F7FD] rounded-2xl px-[14px] py-[12px] flex-1 mb-4 flex flex-col justify-start">
        {/* Section 1: LOCAL DATA */}
        <div className="mb-4">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#888] mb-1.5">
            LOCAL DATA
          </div>
          <ul className="text-[13px] leading-[1.55] text-[#333]">
            {localBenefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start space-x-2.5 mb-[10px] last:mb-0">
                <svg
                  className="w-[16px] h-[16px] text-[#78C000] shrink-0 mt-[1px]"
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
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 2: ROAMING (FINDING 6 Collapsible Drawer) */}
        <div className="mb-4">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#888] mb-1.5">
            ROAMING
          </div>
          <div>
            <button
              type="button"
              onClick={() => setIsRoamingOpen((prev) => !prev)}
              className="w-full flex items-center justify-between text-left text-[13px] font-medium text-[#0A93E8] hover:text-[#0882ce] transition cursor-pointer py-1 select-none"
            >
              <span>Multi-Destination Roaming — tap to see coverage &amp; priority</span>
              <span className="text-xs text-[#0A93E8] shrink-0 ml-1.5 font-bold">
                {isRoamingOpen ? "▼" : "▶"}
              </span>
            </button>

            {isRoamingOpen && (
              <div className="mt-2.5 pt-2 border-t border-[#E1EFF9]">
                <ul className="text-[13px] leading-[1.55] text-[#333]">
                  {roamingBenefits.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 mb-[10px] last:mb-0">
                      <svg
                        className="w-[16px] h-[16px] text-[#78C000] shrink-0 mt-[1px]"
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
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-[11px] text-[#888] mt-2 pt-1 border-t border-dashed border-[#D2E7F7]">
                  Deduction order: CN/HK → APAC → MY/TH/ID shared → Global 210
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 3: CALLS & SMS */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#888] mb-1.5">
            CALLS &amp; SMS
          </div>
          <ul className="text-[13px] leading-[1.55] text-[#333]">
            {callsAndSmsBenefits.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-2.5 mb-[10px] last:mb-0">
                <svg
                  className="w-[16px] h-[16px] text-[#78C000] shrink-0 mt-[1px]"
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
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FINDING 2: Changes after contract period (replaces small grey bullets) */}
        <div className="mt-4 pt-3.5 border-t border-[#D5E6F5]">
          <div className="text-[13px] font-bold text-[#222] mb-2">
            Changes after contract period
          </div>
          <div className="space-y-1.5 text-[13px] leading-[1.55] text-[#333]">
            {changesAfterContract.map((item, idx) => (
              <div key={idx} className="leading-snug">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FINDING 5: Early Termination Charge warning box */}
      <div className="bg-[#FFFBE6] border border-[#F0C040] rounded-[6px] p-[10px] mb-4 text-[12px] sm:text-[13px] text-[#222] leading-relaxed">
        <div className="flex items-start gap-1.5">
          <span className="text-[#D97706] text-sm shrink-0">⚠</span>
          <div>
            <div className="font-semibold">
              Early Termination Charge applies if you cancel before month 12:
            </div>
            <div className="font-normal text-[#444] mt-0.5">
              Monthly Fee × Remaining months (including the termination month).
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
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
