import React from "react";
import { CONSENT_COPY, HEADER_COPY } from "../data.js";

export default function ConsentScreen({ variant, onContinue }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-gray-100 flex flex-col items-center text-center">
        {/* JAYLINK Logo Wordmark */}
        <div className="flex items-center text-3xl font-extrabold tracking-tight mb-6">
          <span className="text-[#0B1E48]">{HEADER_COPY.brand.prefix}</span>
          <span className="text-[#0A93E8]">{HEADER_COPY.brand.suffix}</span>
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#78C000] ml-1 mb-1"></span>
        </div>

        {/* Notice text */}
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
          {CONSENT_COPY.message}
        </p>

        {/* Continue button */}
        <button
          type="button"
          onClick={onContinue}
          className="w-full sm:w-auto min-w-[200px] px-8 py-3.5 bg-[#0A93E8] hover:bg-[#0882ce] text-white text-base font-bold rounded-full shadow-md transition active:scale-[0.98] cursor-pointer"
        >
          {CONSENT_COPY.buttonLabel}
        </button>
      </div>

      <div className="mt-8 text-xs text-gray-400">
        JAYLINK Singapore (fictional brand for a class project)
      </div>
    </div>
  );
}
