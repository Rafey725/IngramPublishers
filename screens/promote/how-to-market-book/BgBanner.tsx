import Image from 'next/image';
import React from 'react'

type BgBannerProps = {
    title: string | React.ReactNode;
    subtitle?: React.ReactNode;
    image: string;
    imageIndex?: number;
    id?: string;
    reverse?: boolean;
}

const BgBanner = (props: BgBannerProps) => {
    return (
        <div
            id={props.id}
            className={`w-full bg-[#f6f8fa] max-h-screen min-h-[40vh] h-full lg:h-[50vh] flex mb-5`}>
            <div className="content max-w-[1150px] mx-auto w-full h-full flex flex-col-reverse justify-center md:flex-row lg:justify-between items-center px-5 py-10">
                <div className={`max-w-[585px] lg:mx-10`}>
                    <h1 className='text-[clamp(25px,5vw,32px)] leading-[clamp(25px,5vw,40px)] font-bold text-[#4e9eb8]'>{props.title}</h1>
                    {/* seperator */}
                    <div className='w-[100px] h-1 mt-5 bg-[#ffc20d]'></div>
                    <p className='text-[clamp(20px,5vw,24px)] leading-[clamp(25px,5vw,30px)] font-light mt-6 text-[#505050]'>{props.subtitle}</p>
                </div>
                <div className='shrink-0 relative max-w-100 w-full h-70 mb-4 md:mb-0 lg:h-100'>
                    <Image src={props.image} alt='image' fill className='object-contain' />
                </div>
            </div>
        </div>
    )
}

export default BgBanner