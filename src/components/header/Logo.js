import React from "react";
import { motion } from "framer-motion";

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      yoyo: Infinity,
      duration: 5,
      ease: "easeInOut",
    },
  },
};

const Logo = () => {
  return (
    <>
      <svg
        width="61.26"
        height="19.06"
        viewBox="0 0 61.26 19.06"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="svgGroup"
          stroke-linecap="round"
          fill-rule="evenodd"
          font-size="9pt"
          stroke="currentColor"
          stroke-width="0.25mm"
          fill="currentColor"
          style={{ stroke: "#75fd92", strokeWidth: "0.15mm", fill: "none" }}
        >
          <motion.path
            d="M 10.72 1.88 L 9.5 4.12 Q 9.394 4.014 9.158 3.852 A 7.597 7.597 0 0 0 8.99 3.74 A 4.49 4.49 0 0 0 8.636 3.534 Q 8.45 3.436 8.236 3.342 A 7.835 7.835 0 0 0 8.09 3.28 A 9.168 9.168 0 0 0 7.319 3.001 A 10.878 10.878 0 0 0 6.94 2.89 Q 6.32 2.72 5.68 2.72 Q 4.56 2.72 3.99 3.14 A 1.347 1.347 0 0 0 3.43 4.124 A 1.86 1.86 0 0 0 3.42 4.32 A 1.507 1.507 0 0 0 3.471 4.721 A 1.102 1.102 0 0 0 3.78 5.24 A 1.933 1.933 0 0 0 4.101 5.481 Q 4.27 5.584 4.481 5.676 A 4.626 4.626 0 0 0 4.86 5.82 A 19.5 19.5 0 0 0 5.451 6.006 Q 5.718 6.085 6.02 6.169 A 41.294 41.294 0 0 0 6.66 6.34 A 15.336 15.336 0 0 1 7.814 6.666 Q 8.511 6.894 9.09 7.17 A 4.583 4.583 0 0 1 9.944 7.69 A 3.497 3.497 0 0 1 10.67 8.45 Q 11.146 9.133 11.21 10.199 A 5.678 5.678 0 0 1 11.22 10.54 Q 11.22 11.629 10.837 12.416 A 3.197 3.197 0 0 1 10.8 12.49 Q 10.38 13.3 9.64 13.8 A 5.06 5.06 0 0 1 8.249 14.452 A 5.864 5.864 0 0 1 7.96 14.53 A 8.141 8.141 0 0 1 6.418 14.749 A 9.421 9.421 0 0 1 5.96 14.76 Q 4.9 14.76 3.84 14.54 Q 2.78 14.32 1.8 13.91 A 9.407 9.407 0 0 1 0.103 12.992 A 8.754 8.754 0 0 1 0 12.92 L 1.22 10.54 Q 1.357 10.677 1.655 10.877 A 8.575 8.575 0 0 0 1.86 11.01 A 6.767 6.767 0 0 0 2.301 11.264 Q 2.532 11.386 2.798 11.508 A 12.239 12.239 0 0 0 2.98 11.59 A 8.875 8.875 0 0 0 3.944 11.946 A 10.499 10.499 0 0 0 4.42 12.08 Q 5.2 12.28 6 12.28 Q 7.12 12.28 7.7 11.9 A 1.305 1.305 0 0 0 8.086 11.522 Q 8.28 11.225 8.28 10.82 A 1.43 1.43 0 0 0 8.215 10.379 A 1.144 1.144 0 0 0 7.82 9.82 Q 7.36 9.46 6.54 9.19 Q 5.976 9.004 5.271 8.795 A 69.768 69.768 0 0 0 4.6 8.6 Q 3.548 8.302 2.767 7.948 A 8.117 8.117 0 0 1 2.36 7.75 A 3.971 3.971 0 0 1 1.661 7.291 A 2.942 2.942 0 0 1 1.02 6.56 A 2.859 2.859 0 0 1 0.677 5.693 Q 0.594 5.326 0.582 4.901 A 5.13 5.13 0 0 1 0.58 4.76 A 5.11 5.11 0 0 1 0.701 3.622 A 3.713 3.713 0 0 1 1.27 2.31 Q 1.96 1.32 3.14 0.81 A 6.249 6.249 0 0 1 5.046 0.333 A 7.613 7.613 0 0 1 5.76 0.3 A 8.117 8.117 0 0 1 7.195 0.423 A 7.175 7.175 0 0 1 7.65 0.52 A 9.413 9.413 0 0 1 9.123 1.012 A 8.6 8.6 0 0 1 9.32 1.1 A 10.692 10.692 0 0 1 10.211 1.561 A 8.701 8.701 0 0 1 10.72 1.88 Z M 26.06 5.96 L 26.06 4.12 L 28.4 4.12 L 28.4 14.1 A 5.423 5.423 0 0 1 28.246 15.421 A 4.22 4.22 0 0 1 27.65 16.77 A 4.721 4.721 0 0 1 25.842 18.345 A 5.727 5.727 0 0 1 25.58 18.47 Q 24.26 19.06 22.58 19.06 A 8.436 8.436 0 0 1 21.285 18.966 Q 20.594 18.859 20.015 18.628 A 4.81 4.81 0 0 1 19.7 18.49 Q 18.52 17.92 17.68 16.88 L 19.14 15.46 Q 19.74 16.2 20.65 16.62 Q 21.56 17.04 22.58 17.04 A 4.14 4.14 0 0 0 23.584 16.922 A 3.567 3.567 0 0 0 24.15 16.73 Q 24.86 16.42 25.29 15.77 A 2.447 2.447 0 0 0 25.619 15.001 Q 25.72 14.594 25.72 14.1 L 25.72 12.78 Q 25.2 13.68 24.25 14.17 Q 23.3 14.66 22.24 14.66 A 4.597 4.597 0 0 1 20.89 14.466 A 4.168 4.168 0 0 1 20.33 14.25 Q 19.46 13.84 18.83 13.1 Q 18.2 12.36 17.86 11.4 A 6.037 6.037 0 0 1 17.521 9.461 A 6.807 6.807 0 0 1 17.52 9.36 A 6.366 6.366 0 0 1 17.69 7.868 A 5.644 5.644 0 0 1 17.88 7.24 Q 18.24 6.26 18.89 5.51 Q 19.54 4.76 20.43 4.35 A 4.511 4.511 0 0 1 21.985 3.956 A 5.415 5.415 0 0 1 22.4 3.94 Q 23.62 3.94 24.54 4.49 Q 25.46 5.04 26.06 5.96 Z M 40.56 8.06 L 40.56 14.6 L 37.88 14.6 L 37.88 8.72 A 5.724 5.724 0 0 0 37.846 8.069 Q 37.769 7.398 37.519 6.995 A 1.473 1.473 0 0 0 37.44 6.88 A 1.412 1.412 0 0 0 36.41 6.309 A 1.939 1.939 0 0 0 36.22 6.3 A 2.245 2.245 0 0 0 35.456 6.438 A 2.832 2.832 0 0 0 35.13 6.58 A 3.37 3.37 0 0 0 34.209 7.275 A 3.848 3.848 0 0 0 34.14 7.35 Q 33.7 7.84 33.5 8.48 L 33.5 14.6 L 30.82 14.6 L 30.82 4.12 L 33.24 4.12 L 33.24 6.06 Q 33.64 5.38 34.26 4.91 A 4.472 4.472 0 0 1 35.417 4.282 A 5.215 5.215 0 0 1 35.69 4.19 Q 36.5 3.94 37.4 3.94 Q 38.38 3.94 39.01 4.29 A 2.503 2.503 0 0 1 39.714 4.861 A 2.337 2.337 0 0 1 39.97 5.23 Q 40.3 5.82 40.43 6.56 Q 40.56 7.3 40.56 8.06 Z M 61.26 4 L 61.26 6.44 A 5.426 5.426 0 0 0 60.037 6.573 A 4.439 4.439 0 0 0 59.08 6.91 Q 58.12 7.38 57.7 8.26 L 57.7 14.6 L 55.02 14.6 L 55.02 4.12 L 57.48 4.12 L 57.48 6.36 Q 58.04 5.28 58.9 4.66 A 3.727 3.727 0 0 1 59.871 4.149 A 3.227 3.227 0 0 1 60.72 3.98 L 61.06 3.98 A 1.193 1.193 0 0 1 61.143 3.983 Q 61.209 3.987 61.26 4 Z M 46.453 14.679 A 6.551 6.551 0 0 0 47.74 14.8 A 6.891 6.891 0 0 0 48.589 14.749 A 5.442 5.442 0 0 0 50.04 14.37 A 5.697 5.697 0 0 0 50.166 14.315 A 4.945 4.945 0 0 0 51.77 13.18 Q 52.48 12.42 52.85 11.44 Q 53.22 10.46 53.22 9.38 Q 53.22 8.28 52.85 7.3 Q 52.48 6.32 51.76 5.56 Q 51.04 4.8 50.03 4.37 A 5.169 5.169 0 0 0 48.988 4.054 A 6.536 6.536 0 0 0 47.74 3.94 A 6.891 6.891 0 0 0 46.891 3.991 A 5.442 5.442 0 0 0 45.44 4.37 A 5.697 5.697 0 0 0 45.314 4.425 A 4.945 4.945 0 0 0 43.71 5.56 Q 43 6.32 42.62 7.3 Q 42.24 8.28 42.24 9.38 Q 42.24 10.46 42.62 11.44 Q 43 12.42 43.71 13.18 A 4.764 4.764 0 0 0 43.999 13.464 A 5.068 5.068 0 0 0 45.44 14.37 A 5.255 5.255 0 0 0 46.453 14.679 Z M 15.72 14.6 L 13.04 14.6 L 13.04 4.12 L 15.72 4.12 L 15.72 14.6 Z M 25.72 10.76 L 25.72 8.26 A 3.33 3.33 0 0 0 25.103 7.238 A 3.192 3.192 0 0 0 25.05 7.18 Q 24.62 6.72 24.09 6.47 Q 23.56 6.22 22.98 6.22 A 2.552 2.552 0 0 0 22.286 6.312 A 2.23 2.23 0 0 0 21.86 6.48 Q 21.36 6.74 21 7.21 Q 20.64 7.68 20.45 8.25 Q 20.26 8.82 20.26 9.44 A 3.297 3.297 0 0 0 20.417 10.463 A 3.092 3.092 0 0 0 20.48 10.64 Q 20.7 11.2 21.09 11.62 Q 21.48 12.04 22.01 12.28 Q 22.54 12.52 23.14 12.52 Q 23.58 12.52 23.98 12.38 Q 24.38 12.24 24.72 12 Q 25.06 11.76 25.32 11.43 A 3.071 3.071 0 0 0 25.586 11.035 A 2.518 2.518 0 0 0 25.72 10.76 Z M 45 9.38 Q 45 10.3 45.36 11.01 A 2.922 2.922 0 0 0 45.924 11.788 A 2.658 2.658 0 0 0 46.34 12.12 Q 46.96 12.52 47.74 12.52 Q 48.5 12.52 49.12 12.11 A 2.903 2.903 0 0 0 50.035 11.126 A 3.463 3.463 0 0 0 50.11 10.99 A 3.251 3.251 0 0 0 50.444 9.914 A 4.133 4.133 0 0 0 50.48 9.36 A 3.764 3.764 0 0 0 50.356 8.38 A 3.228 3.228 0 0 0 50.11 7.74 A 3.042 3.042 0 0 0 49.591 7.006 A 2.67 2.67 0 0 0 49.12 6.62 Q 48.5 6.22 47.74 6.22 Q 46.96 6.22 46.34 6.63 A 2.835 2.835 0 0 0 45.418 7.641 A 3.374 3.374 0 0 0 45.36 7.75 A 3.312 3.312 0 0 0 45.037 8.812 A 4.235 4.235 0 0 0 45 9.38 Z M 15.72 2.66 L 13.04 2.66 L 13.04 0 L 15.72 0 L 15.72 2.66 Z"
            vector-effect="non-scaling-stroke"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
        </g>
      </svg>
    </>
  );
};

export default Logo;
