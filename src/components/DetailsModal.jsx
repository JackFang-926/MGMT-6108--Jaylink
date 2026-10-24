import React, { useEffect } from "react";

export default function DetailsModal({ isOpen, onClose, plan }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Lock body scroll when modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !plan) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/50 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-gray-100 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 sm:px-8 sm:py-5 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-[#F4FAFE] to-white shrink-0">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#0A93E8] text-white text-xs font-black tracking-wider uppercase">
              {plan.badge || "5G"}
            </span>
            <div>
              <h3 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-[#222]">
                Plan Details — {plan.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">
                Official Plan Entitlements &amp; Terms
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition cursor-pointer"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="px-6 py-5 sm:px-8 sm:py-6 overflow-y-auto space-y-6 text-[#333] text-sm leading-relaxed">
          {plan.officialDetails && plan.officialDetails.length > 0 ? (
            plan.officialDetails.map((sec, secIdx) => (
              <div
                key={secIdx}
                className="bg-[#F8FBFE] border border-[#E0EEF9] rounded-2xl p-4 sm:p-5"
              >
                <h4 className="text-[15px] font-bold text-[#0A93E8] mb-3 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#0A93E8] mr-2"></span>
                  {sec.section}
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#444]">
                  {sec.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start space-x-2.5">
                      <span className="text-[#0A93E8] font-bold mt-0.5 shrink-0">•</span>
                      <span className="leading-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No plan details available.</p>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 sm:px-8 border-t border-gray-100 flex items-center justify-between bg-gray-50/70 shrink-0">
          <div className="text-xs text-gray-400">
            JAYLINK Official Plan Information
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#0A93E8] text-white text-sm font-semibold hover:bg-[#0882ce] shadow-sm transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
