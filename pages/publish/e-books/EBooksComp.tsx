/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import PublishHeroBanner from '@/components/PublishHeroBanner'
import Image from 'next/image'
import Link from 'next/link'

const EBooksComp = () => {
  // Ebook Self-Publishing benefits
  const ebookBenefits = [
    "One platform to manage all of your ebook files",
    "No need to juggle multiple contracts for various individual distributors",
    "Book distribution to major ebook retailers around the world",
    "Upload your eBook to your account for free"
  ]

  // Retailers list
  const retailers = [
    "Amazon",
    "Apple",
    "Kobo",
    "Barnes & Noble"
  ]

  // Cover specifications
  const coverSpecs = [
    <><span className='font-bold'>Format:</span> Must be a JPG file.</>,
    <><span className='font-bold'>Size:</span> 2560 pixels on the longest side. Minimum 1600 pixels on the shortest side (at 350 dpi).</>,
    "The content of the cover image must not infringe on another publisher's or artist's copyright."
  ]

  // Interior specifications
  const interiorSpecs = [
    <><span className='font-bold'>Format:</span> EPUB 2 or 3 (flowable text).</>,
    <><span className='font-bold'>Size:</span> 100MB or less.</>,
    "No single image inside an EPUB file can be greater than 5.6 million pixels (calculated as length in pixels X width in pixels).",
    "Include an internal cover image that's formatted to the same dimensions as your book's interior content. This image should be integrated into the layout of your book's pages",
    "Be sure the metadata entered in IngramSpark matches the information on your cover. For example, if the cover art and the book’s interior file are for a book titled Paradiso, but the metadata is for Purgatorio, then the items do not match",
    "There should not be any reference to page numbers in your ebook. This includes the Table of Contents. E-readers are limited in the way they display content and your book may appear differently from device to device"
  ]

  // Conversion service features
  const conversionFeatures = [
    "Standard EPUB or Fixed Layout EPUB",
    "Guaranteed e-reader compatibility at all retailers",
    "Optimization for legibility, quick download speeds, and consistency",
    "60¢ / page"
  ]

  // EPUB format benefits
  const epubBenefits = [
    "Each of IngramSpark's ebook retail and library partners have unique file requirements. A valid EPUB file, created with our outlined specifications, enables us to meet the ebook file requirements of each partner, getting your ebook where it belongs—on every device.",
    "The EPUB format is the official standard of the IDPF (International Digital Publishing Forum) and is designed for reflowable content, meaning an EPUB reader can optimize text for any e-reading device."
  ]

  return (
    <>
      {/* hero banner */}
      <PublishHeroBanner
        image="/ebook-hero-image.webp"
        heading="Self-Publish an Ebook"
        description="Successfully manage your ebook publishing from one platform with IngramSpark."
        button={true}
        gotoLink='/create-account'
        bgColor='#eff9fe'
      />

      {/* Main body */}
      <div className='max-w-[1000px] mx-auto px-3 md:px-10 py-16'>
        {/* Ebook Self-Publishing Section */}
        <div className='flex flex-col-reverse md:flex-row items-center gap-8 mb-20'>
          {/* Image placeholder */}
          <div className='w-full md:w-[400px] h-[200px] md:h-[240px] relative shrink-0'>
            <Image src="/ebook/ebook-image-1.webp" alt='image' fill className='object-contain' />
          </div>

          {/* Content */}
          <div className='flex-1'>
            <h2 className='text-[clamp(24px,4vw,32px)] leading-[clamp(25px,2.5vw,38px)] font-bold mb-4'>
              Ebook Self-Publishing with IngramSpark
            </h2>
            <ul className='space-y-3 text-[#666]'>
              {ebookBenefits.map((benefit, idx) => (
                <li key={idx} className='flex items-start gap-3'>
                  <div className='w-1.5 h-1.5 bg-[#666] rounded-full mt-2 shrink-0'></div>
                  <p>{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Where Your Ebook Could Be Sold Section */}
        <div className='flex flex-col md:flex-row-reverse items-center gap-8 mb-20'>
          {/* Image placeholder */}
          <div className='w-full md:w-[400px] h-[300px] md:h-[350px] relative shrink-0'>
            <Image src="/ebook/ebook-image-2.webp" alt='image' fill className='object-contain' />
          </div>

          {/* Content */}
          <div className='flex-1'>
            <h2 className='text-[clamp(24px,4vw,32px)] leading-[clamp(28px,2.5vw,38px)] font-bold mb-4'>
              See Where Your Ebook Could Be Sold with IngramSpark
            </h2>
            <p className='text-[#666] mb-6'>
              Sell your book through retailers like {retailers.map((retailer, idx) => (
                <span key={idx}>
                  {retailer}{idx < retailers.length - 1 ? ', ' : ''}
                  {idx === retailers.length - 2 ? 'and ' : ''}
                </span>
              ))} and more.
            </p>
            <button className='px-3 py-2 bg-[#4e9eb8] hover:bg-[#71bcd5] transition-all duration-300 cursor-pointer text-white rounded-lg font-medium'>
              See Online Retailers
            </button>
          </div>
        </div>

        {/* Important Ebook File Creation Specs Section */}
        <div className='mb-20'>
          <h2 className='text-[clamp(24px,4vw,30px)] leading-[clamp(25px,2.5vw,38px)] font-bold text-[#4e9eb8] mb-8 text-center'>
            Important Ebook File Creation Specs
          </h2>

          <div className='grid md:grid-cols-2 gap-8'>
            {/* Cover Specs */}
            <div className='bg-[#f6f8fa] border border-gray-100 rounded-lg p-6'>
              <div className='flex flex-col items-center gap-4 mb-6'>
                <div className='w-18 h-18 relative shrink-0'>
                  <Image src="/ebook/ebook-image-3.webp" alt='image' fill className='object-contain scale-115' />
                </div>
                <h3 className='text-[clamp(20px,3vw,24px)] font-bold text-[#333]'>
                  Cover (High-res JPG)
                </h3>
              </div>
              <ul className='space-y-3 text-[clamp(14px,2vw,16px)] leading-[clamp(16px,2.5vw,20px)]'>
                <li>File must contain the front cover only. Full-spread print book jackets that include the spine and back cover will be rejected.</li>
                {coverSpecs.map((spec, idx) => (
                  <li key={idx} className='flex items-start gap-3'>
                    <div className='w-1.5 h-1.5 bg-[#333] rounded-full mt-2 shrink-0'></div>
                    <p>{spec}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interior Specs */}
            <div className='bg-[#f6f8fa] border border-gray-100 rounded-lg p-6'>
              <div className='flex flex-col items-center gap-4 mb-6'>
                <div className='w-18 h-18 relative shrink-0'>
                  <Image src="/ebook/ebook-image-4.webp" alt='image' fill className='object-contain scale-115' />
                </div>
                <h3 className='text-[clamp(20px,3vw,24px)] font-bold text-[#333]'>
                  Interior (EPUB)
                </h3>
              </div>
              <ul className='space-y-3 text-[clamp(14px,2vw,16px)] leading-[clamp(16px,2.5vw,20px)]'>
                {interiorSpecs.map((spec, idx) => (
                  <li key={idx} className='flex items-start gap-3'>
                    <div className='w-1.5 h-1.5 bg-[#333] rounded-full mt-2 shrink-0'></div>
                    <p>{spec}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='flex justify-center mt-5'>
            <Link href="/create-account">
              <button className='text-white w-[160px] h-[40px] text-[18px] mt-5 rounded-[7px] bg-[#4e9eb8] hover:bg-[#83bbcd] transition-all duration-100 cursor-pointer'>Upload Now</button>
            </Link>
          </div>
        </div>

        {/* Print to Ebook Conversion Section */}
        <div className='flex flex-col-reverse md:flex-row items-center gap-8'>
          {/* Content */}
          <div className='flex-1'>
            <h2 className='text-[clamp(24px,4vw,32px)] font-bold text-[#4e9eb8] mb-4'>
              Have a print book you'd like to convert to ebook?
            </h2>
            <ul className='space-y-3 mb-6'>
              {conversionFeatures.map((feature, idx) => (
                <li key={idx} className='flex items-start gap-3'>
                  <div className='w-1.5 h-1.5 bg-[#4e9eb8] rounded-full mt-2 shrink-0'></div>
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
            <button className='px-4 py-1.5 bg-[#4e9eb8] hover:bg-[#71bcd5] transition-all duration-300 cursor-pointer text-white rounded-lg font-medium'>
              Convert Your Book
            </button>
          </div>
          {/* Image */}
          <div className='w-full md:w-[400px] h-[300px] md:h-[350px] relative shrink-0'>
            <Image src="/ebook/ebook-image-5.webp" alt='image' fill className='object-contain' />
          </div>
        </div>
      </div>

      {/* Why EPUB Format Section */}
      <div className='bg-[#fafafa] w-full '>
        <div className='flex max-w-[900px] mx-auto flex-col-reverse md:flex-row-reverse justify-between px-3 pb-7 items-center gap-8 '>
          {/* Content */}
          <div className='flex-1 max-w-120'>
            <h2 className='text-[clamp(24px,4vw,32px)] font-bold text-[#4e9eb8] mb-4'>
              Why EPUB Format?
            </h2>
            <div className='space-y-3'>
              {epubBenefits.map((benefit, idx) => (
                <p key={idx}>{benefit}</p>
              ))}
            </div>
          </div>
          {/* Image */}
          <div className='w-full md:w-[350px] h-[300px] md:h-[350px] relative shrink-0'>
            <Image src="/ebook/ebook-image-6.webp" alt='image' fill className='object-contain' />
          </div>
        </div>
      </div>

      {/* Ready to Self-Publish CTA Section */}
      <div className='w-full py-16 '>
        <div className='max-w-[700px] mx-auto px-5 md:px-10 text-center'>
          <h2 className='text-[clamp(24px,4vw,32px)] font-bold text-[#4e9eb8] mb-6'>
            Ready to Self-Publish a Book to Share with Readers Worldwide?
          </h2>
          <Link href="/create-account">
            <button className='px-7 py-3 btnYellow transition-all duration-300 cursor-pointer text-[18px] rounded-[14px]'>
              Publish Today
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default EBooksComp