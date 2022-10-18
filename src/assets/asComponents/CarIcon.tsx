import * as React from "react"

export function CarIcon(props: React.SVGAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4547_7255)">
        <path
          d="M19 19H5v1a1 1 0 01-1 1H3a1 1 0 01-1-1V10l2.48-5.788A2 2 0 016.32 3h11.36a2 2 0 011.838 1.212L22 10v10a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1zm1-7H4v5h16v-5zM4.176 10h15.648l-2.143-5H6.32l-2.144 5zM6.5 16a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
          fill="#7A7A80"
        />
      </g>
      <defs>
        <clipPath id="clip0_4547_7255">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}