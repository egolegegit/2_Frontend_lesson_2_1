import React from 'react'
const SunIcon = () => {
  const title = 'Enable Light Mode'
  // const title = props.title || 'ic wb sunny 24px'
  return (
    <svg
      height="20"
      width="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="#F7F7F7">
        <path d="M5.61 4.02l-1.49-1.49-1.17 1.17 1.48 1.49 1.18-1.17z m-2.29 4.7h-2.49v1.66h2.49v-1.66z m7.47-8.26h-1.66v2.44h1.66v-2.44z m6.18 3.24l-1.17-1.17-1.48 1.49 1.17 1.17 1.48-1.49z m-2.66 11.37l1.48 1.5 1.18-1.17-1.5-1.49-1.16 1.16z m2.29-6.36v1.66h2.49v-1.66h-2.49z m-6.64-4.15c-2.75 0-4.98 2.23-4.98 4.98s2.23 4.98 4.98 4.98 4.98-2.23 4.98-4.98-2.23-4.98-4.98-4.98z m-0.83 14.07h1.66v-2.45h-1.66v2.45z m-6.18-3.24l1.17 1.17 1.48-1.5-1.17-1.17-1.48 1.5z" />
      </g>
    </svg>
  )
}

export default SunIcon
