import React from 'react';

function UpIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-chevrons-up"
      {...props}
    >
      <path d="M17 11l-5-5-5 5M17 18l-5-5-5 5" />
    </svg>
  );
}

export default UpIcon;
