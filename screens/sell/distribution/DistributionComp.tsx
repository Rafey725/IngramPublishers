/* eslint-disable react/no-unescaped-entities */
import PublishHeroBanner from '@/components/PublishHeroBanner'
import React from 'react'

const DistributionComp = () => {

    const retailersData = [
        'Ainco', 'Amazon', 'Apple', 'Barnes & Noble', 'BibliU', 'Bolinda', 'Bookshop', 'Chegg',
        'Cloud Library by Bibliotheca', 'De Marque dba Feedbooks', 'Ebooks.com', 'EBSCO', 'Fable',
        'Follett', 'Gardners', 'Glose', 'Hoopla', 'iGroup', 'Kobo', 'Kortex', 'Libreka', 'Libri',
        'Mackin Education', 'Odilo', 'OverDrive', 'Perlego', 'ProQuest', 'RedShelf', 'Scribd', 'Snapplify',
        'Sol', 'Speechify', 'VitalSource', 'Wheelers', 'YouScribe'
    ];

    const regionsData = [
        {
            name: "United States of America",
            description: "This is where Ingram Book Company got its start. There are three print facilities in the United States — two in Tennessee and another in Pennsylvania. The United States represents our most popular sales location in terms of retail, library, and consumer book sales.",
        },
        {
            name: "Brazil",
            description: "Brazil is the largest book market in Latin America. The Brazilian book market is worth 3.9 billion BRL (approx. $710 million USD). We sell hundreds of thousands of books into Brazil each year, with the majority of those being in English.",
        },
        {
            name: "Germany",
            description: "The German book market is worth 9.29 billion euros (approx. $11 billion USD). Categories that perform best in the German market include Adult, Juvenile, and YA Fiction, Religion, Music, Business/Economics, Biography, History, and Games/Activities.",
        },
        // Add other regions similarly...
    ];

    const storesData = [
        {
            name: "United States & Canada",
            stores: ['Amazon', 'Barnes & Noble', 'Independent bookstores', 'Walmart.com', 'Chapters / Indigo (Canada)', 'Retailers'],
        },
        {
            name: "United Kingdom & Europe",
            stores: ['Adlibris', 'Amazon.co.uk', 'Books Express', 'Foyles', 'Waterstones'],
        },
        {
            name: "Australia & New Zealand",
            stores: ['Amazon AU', 'Booktopia', 'The Nile', 'James Bennett', 'ALS'],
        },
        {
            name: "Middle East",
            stores: ['Books Kinokuniya', 'Ciel', 'Jarir Bookstore', 'Magrudy', 'Pan World'],
        },
        // Add more regions as needed
    ];

    return (
        <>
            {/* hero banner */}
            <div className="max-w-screen">
                <PublishHeroBanner
                    image="/promote-page/how-to-market-book/hero-image.webp"
                    heading='How to Market a Book'
                    description="The right marketing for self-published authors can mean the difference between a successful book publicity campaign and one that produces marginal results."
                    button={true}
                    gotoLink='/create-account'
                    bgColor='#eaf7fd'
                />
            </div>

            {/* main body */}
            <div className="bg-gray-100 py-8 px-4">
                <div className="max-w-screen-xl mx-auto">
                    {/* Section 1: Ebook Retailers List */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-semibold mb-6">Self-publishing your ebook</h2>
                        <p className="text-lg mb-4">IngramSpark gives you access to the major players in global ebook distribution across retailers, libraries, apps, subscription services, and more.</p>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-lg">
                            {retailersData.map((retailer, index) => (
                                <li key={index} className="bg-white p-4 shadow rounded-lg">{retailer}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Section 2: Account Creation */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-semibold mb-6">We've Got You Covered</h2>
                        <p className="text-lg mb-4">Complete management of global book distribution for your print books and ebooks, including fast and reliable shipping and delivery.</p>
                        <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Create an Account</button>
                    </section>

                    {/* Section 3: Where in the World are Your Books? */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-semibold mb-6">Where in the World are Your Books?</h2>
                        <p className="text-lg mb-6">IngramSpark’s book distribution network is one of the largest in the world. In addition to our print locations in the United States, United Kingdom, Australia, and Sharjah (UAE), you can also take advantage of our Global Connect Program with partners worldwide.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {regionsData.map((region, index) => (
                                <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                                    <h3 className="text-2xl font-semibold mb-4">{region.name}</h3>
                                    <p>{region.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 4: Book Distribution Markets by Region */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-semibold mb-6">Book Distribution Markets by Region</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {storesData.map((region, index) => (
                                <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                                    <h3 className="text-2xl font-semibold mb-4">{region.name}</h3>
                                    <ul className="list-disc pl-5">
                                        {region.stores.map((store, storeIndex) => (
                                            <li key={storeIndex} className="text-lg">{store}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 5: Your Book Online, In Stores, and Around the World */}
                    <section className="mb-16 text-center">
                        <h2 className="text-3xl font-semibold mb-6">Your Book Online, In Stores, and Around the World</h2>
                        <p className="text-lg mb-6">When you self-publish with IngramSpark, you are plugged into one of the publishing industry’s largest global book distribution networks, including access to over 45,000...</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-lg">Independent bookstores</div>
                            <div className="text-lg">Online stores</div>
                            <div className="text-lg">Chain stores</div>
                            <div className="text-lg">Ebook retailers</div>
                            <div className="text-lg">Libraries</div>
                            <div className="text-lg">Universities</div>
                        </div>
                    </section>

                    {/* Section 6: Global Retailers */}
                    <section>
                        <h2 className="text-3xl font-semibold mb-6">Global Retailers</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="text-lg">
                                <h3 className="font-semibold">United States & Canada</h3>
                                <ul>
                                    <li>Amazon</li>
                                    <li>Barnes & Noble</li>
                                    <li>Independent bookstores</li>
                                    <li>Walmart.com</li>
                                </ul>
                            </div>
                            <div className="text-lg">
                                <h3 className="font-semibold">United Kingdom & Europe</h3>
                                <ul>
                                    <li>Adlibris</li>
                                    <li>Amazon.co.uk</li>
                                    <li>Books Express</li>
                                    <li>Foyles</li>
                                </ul>
                            </div>
                            <div className="text-lg">
                                <h3 className="font-semibold">Australia & New Zealand</h3>
                                <ul>
                                    <li>Amazon AU</li>
                                    <li>Booktopia</li>
                                    <li>The Nile</li>
                                    <li>James Bennett</li>
                                </ul>
                            </div>
                            <div className="text-lg">
                                <h3 className="font-semibold">Middle East</h3>
                                <ul>
                                    <li>Books Kinokuniya</li>
                                    <li>Ciel</li>
                                    <li>Jarir Bookstore</li>
                                    <li>Magrudy</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default DistributionComp