"use client";

import { useUnitPracticeStore } from "@/store/useUnitPracticeStore";

const TipIcon = () => {
  const isFeatureActive = useUnitPracticeStore((state) =>
    state.isFeatureActive("tip")
  );
  return (
    <div className="relative w-[24px] h-[24px]">
      <svg
        className={`absolute inset-0 transition-all duration-150 ease-out ${
          isFeatureActive ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_278_444"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="3"
          y="1"
          width="18"
          height="22"
        >
          <path
            d="M20 10C20 13.404 17.874 16.311 14.878 17.467H9.122C6.126 16.311 4 13.404 4 10C4 5.5815 7.5815 2 12 2C16.4185 2 20 5.5815 20 10Z"
            fill="white"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.8781 17.467L14.5381 21.542C14.5275 21.6668 14.4705 21.7832 14.3783 21.868C14.2861 21.9528 14.1654 21.9999 14.0401 22H9.96007C9.83469 21.9999 9.71392 21.9528 9.62168 21.8678C9.52944 21.7829 9.47248 21.6664 9.46207 21.5415L9.12207 17.4665"
            fill="black"
          />
          <path
            d="M14.8781 17.467L14.5381 21.542C14.5275 21.6668 14.4705 21.7832 14.3783 21.868C14.2861 21.9528 14.1654 21.9999 14.0401 22H9.96007C9.83469 21.9999 9.71392 21.9528 9.62168 21.8678C9.52944 21.7829 9.47248 21.6664 9.46207 21.5415L9.12207 17.4665"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M9 8.5V11.5L12 10L15 11.5V8.5" fill="white" />
          <path
            d="M9 8.5V11.5L12 10L15 11.5V8.5"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </mask>
        <g mask="url(#mask0_278_444)">
          <path d="M0 0H24V24H0V0Z" fill="#FFCFAB" />
        </g>
      </svg>

      {/* (inactive) */}
      <svg
        className={`absolute inset-0 transition-all duration-150 ease-out ${
          !isFeatureActive ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_277_436"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="3"
          y="1"
          width="18"
          height="22"
        >
          <path
            d="M20 10C20 13.404 17.874 16.311 14.878 17.467H9.122C6.126 16.311 4 13.404 4 10C4 5.5815 7.5815 2 12 2C16.4185 2 20 5.5815 20 10Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.8781 17.467L14.5381 21.542C14.5275 21.6668 14.4705 21.7832 14.3783 21.868C14.2861 21.9528 14.1654 21.9999 14.0401 22H9.96007C9.83469 21.9999 9.71392 21.9528 9.62168 21.8678C9.52944 21.7829 9.47248 21.6664 9.46207 21.5415L9.12207 17.4665"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 8.5V11.5L12 10L15 11.5V8.5"
            stroke="#FFCFAB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </mask>
        <g mask="url(#mask0_277_436)">
          <path d="M0 0H24V24H0V0Z" fill="#FFCFAB" />
        </g>
      </svg>
    </div>
  );
};

export default TipIcon;
