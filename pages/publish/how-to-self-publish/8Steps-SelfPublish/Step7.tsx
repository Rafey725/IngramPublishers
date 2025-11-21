import Image from "next/image";
import React from "react";

const marketingSteps = [
    {
        title: "Author Website",
        image:'/author-website.webp',
        description:
            "It’s important to have your own website when you publish a book. This lends credibility to your name as an author and is a great place for readers to go to learn more about you, your book, your events, and more. If you hope to create an engaged audience over time, a website is the first step."
    },
    {
        title: "Social Media",
        image:'/social-media.webp',
        description:
            "If you aren’t already on social media, then it’s time to look at creating some social accounts. You don’t have to be active on all social channels. Pick two or three that you enjoy—but make sure you ask yourself, where are my readers? If you wrote a young adult novel, you won’t have success promoting it on LinkedIn. Consider the demographics of each channel before devoting your time and energy to it."
    },
    {
        title: "Advanced Reader Copies (ARCs)",
        image:'/arcs.webp',
        description:
            "ARCs are copies of your book that are printed in advance to generate buzz for your book. You can send ARCs to a bookseller to inquire about stocking copies for the release date or to book reviewers to gain reviews for your book before your publication date. ARCs are also used to get endorsements, which can be added to the final cover of your book before printing."
    },
    {
        title: "Tip Sheets",
        image:'/tip-sheets.webp',
        description:
            "A tip sheet can also be referred to as a “sales sheet” or a “one sheet.” This one-page paper contains high-level, relevant information about your book—basically, your high-level metadata such as the title, subtitle, publisher, publication date, etc. You can send this to bookstores alongside an ARC, or to the press when requesting media."
    },
    {
        title: "Author Events",
        image:'/author-events.webp',
        description:
            "Whether it’s your book launch party or an author reading, events are a great way to connect with readers in your community. Bookstores and libraries are great options, but you should also think outside the box. What other venues might want to feature your book? If you wrote a cookbook, perhaps there’s a local winery or brewery where you can pair some of your tasty food with some local beverages."
    }
];

export default function Step7() {
    return (
        <div id='step-seven' className="max-w-195 md:w-[clamp(20rem,50vw,48.75rem)] py-6">

            {/* Header */}
            <h2 className="text-[clamp(24px,4vw,32px)] text-[#4e9eb8] font-bold mb-4 border-l-4 border-[#ffca38] pl-4">
                Step 7: Marketing
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
                Learning how to market a book is essential for indie authors.
            </p>

            {/* Paragraph */}
            <p className="text-gray-600 leading-relaxed mb-6">
                When you take the time to write, edit, and design a book, it’s easy to get wrapped up in tasks and push marketing aside until the last minute. But building an author platform takes time — start early.
            </p>

            {/* List */}
            <div className="space-y-6 mb-6">
                {marketingSteps.map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                        {/* Placeholder for Icon/Image */}
                        <div className="relative w-24 h-[83px] shrink-0">
                            <Image src={item.image} alt="image" fill className="object-contain"/>
                        </div>

                        {/* Text */}
                        <div>
                            <h3 className="font-semibold text-gray-800 text-lg">{item.title}</h3>
                            <p className="text-[#3c3c3c] text-sm sm:text-base leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-[#3c3c3c] text-sm sm:text-base leading-relaxed">Marketing your book can be fun when you take the time and effort to understand your audience and provide them with a valuable reason to join your tribe and ultimately, purchase your book!</p>
        </div>
    );
}
