import Image from "next/image";
import Link from "next/link";
import React from "react";


const data = [
  { title: "Quality of Manuscript", description: 'some manuscripts require more work than others to produce a professional, ready-to-publish piece.' },
  { title: "Genre", description: 'cost varies by genre. Historical fiction and nonfiction, for example, require more time dedicated to fact-checking.' },
  { title: "Experience", description: 'the cost to hire an editor with more experience will be higher than a newer, less-experienced editor.' }
];

let commonRates = [
  { title: 'Developmental Editing (estimated pace 1-5 ms pgs/hr): ', rate: '$45-55/hr' },
  { title: 'Substantive or Line Edit (estimated pace 1-6 ms pgs/hr): ', rate: '$40-60/hr' },
  { title: 'Basic Copyediting (estimated pace 5-10 ms pgs/hr): ', rate: '$30-40//hr' },
  { title: 'Proofreading (estimated pace 5-10 ms pgs/hr): ', rate: '$30-40//hr' },
]


const Step1 = () => {
  return (
    <div id={'costs-step-one'}>
      {/* heading */}
      <h2 className="text-[clamp(24px,4vw,32px)] text-[#4e9eb8] font-bold mb-4 border-l-4 border-[#ffca38] pl-4">
        1: Book Editing
      </h2>
      {/* sub title */}
      <p className="text-[clamp(1rem,2.5vw,1.5rem)] text-[#3c3c3c] font-light mb-2.5">
        The cost to edit a book varies widely based on a few factors.
      </p>
      {/* image and description */}
      <div className="h-full w-full flex flex-col xl:flex-row justify-evenly items-start py-4 mb-2.5">
        <div className="shrink-0 relative w-75 h-47 -mt-6 mb-4 xl:mt-0 xl:mb-0">
          <Image src={'/6StepsCostsImages/image1.webp'} alt="image" fill className="object-contain" />
        </div>

        <ul className="blueBullets list-disc list-inside space-y-1 xl:max-w-100">
          {data.map((item, index) => (
            <li key={index}
              style={{ '--bullet-color': '#4e9eb8' } as React.CSSProperties}
              className="text-[clamp(0.875rem,2.5vw,1rem)] text-[#3c3c3c]">
              <h2 className="inline-block font-bold">{item.title}:</h2>
              <p className="inline">{" "}{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* common editing rates */}
      <div className="space-y-3">
        <p className="text-[clamp(0.875rem,2.5vw,1.1rem)] text-[#3c3c3c]">
          <span className=" font-bold">Some editors charge per word, some charge per page, and some charge per hour.</span>{" "}
          The <Link href={'#'} className="text-[#4e9eb8] underline hover:text-[#4e9eb8]/70 font-bold">Editorial Freelancer Association</Link>{" "}
          provides rough guidelines to give you an idea of common editorial rates.
        </p>
        <ul className="blueBullets list-disc list-inside space-y-1">
          {commonRates.map((item, index) => (
            <li key={index}
              style={{ '--bullet-color': '#4e9eb8' } as React.CSSProperties}
              className="text-[clamp(0.875rem,2.5vw,1rem)] text-[#3c3c3c]">
              <h2 className="inline-block font-bold">{item.title}</h2>
              <p className="inline">{" "}{item.rate}</p>
            </li>
          ))}
        </ul>
        <p className="text-[clamp(0.875rem,2.5vw,1.2rem)] text-[#3c3c3c]">When you’re ready to hire an editor, do some research and request a few different quotes. Meet with them, if possible, or have a conversation to get to know whether or not they’ll be the best editor for your book’s content. Have they edited in that genre before? Do you feel like they understand your writing style? Ask them for references or examples of their work to make the most informed decision.</p>
      </div>
    </div>
  );
};


export default Step1;