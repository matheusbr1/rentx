import * as React from "react"

export function PasswordIcon(props: React.SVGAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4512_2503)">
        <path
          d="M6 8V7a6 6 0 1112 0v1h2a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1h2zm13 2H5v10h14V10zm-8 5.732a2 2 0 112 0V18h-2v-2.268zM8 8h8V7a4 4 0 10-8 0v1z"
          fill="#7A7A80"
        />
      </g>
      <defs>
        <clipPath id="clip0_4512_2503">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
