import PublishHeroBanner from '@/components/PublishHeroBanner'
import React from 'react'
import OptionsDisplay from './OptionsDisplay'
import Image from 'next/image'

const BookOptionsComp = () => {
  // Outside the book data
  let outsideBook = {
    paperBackItems: [
      {
        image: "/book-cover-finish-image.webp",
        scale: "100",
        mainHeading: "Book Cover Finish",
        list: [
          { heading: "Matte Cover:", description: "Soft, velvety feel, no shine, polished" },
          { heading: "Gloss Cover:", description: "High shine, smooth finish and texture" }
        ]
      },
      {
        image: "/book-binding-image.webp",
        scale: "100",
        mainHeading: "Book Binding",
        list: [
          { heading: "Perfect Bound:", description: "Pages and laminated cover glued together at the spine" }
        ]
      }
    ],
    hardCoverItems: [
      {
        image: "/book-cover-options-image.webp",
        scale: "130",
        mainHeading: "Book Cover Options",
        list: [
          { description: "Available with or without a dust jacket" }
        ]
      },
      {
        image: "/book-cover-finish-image.webp",
        scale: "100",
        mainHeading: "Book Cover Finish",
        list: [
          { heading: "Matte Cover:", description: "Soft, velvety feel, no shine, polished" },
          { heading: "Gloss Cover:", description: "High shine, smooth finish and texture" },
          { heading: "Digital Cloth Cover:", description: "Subtle, cloth-like look (available with or without dust jacket). Textured feel available only for books printed in the US and UK" }
        ]
      },
      {
        image: "/book-binding-image.webp",
        scale: "100",
        mainHeading: "Book Binding",
        list: [
          { heading: "Case Laminate:", description: "Laminated cover pasted on cover boards and folded over the edges" },
          { heading: "Jacketed Case Laminate:", description: "Case laminate cover that includes a laminated jacket folded over the cover" }
        ]
      }
    ]
  }

  let trimSizeOptions = {
    paperBackItems: [
      {
        image: "/paperback-white-paper-image.webp",
        scale: "100",
        mainHeading: "White Paper",
        list: [
          { description: "Paperback books with white paper can be sized between 4 inches wide x 6 inches tall (152mm x 102mm) and 8.5 inches wide x 11 inches tall (280mm x 216mm)." }
        ]
      },
      {
        image: "/paperback-creme-paper-image.webp",
        scale: "100",
        mainHeading: "Creme & Groundwood Paper",
        list: [
          { description: "Paperback books with crème or groundwood paper can be sized between 4 inches wide x 6 inches tall (152mm x 102mm) and 6.14 inches wide x 9.252 inches tall (235mm x 156mm)." }
        ]
      },
    ],
    hardCoverItems: [
      {
        image: "/hardcover-white-paper-image.webp",
        scale: "100",
        mainHeading: "White Paper",
        list: [
          { description: "Hardcover books with white paper can be sized between 5 inches wide x 8 inches tall (203mm x 127mm) and 8.5 inches wide x 11 inches tall (280mm x 216mm)." }
        ]
      },
      {
        image: "/hardcover-creme-paper-image.webp",
        scale: "100",
        mainHeading: "Creme & Groundwood Paper",
        list: [
          { description: "Hardcover books with crème or groundwood paper can be sized between 5 inches wide x 8 inches tall (203mm x 127mm) and 6.14 inches wide x 9.21 inches tall (234mm x 156mm)." }
        ]
      },
    ],
  }


  let interiorColorList = [
    <>
      <span className='font-bold'>Black & White:</span>{" "}Most economical, printed on crème or white paper using inkjet technology. Ideal for text-heavy books.
    </>,
    <>
      <span className='font-bold'>Standard Color:</span>{" "}Standard color quality, printed on white paper using inkjet technology. Ideal for books that have some color.
    </>,
    <>
      <span className='font-bold'>Premium Color:</span>{" "}Higher color quality with vivid color and crisp edges, printed on white paper using inkjet technology. Ideal for image-heavy books and children’s books.
    </>,
    <>
      <span className='font-bold'>Ultra-Premium Color:</span>{" "}Best color quality with ink laser-printed on the page, leaving a satin finish with light sheen and vibrant colors. Ideal for photography books, coffee table books, and high-quality children’s books.
    </>
  ]

  let paperColorList = [
    <>
      <span className='font-bold'>Groundwood 38lb / 56gsm:</span>Available for black & white printing, and select, small-format trim sizes
    </>,


    <>
      <span className='font-bold'>Crème 50lb / 74gsm:</span>Available for black & white printing
    </>,


    <>
      <span className='font-bold'>White 50lb / 74gsm:</span>Available for black & white printing and standard color printing
    </>,


    <>
      <span className='font-bold'>White 70lb / 104gsm:</span>Available for all color printing options
    </>,
  ]

  return (
    <>
      {/* hero banner */}
      <PublishHeroBanner
        image="/book-options-hero-image.webp"
        heading="Print Book Options"
        description="Flexibility to professionally publish your book the way you want, with the quality you need"
        button={true}
        gotoLink='/create-account'
        bgColor='#eff9fe'
      />
      {/* main body */}
      <div className='mt-20 mb-40'>
        {/* Outside the book */}
        <div className='max-w-[800px] md:my-10 mx-auto flex flex-col items-center'>
          <h1 className='text-[clamp(29px,2.5vw,34px)] font-bold text-[#666]'>Outside the Book</h1>
          <div className='w-25 h-1 bg-[#4e9eb8] mt-3 mb-6' />
          <OptionsDisplay display={outsideBook} />
        </div>

        {/* Inside the book */}
        <div className='max-w-[1160px] md:my-10 mx-auto flex flex-col items-center'>
          <h1 className='text-[clamp(29px,2.5vw,34px)] font-bold text-[#666]'>Inside the Book</h1>
          <div className='w-25 h-1 bg-[#4e9eb8] mt-3 mb-6' />
          {/* Interior Color */}
          <div className='flex flex-col lg:flex-row items-center md:justify-between px-3 md:px-10'>
            <div className='shrink-0 relative w-full sm:w-100 md:w-140 h-50 sm:h-60 md:h-85'>
              <Image src="/cookbook-image.webp" alt='image' fill className='object-contain' />
            </div>
            <div className='sm:px-4'>
              <h1 className='text-[22px] font-bold text-[#4e9eb8]'>Interior Color</h1>
              <ul className='space-y-4'>
                {interiorColorList.map((item, idx) => {
                  return (
                    <li key={idx}>{item}</li>
                  )
                })}
              </ul>
            </div>
          </div>
          {/* Paper Color and Weights */}
          <div className='flex flex-col-reverse lg:flex-row items-center md:justify-between px-3 md:px-10 mt-5'>
            <div className='sm:px-4'>
              <h1 className='text-[22px] font-bold text-[#4e9eb8]'>Paper Color and Weights</h1>
              <ul className='space-y-4 mb-5'>
                {paperColorList.map((item, idx) => {
                  return (
                    <li key={idx}>{item}</li>
                  )
                })}
              </ul>
              <p>*Ink and paper options may not be available at all book trim sizes. Not all Ink options will be available for all paper options.</p>
            </div>
            <div className='shrink-0 relative w-full sm:w-100 md:w-140 h-50 sm:h-60 md:h-95'>
              <Image src="/book-pages-image.webp" alt='image' fill className='object-contain' />
            </div>
          </div>
        </div>

        {/* Learn more */}
        <div className='flex flex-col items-center mt-20 mb-30 px-3'>
          <h1 className='text-[clamp(29px,2.5vw,34px)] font-bold text-center'>Need Help Picking a Trim Size for Your Book?</h1>
          <button className='text-white w-[144px] h-[38px] mt-5 font-semibold rounded-[9px] bg-[#4e9eb8] hover:bg-[#83bbcd] transition-all duration-100 cursor-pointer'>Learn More</button>
        </div>


        {/* Trim size options */}
        <div className='max-w-[800px] md:my-10 mx-auto flex flex-col items-center'>
          <h1 className='text-[clamp(29px,2.5vw,34px)] font-bold text-[#4e9eb8] text-center'>Book Trim Size Options</h1>
          <div className='w-25 h-1 bg-[#4e9eb8] mt-3 mb-6' />
          <OptionsDisplay display={trimSizeOptions} />
        </div>

        {/* Cost Calculation */}
        <div className='max-w-[1150px] w-full md:mt-5 mx-auto flex flex-col items-center'>
          <div className='w-full flex flex-col lg:flex-row items-center md:justify-between px-3 md:px-10 gap-y-5'>
            <div className='shrink-0 relative w-full sm:w-100 h-40 sm:h-60 md:h-85'>
              <Image src="/cost-to-print-image.webp" alt='image' fill className='object-contain' />
            </div>
            <div className='sm:px-4 max-w-142'>
              <h1 className='text-[clamp(29px,2.5vw,34px)] leading-[clamp(29px,2.5vw,43px)] font-bold text-[#4e9eb8]'>How Much Does It Cost to Print a Book?</h1>
              <div className='w-40 h-1 bg-[#4e9eb8] mt-3 mb-6' />
              <ul className='space-y-3'>
                <li>The cost to print a book depends on the page count of your book and the specifications you choose.</li>
                <li>For example, hardcover books cost more to produce than paperbacks; color printing costs more than black & white; books with more pages cost more than those with less.</li>
                <li>Use our printing cost calculator to determine the cost of your book.</li>
              </ul>
              <div className='flex justify-center'>
                <button className='text-white w-[144px] h-[38px] mt-5 font-semibold rounded-[9px] bg-[#4e9eb8] hover:bg-[#83bbcd] transition-all duration-100 cursor-pointer'>Calculate Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookOptionsComp