const ChatIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"
      ></path>
    </svg>
  );
};

const EmailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path d="M18 6.102c1.3.127 2.175.416 2.828 1.07C22 8.343 22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.772 2 14s0-5.657 1.172-6.828C3.825 6.518 4.7 6.229 6 6.102"></path>
        <path
          strokeLinecap="round"
          d="M10 6h4m-3 3h2m-4.841 2.8l-.72-.6c-.707-.59-1.061-.885-1.25-1.288C6 9.508 6 9.048 6 8.126V7c0-2.357 0-3.536.732-4.268S8.643 2 11 2h2c2.357 0 3.535 0 4.268.732S18 4.643 18 7v1.127c0 .92 0 1.381-.189 1.785s-.543.698-1.25 1.287l-.72.6c-1.836 1.53-2.755 2.296-3.841 2.296s-2.004-.765-3.841-2.296Z"
        ></path>
        <path
          strokeLinecap="round"
          d="m6 10l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295s2.005-.765 3.841-2.296L18 10"
        ></path>
      </g>
    </svg>
  );
};

const ArrowRightUp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 18L18 6m0 0H9m9 0v9"
      ></path>
    </svg>
  );
};

export { ChatIcon, EmailIcon, ArrowRightUp };
