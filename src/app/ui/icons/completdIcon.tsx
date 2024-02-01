const CompletedIcon = ({
  background,
  circleColor,
}: {
  background: string;
  circleColor: string;
}) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 36 36"
        fill={background}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18 3C26.2843 3 33 9.71573 33 18C33 26.2843 26.2843 33 18 33C9.71573 33 3 26.2843 3 18C3 9.71573 9.71573 3 18 3Z"
          stroke={circleColor}
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.8571 17.3706L16.7395 23L25.1429 13"
          stroke={circleColor}
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default CompletedIcon;
