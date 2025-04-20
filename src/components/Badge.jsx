const badgeTypeClasses = {
  'gray-small': {
    outer: 'bg-[#4A4A4A]/20 rounded',
    inner: 'text-[#4A4A4A] text-base leading-normal',
  },
  'blue-large': {
    outer: 'bg-[#5956E9]/20 rounded-lg',
    inner: 'text-[#5956E9] text-lg leading-normal',
  },
  'green-large': {
    outer: 'bg-[#07CA9D]/20 rounded-lg',
    inner: 'text-[#07CA9D] text-lg leading-normal',
  },
  'yellow-large': {
    outer: 'bg-[#FDB840]/20 rounded-lg',
    inner: 'text-[#FDB840] text-lg leading-normal',
  },
};

export const BadgeItem = ({ text, type }) => {
  const classes = badgeTypeClasses[type];

  return (
    <div className={`px-2 py-1 flex justify-center items-center w-max font-normal font-poppins ${classes.outer}`}>
      <span className={`${classes.inner}`}>{text}</span>
    </div>
  );
};
