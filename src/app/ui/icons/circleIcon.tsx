const CircleItem = ({
  background,
  circleColor,
}: {
  background: string;
  circleColor: string;
}) => {
  return (
    <>
      <svg
        width="27"
        height="27"
        viewBox="0 0 25 25"
        fill={`${background}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.125 12.2041C20.125 17.2592 16.2635 21.3571 11.5 21.3571C6.73655 21.3571 2.875 17.2592 2.875 12.2041C2.875 7.14899 6.73655 3.05103 11.5 3.05103C16.2635 3.05103 20.125 7.14899 20.125 12.2041Z"
          stroke={`${circleColor}`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default CircleItem;
