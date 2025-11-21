"use client"

import React from 'react'
import { useState, useRef, useEffect } from 'react'

const StickyBar = ({ handleScrollToClick, activeSection }) => {

    const [isTableContentsOpen, setIsTableContentsOpen] = useState(false)

    function toggleTableContents() {
        setIsTableContentsOpen(!isTableContentsOpen)
    }

    const [isSticky, setIsSticky] = useState(false)
    const stickyBox = useRef(null)
    const originalOffset = useRef(0)
    useEffect(() => {
        if (!stickyBox.current) return
        originalOffset.current = stickyBox.current.offsetTop
        function handleScroll() {
            let scrollY = window.scrollY || window.pageYOffset
            if (scrollY >= originalOffset.current - 24) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            {/* sticky box */}
            <aside ref={stickyBox} className={` ${isSticky ? 'fixed top-6 right-[10%] xl:right-[14%]' : 'absolute top-[75%] right-[10%] xl:right-[14%]'} z-111 bg-white hidden md:block self-start border border-[#d0d5db87] p-5 max-w-[300px] rounded-[5px] shadow-[0_0px_10px_4px_rgba(0,0,0,0.05)]`}>
                <ul id='publishLinks' className="text-[#4e9eb8] text-[16px] font-medium space-y-2">
                    <h2
                        id='self-publish-introduction-link'
                        onClick={() => handleScrollToClick('self-publish-introduction')} className="text-[#3a7c92] text-[16px] font-bold underline flex h-4 pl-1 border-l-5 border-[#ffc20d] items-center gap-2 decoration-[#3a7c92] hover:decoration-white cursor-pointer mb-4">
                        <span className=''>Introduction</span>
                    </h2>
                    <li
                        id='benefits-to-publish-link'
                        onClick={() => handleScrollToClick('benefits-to-publish')}
                        className="cursor-pointer underline hover:decoration-[#ace3f5]">Benefits of Self Publishing</li>
                    <li
                        id='eight-steps-to-publish-link'
                        onClick={() => handleScrollToClick('eight-steps-to-publish')}
                        className="cursor-pointer underline hover:decoration-[#ace3f5]">8 Steps to Self-Publishing a Book
                    </li>
                    {/* sub links */}
                    <ul id='subPublishLinks' className={`${activeSection === 'eight-steps-to-publish' || activeSection.startsWith('step-') ? 'h-53.5 pointer-events-auto mt-0' : 'h-0 pointer-events-none -mt-2'} transition-all duration-300 overflow-hidden`}>
                        <li
                            id='step-one-link'
                            onClick={() => handleScrollToClick('step-one')}
                            className="pl-4 cursor-pointer underline hover:decoration-[#ace3f5]">Step1: Writing</li>
                        <li
                            id='step-two-link'
                            onClick={() => handleScrollToClick('step-two')}
                            className="pl-4 cursor-pointer underline hover:decoration-[#ace3f5]">Step2: Book Editing</li>
                        <li
                            id='step-three-link'
                            onClick={() => handleScrollToClick('step-three')}
                            className="pl-4 cursor-pointer underline hover:decoration-[#ace3f5]">Step3: Book Design</li>
                        <li
                            id='step-four-link'
                            onClick={() => handleScrollToClick('step-four')}
                            className="pl-4 cursor-pointer underline hover:decoration-[#ace3f5]">Step4: Book Metadata</li>
                        <li
                            id='step-five-link'
                            onClick={() => handleScrollToClick('step-five')}
                            className="pl-4 cursor-pointer underline hover:decoration-[#ace3f5]">Step5: Publishing</li>
                        <li
                            id='step-six-link'
                            onClick={() => handleScrollToClick('step-six')}
                            className="pl-4 cursor-pointer underline hover:decoration-[#ace3f5]">Step6: Distribution</li>
                        <li
                            id='step-seven-link'
                            onClick={() => handleScrollToClick('step-seven')}
                            className="pl-4 cursor-pointer underline hover:decoration-[#ace3f5]">Step7: Marketing</li>
                        <li
                            id='step-eight-link'
                            onClick={() => handleScrollToClick('step-eight')}
                            className="pl-4 cursor-pointer underline hover:decoration-[#ace3f5]">Step8: Join the Indie Publishing Community</li>
                    </ul>

                    <li
                        id='costs-to-publish-link'
                        onClick={() => handleScrollToClick('costs-to-publish')}
                        className="cursor-pointer underline hover:decoration-[#ace3f5]">How Much Does It Cost to Self-Publish a Book?
                    </li>
                    {/* sub links */}
                    <ul id='subCostsLinks' className={`${activeSection === 'costs-to-publish' || activeSection.startsWith('costs-step') ? 'h-35 pointer-events-auto mt-0' : 'h-0 pointer-events-none -mt-2'} transition-all duration-300 overflow-hidden`}>
                        <li
                            id='costs-step-one-link'
                            onClick={() => handleScrollToClick('costs-step-one')}
                            className="pl-4 cursor-pointer underline hover:decoration-[#ace3f5]">Step1: Book Editing</li>
                        <li
                            id='costs-step-two-link'
                            onClick={() => handleScrollToClick('costs-step-two')}
                            className="pl-4 cursor-pointer underline hover:decoration-[#ace3f5]">Step2: Interior Design</li>
                        <li
                            id='costs-step-three-link'
                            onClick={() => handleScrollToClick('costs-step-three')}
                            className="pl-4 cursor-pointer underline hover:decoration-[#ace3f5]">Step3: Book Cover Design</li>
                        <li
                            id='costs-step-four-link'
                            onClick={() => handleScrollToClick('costs-step-four')}
                            className="pl-4 cursor-pointer underline hover:decoration-[#ace3f5]">Step4: Publishing</li>
                        <li
                            id='costs-step-five-link'
                            onClick={() => handleScrollToClick('costs-step-five')}
                            className="pl-4 cursor-pointer underline hover:decoration-[#ace3f5]">Step5: Printing & Shipping</li>
                        <li
                            id='costs-step-six-link'
                            onClick={() => handleScrollToClick('costs-step-six')}
                            className="pl-4 cursor-pointer underline hover:decoration-[#ace3f5]">Step6: Book Marketing</li>
                    </ul>
                    <li
                        id='pricing-to-publish-link'
                        onClick={() => handleScrollToClick('pricing-your-book')}
                        className="cursor-pointer underline hover:decoration-[#ace3f5]">Pricing Your Book</li>
                    <li
                        id='author-salary-link'
                        onClick={() => handleScrollToClick('author-salary')}
                        className="cursor-pointer underline hover:decoration-[#ace3f5]">Author Salary</li>
                    <li
                        id='final-tips-to-publish-link'
                        onClick={() => handleScrollToClick('final-tips-to-publish')}
                        className="cursor-pointer underline hover:decoration-[#ace3f5]">Final Tips for Self-Publishing</li>
                </ul>
            </aside>


            {/* bottom bar */}
            <div
                onClick={toggleTableContents}
                className='fixed bottom-0 left-0 z-30 md:hidden w-full max-w-screen h-10 bg-[#3a7c92] text-white flex justify-center items-center gap-4'>
                {/* hamburger */}
                <button className="flex flex-col gap-1 cursor-pointer">
                    <span className="w-5 h-[3px] bg-white rounded-[1px]"></span>
                    <span className="w-5 h-[3px] bg-white rounded-[1px]"></span>
                    <span className="w-5 h-[3px] bg-white rounded-[1px]"></span>
                </button>
                <h2>Table of Contents</h2>
            </div>

            {/* full screen table box */}
            <div className={`${isTableContentsOpen ? 'visible opacity-100' : 'invisible opacity-0'} fixed top-0 left-0 z-100 w-full h-full bg-black/60 transition-all duration-300 flex items-center justify-center`}>

                <div className={`${isTableContentsOpen ? 'translate-y-0' : 'translate-y-10'} transition-all duration-300 bg-white border border-[#d0d5db87] p-5 mx-5 max-w-[500px] rounded-[5px] shadow-[0_0px_10px_4px_rgba(0,0,0,0.05)]`}>
                    <ul onClick={toggleTableContents} className="text-[#4e9eb8] text-[16px] font-medium space-y-4">
                        <div className='flex justify-between items-center h-7'>
                            <h2
                                id='self-publish-introduction-link'
                                onClick={() => handleScrollToClick('self-publish-introduction')} className="text-[#3a7c92] text-[16px] font-bold underline flex h-4 pl-1 border-l-5 border-[#ffc20d] items-center gap-2 decoration-[#3a7c92] hover:decoration-white cursor-pointer">
                                <span className=''>Introduction</span>
                            </h2>
                            <button onClick={toggleTableContents} className='relative text-[18px] text-black/70 cursor-pointer'>
                                <span className="w-3 h-0.5 bg-[#636363] rounded rotate-45 absolute top-0 right-0"></span>
                                <span className="w-3 h-0.5 bg-[#636363] rounded -rotate-45 absolute top-0 right-0"></span>
                            </button>
                        </div>
                        <li
                            id='benefits-to-publish-link'
                            onClick={() => handleScrollToClick('benefits-to-publish')}
                            className="cursor-pointer underline hover:decoration-[#ace3f5]">Benefits of Self Publishing</li>
                        <li
                            id='eight-steps-to-publish-link'
                            onClick={() => handleScrollToClick('eight-steps-to-publish')}
                            className="cursor-pointer underline hover:decoration-[#ace3f5]">8 Steps to Self-Publishing a Book</li>
                        <li
                            id='costs-to-publish-link'
                            onClick={() => handleScrollToClick('costs-to-publish')}
                            className="cursor-pointer underline hover:decoration-[#ace3f5]">How Much Does It Cost to Self-Publish a Book?</li>
                        <li
                            id='pricing-to-publish-link'
                            onClick={() => handleScrollToClick('pricing-your-book')}
                            className="cursor-pointer underline hover:decoration-[#ace3f5]">Pricing Your Book</li>
                        <li
                            id='author-salary-link'
                            onClick={() => handleScrollToClick('author-salary')}
                            className="cursor-pointer underline hover:decoration-[#ace3f5]">Author Salary</li>
                        <li
                            id='final-tips-to-publish-link'
                            onClick={() => handleScrollToClick('final-tips-to-publish')}
                            className="cursor-pointer underline hover:decoration-[#ace3f5]">Final Tips for Self-Publishing</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default StickyBar