interface ILoadingIcon {
  size: number;
  color?: string;
}

export default function LoadingIcon({ size, color = "#fff" }: ILoadingIcon) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: size + "px",
        width: size + "px",
      }}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ animation: "spin 1s linear infinite" }}
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          strokeDasharray="40 20"
          strokeDashoffset="0"
        />
      </svg>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
