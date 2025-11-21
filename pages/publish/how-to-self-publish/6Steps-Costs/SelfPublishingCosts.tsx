import React from 'react'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Link from 'next/link';

const SelfPublishingCosts = () => {
    return (
            <div id='six-costs-steps' className='max-w-[78.125rem] flex flex-col items-start md:gap-4 xl:gap-7 mx-auto my-12 px-5 md:px-10'>
                <div className="max-w-195 md:w-[clamp(20rem,50vw,48.75rem)] py-6">
                    <ul className=' text-[clamp(1rem,2.5vw,1.5rem)] text-[#3c3c3c] mb-10 space-y-4'>
                        <li className='font-light'>The{" "}
                            <Link href="#" className="text-[#4e9eb8] underline hover:text-[#4e9eb8]/70">cost to self-publish a book</Link>
                            {" "}varies depending on your budget, the type of book you’d like to print, and ultimately, your publishing goals.
                        </li>
                        <li className='font-black'>Below are the six most common areas in which you may spend money to successfully publish a book.</li>
                    </ul>
                    <div className='w-full h-full space-y-15'>
                        <Step1 />
                        <Step2 />
                        <Step3 />
                        <Step4 />
                        <Step5 />
                        <Step6 />
                    </div>
                </div>
            </div>
    )
}

export default SelfPublishingCosts