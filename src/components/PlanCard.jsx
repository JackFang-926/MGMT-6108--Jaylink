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
  // VARIANT B: Revisions (Findings 1 - 10)
  // ----------------------------------------------------
  const bData = VARIANT_B_PLAN_DATA[plan.id] || {};
  const cardTitle = bData.title || plan.title;
  const roamingItems = bData.roamingItems || [];
  const changesAfterContract = bData.changesAfterContract || [];
  const targetUser = bData.targetUser;
  const promo = bData.promo;

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

      {/* Price Row: Title left, nowrap pink price, unified font sizing */}
      <div className="flex items-start justify-between mb-2 gap-1.5">
        <h2 className="text-[27px] lg:text-[25px] xl:text-[27px] font-extrabold text-[#222] tracking-tight shrink-0 leading-tight">
          {cardTitle}
        </h2>
        <div className="text-right shrink-0">
          <div className="text-[#E4087F] font-bold text-[23px] lg:text-[21px] xl:text-[23px] leading-tight whitespace-nowrap">
            {bData.largePrice}
          </div>
        </div>
      </div>

      {/* Shared min-height on subPrice for identical top alignment across all cards */}
      <div className="text-right text-xs text-[#777] mb-3 leading-normal lg:min-h-[38px] flex items-start justify-end">
        <span>{bData.subPrice}</span>
      </div>

      {/* FINDING 7 & FINDING 10: Green Information Box with Target-User Context */}
      {/* Parent wrapper has fixed min-height to ensure 'LOCAL DATA' headers and all elements below remain perfectly aligned horizontally across all three cards */}
      <div className="mb-4 lg:min-h-[148px] flex flex-col justify-start">
        <div className="bg-[#E2F59D] rounded-lg p-3 text-[#5D8B00] text-xs leading-5">
          {promo && (
            <div className="space-y-1">
              {/* Promo item 1: New Sign-ups */}
              <div className="font-bold">
                {promo.items[0]}
              </div>
              {/* Promo item 2: Switch promo bold heading merged with non-bold explanation */}
              <div className="leading-snug">
                <span className="font-bold">{promo.items[1]}: </span>
                <span className="font-normal text-[11.5px] text-[#4d7300]">
                  {promo.explanation}
                </span>
              </div>
            </div>
          )}

          {/* Finding 10: Target user context directly below promotions (or standalone for cards 2 & 3) */}
          {targetUser && (
            <div className={promo ? "mt-2.5 pt-2 border-t border-[#cde578]" : ""}>
              <div className="text-[13px] font-extrabold text-[#486e00] leading-tight">
                {targetUser.label}
              </div>
              <div className="text-[11.5px] font-medium text-[#557e02] leading-snug mt-0.5">
                {targetUser.description}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Benefits List Panel */}
      <div className="bg-[#F0F7FD] rounded-2xl px-[14px] py-[12px] flex-1 mb-4 flex flex-col justify-start">
        {/* Section 1: LOCAL DATA - sits at exact same vertical position across all 3 cards */}
        <div className="mb-4">
          {/* Finding 9: Bold black/dark category heading */}
          <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#222] mb-1.5">
            LOCAL DATA
          </div>
          <ul className="text-[13px] leading-[1.55]">
            {/* Finding 8: 5G+ benefit with SA handset & coverage qualification visible */}
            {/* Finding 9: Shared baseline feature -> light grey checkmark & grey text */}
            <li className="flex items-start space-x-2.5 mb-[10px] text-[#666]">
              <svg
                className="w-[16px] h-[16px] text-[#A0AEC0] shrink-0 mt-[2px]"
                viewBox="0 0 20 20"
                fill="none"
              >
                <circle cx="10" cy="10" r="8.5" stroke="#CBD5E0" strokeWidth="1.8" />
                <path
                  d="M6.5 10.2L8.8 12.5L13.8 7.5"
                  stroke="#A0AEC0"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <span className="font-semibold text-[#555]">Free 5G+ Access</span>
                <span className="block text-[11px] text-[#777] font-normal leading-tight mt-0.5">
                  (Requires 5G SA Handset &amp; Covered Areas)
                </span>
              </div>
            </li>

            {/* Unlimited Plan Data Cap Policy item */}
            {plan.id === "plan-unlimited" && (
              <li className="flex items-start space-x-2.5 mb-[10px] text-[#333]">
                <svg
                  className="w-[16px] h-[16px] text-[#78C000] shrink-0 mt-[2px]"
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
                <span className="text-[#333]">
                  ^Data limit cap at 800GB, speed managed at 512kbps thereafter
                </span>
              </li>
            )}
          </ul>
        </div>

        {/* Section 2: ROAMING */}
        <div className="mb-4">
          {/* Finding 9: Bold black/dark category heading */}
          <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#222] mb-1.5">
            ROAMING
          </div>
          <div>
            {/* Permanent interactive blue by default at all times - no hover invented, no black/gray text */}
            <button
              type="button"
              onClick={() => setIsRoamingOpen((prev) => !prev)}
              className="w-full flex items-center justify-between text-left text-[13px] font-semibold text-blue-600 cursor-pointer py-1 select-none"
            >
              <span className="text-blue-600">Multi-Destination Roaming — tap to see coverage</span>
              <span className="text-xs text-blue-600 shrink-0 ml-1.5 font-bold">
                {isRoamingOpen ? "▼" : "▶"}
              </span>
            </button>

            {isRoamingOpen && (
              <div className="mt-2.5 pt-2 border-t border-[#E1EFF9] space-y-[12px]">
                {roamingItems.map((item, idx) => (
                  <div key={idx} className="text-left">
                    <p className="font-bold text-[#222] text-[14px] leading-snug mb-0.5">
                      {item.p1}
                    </p>
                    <p className="font-normal text-[#666] text-[13px] leading-relaxed">
                      {item.p2}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Section 3: CALLS & SMS */}
        <div>
          {/* Finding 9: Bold black/dark category heading */}
          <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#222] mb-1.5">
            CALLS &amp; SMS
          </div>
          <ul className="text-[13px] leading-[1.55]">
            {/* Upgraded call minutes: Tiered across plans -> Green checkmark */}
            <li className="flex items-start space-x-2.5 mb-[10px] text-[#333]">
              <svg
                className="w-[16px] h-[16px] text-[#78C000] shrink-0 mt-[2px]"
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
              <span>
                {plan.id === "plan-720gb" && "650 mins local calls"}
                {plan.id === "plan-760gb" && "900 mins local calls"}
                {plan.id === "plan-unlimited" && "1200 mins local calls"}
              </span>
            </li>

            {/* Upgraded local SMS: Tiered across plans -> Green checkmark */}
            <li className="flex items-start space-x-2.5 mb-[10px] text-[#333]">
              <svg
                className="w-[16px] h-[16px] text-[#78C000] shrink-0 mt-[2px]"
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
              <span>
                {plan.id === "plan-720gb" && "100 local SMS"}
                {plan.id === "plan-760gb" && "500 Local SMS"}
                {plan.id === "plan-unlimited" && "800 Local SMS"}
              </span>
            </li>

            {/* Shared Baseline: 500 mins SG to 16 dest (identical on all 3) -> Grey checkmark */}
            <li className="flex items-start space-x-2.5 mb-[10px] text-[#666]">
              <svg
                className="w-[16px] h-[16px] text-[#A0AEC0] shrink-0 mt-[2px]"
                viewBox="0 0 20 20"
                fill="none"
              >
                <circle cx="10" cy="10" r="8.5" stroke="#CBD5E0" strokeWidth="1.8" />
                <path
                  d="M6.5 10.2L8.8 12.5L13.8 7.5"
                  stroke="#A0AEC0"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>
                500 mins from SG to 16 destinations (Local outgoing mins will also be deducted)
              </span>
            </li>

            {/* Shared Baseline: Free Caller ID & local incoming calls (identical on all 3) -> Grey checkmark */}
            <li className="flex items-start space-x-2.5 mb-[10px] text-[#666]">
              <svg
                className="w-[16px] h-[16px] text-[#A0AEC0] shrink-0 mt-[2px]"
                viewBox="0 0 20 20"
                fill="none"
              >
                <circle cx="10" cy="10" r="8.5" stroke="#CBD5E0" strokeWidth="1.8" />
                <path
                  d="M6.5 10.2L8.8 12.5L13.8 7.5"
                  stroke="#A0AEC0"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Free Caller ID &amp; local incoming calls</span>
            </li>
          </ul>
        </div>

        {/* Changes after contract period */}
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

      {/* Bottom Actions (unchanged) */}
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
