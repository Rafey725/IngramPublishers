import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CreateAccountComp = () => {
  return (
    <div className='max-w-screen w-full h-[92vh] md:h-screen flex box-border overflow-hidden'>
      {/* left side */}
      <div className='relative w-full md:w-[41.5%] h-full flex flex-col justify-between'>
        <div className='w-full flex-1 flex justify-center pt-15'>
          <div>
            {/* logo */}
            <Link href={"/"}>
              <div className='relative w-65 h-14 mb-5 mx-auto'>
                <Image src="/IngramLogo.png" alt='logo' fill className='object-contain md:scale-115 lg:scale-150' />
              </div>
            </Link>
            <h2 className='text-[24px] font-semibold text-[#535a62] mb-4 text-center'>Create Account</h2>
            <form className="flex flex-col items-center w-full max-w-xs mx-auto p-4">
              {/* First Name */}
              <div className="mb-4 w-full">
                <label className="block mb-1 text-[14px] text-[#535a62] font-semibold" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  className="w-full border border-gray-300 px-3 py-1.5 text-[#535a62] rounded focus:outline-none focus:ring-2 focus:ring-[#3a7c92]"
                />
              </div>

              {/* Last Name */}
              <div className="mb-4 w-full">
                <label className="block mb-1 text-[14px] text-[#535a62] font-semibold" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  className="w-full border border-gray-300 px-3 py-1.5 text-[#535a62] rounded focus:outline-none focus:ring-2 focus:ring-[#3a7c92]"
                />
              </div>

              {/* Email */}
              <div className="mb-4 w-full">
                <label className="block mb-1 text-[14px] text-[#535a62] font-semibold" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full border border-gray-300 px-3 py-1.5 text-[#535a62] rounded focus:outline-none focus:ring-2 focus:ring-[#3a7c92]"
                />
              </div>

              {/* Password */}
              <div className="mb-4 w-full">
                <label className="block mb-1 text-[14px] text-[#535a62] font-semibold" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  className="w-full border border-gray-300 px-3 py-1.5 bg-[#f5f5f5] text-[#535a62] rounded focus:outline-none focus:ring-2 focus:ring-[#3a7c92]"
                />
              </div>

              {/* Confirm Password */}
              <div className="mb-4 w-full">
                <label className="block mb-1 text-[14px] text-[#535a62] font-semibold" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  required
                  className="w-full border border-gray-300 px-3 py-1.5 bg-[#f5f5f5] text-[#535a62] rounded focus:outline-none focus:ring-2 focus:ring-[#3a7c92]"
                />
              </div>

              {/* Checkboxes */}
              <div className="flex flex-col gap-3 mb-4 w-full text-[13px] text-[#535a62]">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span>I want to receive promotional emails from IngramSpark</span>
                </label>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" required className="mt-1" />
                  <span>
                    I agree to the <span className="text-[#3a7c92]">Privacy Notice</span> and
                    <span className="text-[#3a7c92]"> Terms of Service</span>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-[205px] h-9 bg-[#3a7c92] text-white rounded-lg hover:bg-[#4e9eb8] transition duration-100 cursor-pointer"
              >
                Create Account
              </button>
            </form>
          </div>

        </div>

        <footer className='w-full text-xs text-black text-center md:text-[#969696] py-2 px-3 flex flex-col items-center justify-center border-t border-gray-200'>
          <p>© Copyright 2025 Lightning Source LLC. All Rights Reserved.
          </p>
          <div className='space-x-3'>
            <Link href="#" className='md:text-[#3a7c92] hover:text-[#244e5b] hover:underline'>Privacy Notice</Link>
            <Link href="#" className='md:text-[#3a7c92] hover:text-[#244e5b] hover:underline'>Terms of Use</Link>
          </div>
        </footer>
      </div>
      {/* right side */}
      <div className='hidden md:flex w-[58.5%] min-h-screen bg-[url(/createaccount-bg.jpg)] bg-cover bg-no-repeat'>

      </div>
    </div>
  )
}

export default CreateAccountComp