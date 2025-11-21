import Image from 'next/image'
import React from 'react'

const Step3 = () => {
  return (
    <div id={'costs-step-three'}>
      {/* heading */}
      < h2 className="text-[clamp(24px,4vw,32px)] text-[#4e9eb8] font-bold mb-4 border-l-4 border-[#ffca38] pl-4" >
        3. Book Cover Design
      </h2 >
      {/* image and description */}
      <div className='h-full w-full flex flex-col-reverse xl:flex-row justify-between items-start py-4 '>
        <div className='xl:max-w-120'>
          <p className="text-[clamp(0.875rem,2.5vw,1.1rem)] text-[#3c3c3c] mb-2.5">The typesetting process mainly focuses on readability, such as proper spacing and fonts. The cost to typeset a book will vary depending on length, genre, and whether or not you’d like to package it with a final proofread.</p>
          <p className="text-[clamp(0.875rem,2.5vw,1.1rem)] text-[#3c3c3c]">The price of cover design is directly related to a designer’s experience. If you’re going to publish both print and ebook versions (which we recommend), make sure to look for a cover designer who can design both the print and ebook cover. Ask to see examples of a designer’s work before signing a contract and expect to spend at least $500 for a professional cover design.</p>
        </div>

        <div className='shrink-0 relative w-75 h-60'>
          <Image src={'/6StepsCostsImages/image2.webp'} alt="image" fill className="object-contain" />
        </div>
      </div>
    </div>
  )
}

export default Step3