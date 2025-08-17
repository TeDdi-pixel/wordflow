import { memo } from "react";

const MistakeIcon = memo(() => {
  return (
    <svg
      className="fill-error"
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m9.622 7 3.747 3.747a0.875 0.875 0 0 1 0 1.238l-1.384 1.384a0.875 0.875 0 0 1 -1.238 0L7 9.622l-3.759 3.76a0.875 0.875 0 0 1 -1.238 0L0.619 11.996a0.875 0.875 0 0 1 0 -1.238L4.378 7 0.619 3.241a0.875 0.875 0 0 1 0 -1.238L2.004 0.619a0.875 0.875 0 0 1 1.238 0L7 4.378 10.759 0.629A0.875 0.875 0 0 1 11.996 0.63l1.384 1.384a0.875 0.875 0 0 1 -0.001 1.239z"
        fill="current"
      />
    </svg>
  );
});
export default MistakeIcon;
