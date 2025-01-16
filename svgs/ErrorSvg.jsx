/* eslint-disable react/prop-types */
const ErrorSvg = ({ size = 150 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      x={0}
      y={0}
      viewBox="0 0 24 24"
      style={{ enableBackground: "new 0 0 512 512" }}
      xmlSpace="preserve"
    >
      <g>
        <g data-name="Layer 2">
          <g data-name="Layer 1">
            <path
              fill="#cf1f25"
              d="M23.62 19.05 14.29 2.61a2.56 2.56 0 0 0-4.45 0L.5 19.05a2.56 2.56 0 0 0 2.23 3.82h18.66a2.56 2.56 0 0 0 2.23-3.82z"
              opacity={1}
              data-original="#cf1f25"
            />
            <path
              fill="#ffffff"
              d="M13.22 19.16a1.45 1.45 0 0 1-1 .38 1.49 1.49 0 0 1-1-.37 1.33 1.33 0 0 1-.44-1.05 1.41 1.41 0 0 1 1.43-1.42 1.41 1.41 0 0 1 1 .41 1.36 1.36 0 0 1 .42 1 1.34 1.34 0 0 1-.41 1.05zM13.6 9.64l-.37 4.19A3.37 3.37 0 0 1 13 15a.82.82 0 0 1-.78.48.8.8 0 0 1-.77-.47 4 4 0 0 1-.27-1.23l-.27-4.08c-.05-.81-.08-1.37-.08-1.72a1.7 1.7 0 0 1 .41-1.2 1.42 1.42 0 0 1 1.08-.44A1.12 1.12 0 0 1 13.4 7a3.53 3.53 0 0 1 .26 1.52 11.3 11.3 0 0 1-.06 1.12z"
              opacity={1}
              data-original="#ffffff"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ErrorSvg;
