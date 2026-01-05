/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'

const Step4 = () => {
  return (
    <div id={'costs-step-four'}>
      {/* heading */}
      <h2 className="text-[clamp(24px,4vw,32px)] text-[#4e9eb8] font-bold mb-4 border-l-4 border-[#ffca38] pl-4" >
        4. Publishing
      </h2 >

      {/* description list */}
      <ul className="space-y-2 mb-2.5 text-[clamp(0.875rem,2.5vw,1rem)] text-[#3c3c3c]">
        <li>One publishing expense you’ll incur is purchasing an ISBN, if you choose not to use a{" "}
          <Link href=""
            className='underline text-[#4e9eb8] hover:opacity-70'>{" "}free ISBN</Link>.
          This is necessary if you’d like to enable your book for distribution, and each format of each book you publish must have its own unique ISBN.
        </li>

        <li>As part of our{" "}
          <Link href="#"
            className='underline text-[#4e9eb8] hover:opacity-70'>{" "}catalog integrity initiative</Link>, we require that ISBNs are valid and properly acquired.⁠ Each country has a single approved and designated agency that issues ISBNs for publishers and self-publishers located in that country.{" "}
          <Link href="#"
            className='underline text-[#4e9eb8] hover:opacity-70'>{" "}Bowker</Link>
          is the official ISBN agency for the US;{" "}
          <Link href="#"
            className='underline text-[#4e9eb8] hover:opacity-70'>{" "}Nielsen</Link>
          is the official ISBN agency for the UK and Ireland; Thorpe-Bowker is the official ISBN agency for Australia. IngramPublishers does business in many other countries, so we encourage each customer to ensure they are acquiring their ISBN from their country’s approved ISBN Agency. You can find the approved ISBN agency for your country on the{" "}
          <Link href="#"
            className='underline text-[#4e9eb8] hover:opacity-70'>{" "}International ISBN Agency's Website</Link>.
        </li>

        <li>For U.S. customers, ISBNs can be purchased from Bowker directly through your <Link href="#"
          className='underline text-[#4e9eb8] hover:opacity-70'>{" "}IngramPublishers account</Link> for $85 each. You can also buy a block of ten ISBNs from{" "}
          <Link href="#"
            className='underline text-[#4e9eb8] hover:opacity-70'>{" "}Bowker</Link>
          for $295. At IngramPublishers, we believe it's in your best interest to be recognized as the owner of your work and a publisher in your own right, which is why we encourage publishers to{" "}
          <Link href="#"
            className='underline text-[#4e9eb8] hover:opacity-70'>{" "}purchase their own ISBNs</Link>.
        </li>

        <li>If you want your book to be available in brick-and-mortar bookstores, you’ll need a barcode in addition to your ISBN. Some ISBN services sell barcodes, as well as ISBNs, but you can use IngramPublishers’s book cover template generator to get a free barcode.
        </li>
      </ul >
    </div>
  )
}

export default Step4