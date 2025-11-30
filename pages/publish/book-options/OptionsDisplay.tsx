"use client"

import React from 'react'
import { useState, useRef } from 'react'
import Image from 'next/image'

type ContainerProps = {
    items: {
        image: string,
        scale?: string,
        mainHeading: string,
        list: {
            heading?: string,
            description: string
        }[]
    }[]
}

type BookOptionsProps = {
    display: {
        paperBackItems: ContainerProps["items"],
        hardCoverItems: ContainerProps["items"]
    }
}


const Container = (props: ContainerProps) => {
    return (
        <div className={`max-w-[800px] flex justify-between flex-col sm:flex-row px-3 md:gap-0 transition-all duration-500`}>
            {props.items.map((item, idx) => {
                return (
                    <div key={idx} className='px-1 md:px-5 flex-1 mb-10 flex flex-col items-center'>
                        {/* image */}
                        <div className={`relative max-w-50 sm:max-w-full w-full h-35 sm:h-65`}>
                            <Image src={item.image} alt='image' fill
                                style={{ transform: `scale(${item.scale}%)` }}
                                className='object-contain' />
                        </div>
                        {/* description */}
                        <div>
                            <h1 className='text-[20px] text-[#4e9eb8] font-bold text-center mt-10 mb-3 sm:mb-10'>{item.mainHeading}</h1>
                            <ul className='w-full space-y-3'>
                                {item.list.map((listItem, idx) => {
                                    return (
                                        <li key={idx} className=''>
                                            {listItem.heading && <span className='font-bold'>{listItem.heading} </span>}
                                            {listItem.description}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const OptionsDisplay = (props: BookOptionsProps) => {

    const [priceContainer, setPriceContainer] = useState('paperback')
    const priceContRef = useRef<HTMLDivElement>(null)

    function switchContainer(cont: string) {
        if (!priceContRef.current) return
        priceContRef.current.style.transition = `none`
        priceContRef.current.style.transform = `translateX(100%)`
        setTimeout(() => {
            if (!priceContRef.current) return
            priceContRef.current.style.transition = `transform 0.3s`
            priceContRef.current.style.transform = `translateX(0%)`
            setPriceContainer(cont)
        }, 20)
    }
    return (
        <div className='w-full'>
            <ul className='w-full grid md:grid-cols-2 gap-2.5 text-nowrap border-b-2 px-2 border-[#3a7c92]'>
                <li
                    onClick={() => switchContainer("paperback")}
                    className={`text-center py-1 text-[18px] border  transition-all duration-100 cursor-pointer lg:border-b-transparent rounded-tr-[5px] rounded-tl-[5px] ${priceContainer === "paperback" ? 'bg-[#3a7c92] text-white border-[#00445b]' : 'bg-[#f8f9fa] border-gray-300 text-[#3a7c92]'} hover:bg-[#4e9eb8] hover:border-[#00445b] hover:text-white`}>Paperback</li>

                <li
                    onClick={() => switchContainer("hardcover")}
                    className={`text-center py-1 text-[18px] border transition-all duration-100 cursor-pointer lg:border-b-transparent rounded-tr-[5px] rounded-tl-[5px] ${priceContainer === "hardcover" ? 'bg-[#3a7c92] border-[#00445b] text-white' : 'bg-[#f8f9fa] border-gray-300 text-[#3a7c92]'} hover:bg-[#4e9eb8] hover:border-[#00445b] hover:text-white`}>Hardcover</li>
            </ul>
            {/* wrapper */}
            <div className='my-10 max-w-[800px] overflow-x-hidden'>
                <div ref={priceContRef} style={{ transform: "translateX(0%)", transition: "transform 0.3s" }}>

                    {priceContainer === "paperback" ?
                        // Novel Books
                        <Container items={props.display.paperBackItems} /> :
                        priceContainer === "hardcover" ?
                            // Children Books
                            <Container items={props.display.hardCoverItems} /> : ""}
                </div>
            </div>
        </div>
    )
}

export default OptionsDisplay