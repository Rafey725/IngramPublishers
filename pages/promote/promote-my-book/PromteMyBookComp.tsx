import React from 'react'
import Image from 'next/image'
import PublishHeroBanner from '@/components/PublishHeroBanner'
import Link from 'next/link';

const PromteMyBookComp = () => {
    const features = [
        {
            title: 'Title Discovery',
            icon: "/promote-page/image2.webp",
            description: 'Promote your book to readers via curated lists, targeted marketing communications, metadata enhancements and more.',
            btnTitle: "Learn More"
        },
        {
            title: 'Curated Lists',
            icon: "/promote-page/image3.webp",
            description: 'Promote your book as part of curated lists sent to retailers, librarians, wholesalers, and other booksellers.',
            btnTitle: "Learn More"
        },
        {
            title: 'Share & Sell',
            icon: "/promote-page/image4.webp",
            description: 'Create shareable purchase links to sell your book on your social media accounts, website, and more.',
            btnTitle: "Learn More"
        },
        {
            title: 'Author Website Builder',
            icon: "/promote-page/image5.webp",
            description: 'Create a professional website in minutes with Tertulia for Authors—no tech skills needed.',
            btnTitle: "Learn More"
        },
        {
            title: 'Book Marketing Guide',
            icon: "/promote-page/image6.webp",
            description: 'Learn about what you need to create a marketing plan and connect with readers.',
            btnTitle: "Download Now"
        },
        {
            title: 'Find an Expert',
            icon: "/promote-page/image7.webp",
            description: 'Connect with a trusted expert who can help take your book to the next level.',
            btnTitle: "Learn More"
        },
    ];

    return (
        <>
            {/* hero banner */}
            <PublishHeroBanner
                image="/promote-page/image1-hero.webp"
                heading="Promote Your Book"
                description="Take advantage of book marketing services and advertise your book"
                button={true}
                gotoLink='/create-account'
                bgColor='#eaf7fd'
            />
            {/* Main body */}
            <div className="max-w-[900px] w-full mx-auto px-4 sm:px-10 py-12 flex flex-col items-center">

                <p className='text-[clamp(18px,2.5vw,22px)] text-center leading-[clamp(22px,2.5vw,28px)]'>Reach new readers with book promotion services that will help get your book discovered by booksellers, librarians, and readers around the world</p>
                {/* features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 text-center my-10">
                    {features.map((feature, index) => (
                        <div key={index} className='min-h-72 flex flex-col items-center justify-between'>
                            <div>
                                <Image src={feature.icon} alt={feature.title} width={80} height={80} className="mx-auto mb-4" />
                                <h2 className="text-[clamp(19px,2.5vw,22px)] font-bold mb-2">{feature.title}</h2>
                                <p className='max-w-100'>{feature.description}</p>
                            </div>
                            <button className="px-7 py-1.5 mt-3 bg-[#4e9eb8] hover:bg-[#71bcd5] transition-all duration-300 cursor-pointer text-white rounded-lg font-medium">{feature.btnTitle}</button>
                        </div>
                    ))}
                </div>
                {/* visit more */}
                <div className='flex flex-col items-center justify-center gap-5 max-w-185'>
                    <p className='text-[clamp(20px,2.5vw,24px)] text-center leading-[clamp(22px,2.5vw,28px)] font-bold text-[#4e9eb8]'>Visit the Promote My Book page in your account to see additional offerings</p>
                    <Link href="/create-account">
                        <button className="px-7 py-1.5 mt-3 bg-[#4e9eb8] hover:bg-[#71bcd5] transition-all duration-300 cursor-pointer text-white rounded-lg font-medium">Create Account</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default PromteMyBookComp