import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return ( 
  < >

    <div
      className="flex flex-col items-center justify-center px-4 py-6 text-center min-h-2/3-screen"
    >
      <svg
        className="mb-10 max-w-xs px-8 sm:p-0"
        viewBox="0 0 325 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="67.4531"
          y="24.5283"
          width="30.6604"
          height="18.3962"
          rx="9.19811"
          fill="#8d99ae"
        />
        <rect
          x="294.34"
          y="24.5283"
          width="30.6604"
          height="18.3962"
          rx="9.19811"
          fill="#8d99ae"
        />
        <rect
          x="18.3965"
          y="24.5283"
          width="36.7925"
          height="18.3962"
          rx="9.19811"
          fill="#8d99ae"
        />
        <rect
          x="245.283"
          y="24.5283"
          width="36.7925"
          height="18.3962"
          rx="9.19811"
          fill="#8d99ae"
        />
        <rect
          x="67.4531"
          y="73.5848"
          width="30.6604"
          height="18.3962"
          rx="9.19811"
          fill="#8d99ae"
        />
        <rect
          x="294.34"
          y="73.5848"
          width="30.6604"
          height="18.3962"
          rx="9.19811"
          fill="#8d99ae"
        />

        <rect
          x="183.963"
          y="24.5283"
          width="30.6604"
          height="18.3962"
          rx="9.19811"
          fill="#8d99ae"
        />

        <rect
          x="119.576"
          y="24.5283"
          width="30.6604"
          height="18.3962"
          rx="9.19811"
          fill="#8d99ae"
        />

        <rect
          x="141.037"
          y="73.5848"
          width="49.0566"
          height="18.3962"
          rx="9.19811"
          fill="#8d99ae"
        />
        <g className="animate-flicker-fast">
          <rect
            x="52.123"
            width="45.9906"
            height="18.3962"
            rx="9.19811"
            fill="#edf2f4"
          />
          <rect
            x="279.01"
            width="45.9906"
            height="18.3962"
            rx="9.19811"
            fill="#edf2f4"
          />
          <rect
            x="141.037"
            width="49.0566"
            height="18.3962"
            rx="9.19811"
            fill="#edf2f4"
          />
        </g>
        <g className="animate-flicker-slow">
          <rect
            x="116.51"
            y="49.0566"
            width="33.7264"
            height="18.3962"
            rx="9.19811"
            fill="#eff2f4"
          />
          <rect
            x="183.963"
            y="49.0566"
            width="30.6604"
            height="18.3962"
            rx="9.19811"
            fill="#eff2f4"
          />
          <rect
            y="49.0566"
            width="98.1132"
            height="18.3962"
            rx="9.19811"
            fill="#eff2f4"
          />
          <rect
            x="226.887"
            y="49.0566"
            width="98.1132"
            height="18.3962"
            rx="9.19811"
            fill="#eff2f4"
          />
        </g>
      </svg>
      <g className="animate-flicker-fast">
        <h1 className="mb-2 text-2xl font-extrabold text-white upp">Oops Vros !</h1>
      </g>
      <p className="mb-10 text-white inter">
        The page you're looking for is lost in the web. But don't worry, we'll
        help you find your way.
      </p>
      <Link
        className="font-semibold text-sm  rounded-md py-2 px-4 transition-colors bg-white hover:bg-slate-800 hover:text-white"
        href="/"
        >Go back to Vros</Link
      >
    </div>
    </>
  )
}
