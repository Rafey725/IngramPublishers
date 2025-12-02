import Image from 'next/image'
import React from 'react'

const ImagesBanner = () => {
    return (
        <div className='max-w-screen w-full h-full grid md:grid-cols-[repeat(3,1fr)]'>
            <div className='relative w-full h-90 col-span-1'>
                <Image src="/blog.webp" alt="image" fill className='hover:scale-105 transition duration-100 cursor-pointer object-cover' />
            </div>
            <div className='relative w-full h-90'>
                <Image src="/academy.jpg" alt="image" fill className='hover:scale-105 transition duration-100 cursor-pointer object-cover' />
            </div>
            <div className='relative w-full h-90'>
                <Image src="/sell-my-book.png" alt="image" fill className='hover:scale-105 transition duration-100 cursor-pointer object-cover' />
            </div>
        </div>
    )
}

export default ImagesBanner