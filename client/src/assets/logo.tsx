export const Logo = ({ size = 100, color = "black" }) => (
  <svg
    width={size}
    height={size / 2}
    viewBox="0 0 200 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="10"
      y="70"
      fontFamily="monospace"
      fontSize="60"
      fontWeight="bold"
      fill={color}
    >
      &lt;FH/&gt;
    </text>
  </svg>
);
