import Link from 'next/link'
import React from 'react'

const Step2 = () => {
  let formattingRates: { range: string, percentage: number }[] = [
    { range: "Less than $500", percentage: 17 },
    { range: "$500 - $1,000", percentage: 47 },
    { range: "$1,000 - $1,500", percentage: 19 },
    { range: "$1,500+", percentage: 16 },
  ];
  return (
    <div id={'costs-step-two'}>
      {/* heading */}
      < h2 className="text-[clamp(24px,4vw,32px)] text-[#4e9eb8] font-bold mb-4 border-l-4 border-[#ffca38] pl-4" >
        2. Interior Design
      </h2>
      <p className="text-[clamp(0.875rem,2.5vw,1.2rem)] text-[#3c3c3c] mb-2.5">The typesetting process mainly focuses on readability, such as proper spacing and fonts. The cost to typeset a book will vary depending on length, genre, and whether or not you’d like to package it with a final proofread.</p>

      <h2 className="text-[clamp(0.875rem,2.5vw,1.1rem)] text-[#3c3c3c] font-bold mb-2.5">According to data from{" "}
        <Link href={'#'} className="text-[#4e9eb8] underline hover:text-[#4e9eb8]/70 font-bold">Reedsy</Link>
        , a marketplace for book publishing professionals:
      </h2>
      <ul className="blueBullets list-disc list-inside space-y-1 mb-2.5">
        {formattingRates.map((item, index) => (
          <li key={index}
            style={{ '--bullet-color': '#4e9eb8' } as React.CSSProperties}
            className="text-[clamp(0.875rem,2.5vw,1rem)] text-[#3c3c3c]">
            <span className='font-bold'>{item.percentage}</span>% of people pay <span className='font-bold'>{item.range}</span>{" "} for book formatting
          </li>
        ))}
      </ul>

      <p className="text-[clamp(0.875rem,2.5vw,1.2rem)] text-[#3c3c3c]">The price of typesetting will increase based on the number of images, graphs, and tables in your book.</p>
    </div>
  )
}

export default Step2