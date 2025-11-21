import React from 'react'
import Image from 'next/image';

const Step5 = () => {
    // IngramSpark benefits array
    const ingramSparkBenefits = [
        "24/7 customer support",
        "Online sales reporting",
        "Free publishing tools and resources",
        "Affordable advertising opportunities",
        "Discounts with outside experts on publisher services"
    ];

    let introuductionParas: string[] = [
        'There are various self-publishing companies to choose from—but IngramSpark provides many features that you won&apos;t find anywhere else.',
        ' IngramSpark offers indie authors and publishers the ability to create professional print books (paperback and hardcover) and ebooks. With IngramSpark, you can self-publish a book and make it available to 45,000+ retailers and libraries—in stores and online—through our global distribution network.',
        'In addition, IngramSpark authors receive:'
    ]

    return (
        <div id='step-five' className="max-w-195 md:w-[clamp(20rem,50vw,48.75rem)] py-6">

            {/* Step 5 Header */}
            <div className="mb-7">
                <h2 className="text-[clamp(24px,4vw,32px)] text-[#4e9eb8] font-bold mb-4 border-l-4 border-[#ffca38] pl-4">
                    Step 5: Publishing
                </h2>
                <p className="text-[clamp(1rem,2.5vw,1.5rem)] font-light text-[#3c3c3c] mb-0.25rem">
                    If you haven&apos;t yet, now is the time to choose how you&apos;re going to share your story with the world.
                </p>
            </div>

            {/* Introduction Paragraphs */}
            <ul className="space-y-4 mb-4">
                {introuductionParas.map((item, idx) => {
                    return (
                        <li key={idx} className="text-[clamp(0.875rem,2vw,1rem)] text-gray-700 leading-relaxed">
                            {item}
                        </li>
                    )
                })
                }
            </ul>

            {/* Benefits List */}
            <ul className="space-y-0 mb-4 text-[clamp(0.875rem,2vw,1rem)] text-gray-700">
                {ingramSparkBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                        <span className="text-[#4e9eb8] font-bold text-lg mt-0.5">✓</span>
                        <span>{benefit}</span>
                    </li>
                ))}
            </ul>

            {/* Closing Paragraph */}
            <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-700 leading-relaxed mb-8">
                Some self-publishers simply wish to print a select number of copies, and not enable their title for distribution—and you can do that! However, if you&apos;re looking to reach the masses, IngramSpark&apos;s distribution network has you covered.
            </p>

            {/* Responsive Image Section */}
            <div className="relative w-full h-[15.625rem] sm:h-[18.75rem] md:h-[21.875rem] lg:h-[25rem] mb-5 rounded-lg flex items-center justify-center overflow-hidden">
                <Image src='/8StepsImages/image5.png' alt='image' fill />
            </div>

            {/* Video */}
            <div className="relative w-full h-[330px] md:h-[390px] mb-6 overflow-hidden lg:px-10">
                <iframe
                    src="https://www.youtube.com/embed/0hsJvrdcUA4"
                    title="Ask Bradley! Free ISBNs and FAQs"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </div>
        </div>
    )
}

export default Step5