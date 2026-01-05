import Image from "next/image";

export default function Step6() {

    return (
        <div id='step-six' className="max-w-195 md:w-[clamp(20rem,50vw,48.75rem)] py-6">
            {/* Heading */}
            <h2 className="text-[clamp(24px,4vw,32px)] text-[#4e9eb8] font-bold mb-4 border-l-4 border-[#ffca38] pl-4">
                Step 6 : Distribution
            </h2>

            {/* Subtitle */}
            <p className="text-gray-700 text-lg mb-8">
                If you haven’t yet, now is the time to choose how you’re going to share your story with the world.
            </p>

            {/* Content Block */}
            <div>
                <div>
                    <div className="flex flex-col-reverse lg:flex-row justify-between items-start">
                        {/* Left Text */}
                        <p className="text-gray-600 text-[16px] leading-7 mb-2.5 lg:mb-0 lg:max-w-84">Book distribution used to be a major stumbling block for self-published authors. They would spend weeks, months, even years writing their book.They would go through the editing, design, and printing process—and then would have no way to get it into bookstores and libraries.</p>
                        {/* image */}
                        <div className="w-full flex justify-center h-fit md:px-2.5 ">
                            <div className="w-[250px] md:w-70 h-50 relative">
                                <Image
                                    src="/8StepsImages/image6.png"
                                    alt="Distribution Illustration"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    <p className="text-gray-600 text-[16px] leading-7">Now, indie publishers can receive the same book distribution channels available to major traditional publishers.IngramPublishers makes titles available to 45,000 + retailers, libraries, schools, and e - commerce companies including Amazon, Barnes & Noble, Indigo, Foyles, Waterstones, and more across the globe.</p>
                    <p className="text-gray-600 text-[16px] leading-7 mt-3">For more than 50 years, Ingram has developed relationships and connections within the book industry to allow your book to be available to the masses.We have print facilities in the United States, United Kingdom, and Australia, and we have print channels in China, Germany, India, Italy, Poland, Russia, South Korea, Spain, and Brazil. By self - publishing with IngramPublishers, you’re giving your book the best chance of reaching a global audience.</p>
                </div>
            </div >
        </div>
    );
}
