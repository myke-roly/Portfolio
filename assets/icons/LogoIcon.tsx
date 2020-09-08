import * as React from 'react';

function LogoIcon(props: any) {
  return (
    <svg width={128} height={82} viewBox="0 0 128 82" fill="none" {...props}>
      <path
        d="M41 82a41 41 0 1141-41H58.159A17.159 17.159 0 1041 58.159V82z"
        fill="#087BAA"
        fillOpacity={0.5}
      />
      <circle cx={123} cy={65} r={5} fill="#087BAA" fillOpacity={0.5} />
      <path
        d="M86.37 48.304V82h-8.208V61.792L70.626 82h-6.624l-7.584-20.256V82H48.21V48.304h9.696l9.456 23.328 9.36-23.328h9.648zM111.81 82l-11.328-14.88V82h-8.208V48.304h8.208v14.784l11.232-14.784h9.648l-13.056 16.512L121.841 82h-10.032z"
        fill="#fff"
      />
    </svg>
  );
}

export default LogoIcon;
