import { SVGAttributes } from "react";

export default function ArrowIcon(props: SVGAttributes<SVGSVGElement>) {
  return (
    // LEFT ARROW
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.5234 16.2191L8.17578 10.8715L13.5234 5.52393"
        stroke="black"
        strokeWidth="1.3369"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
