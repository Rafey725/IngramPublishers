'use client';
// app/(marketing)/how-to-market-book/page.tsx

import React from 'react'
import PublishHeroBanner from '@/components/PublishHeroBanner'
import Image from 'next/image';
import { ReactNode } from 'react';
import BgBanner from './BgBanner';
import Link from 'next/link';
import { store } from '@/app/store';

type BannerProps = {
  id?: string;
  title: string;
  subtitle?: string;
  imageIndex: number;
  reverse?: boolean;
  children?: ReactNode;
};
const HowToMarketBook = () => {

  const tocItems = [
    {
      label: 'Increase Visibility of Your Book',
      href: '#increase-visibility',
      children: [
        { label: 'Metadata', href: '#metadata' },
        { label: 'Book Description', href: '#book-description' },
      ],
    },
    {
      label: 'Lay the Groundwork for Your Marketing Plan',
      href: '#marketing-plan',
      children: [
        { label: 'Foreword', href: '#foreword' },
        { label: 'Press Release', href: '#press-release' },
      ],
    },
    { label: 'Promote Your Book', href: '#promote-book' },
    { label: 'Create an Author Website', href: '#author-website' },
    { label: 'Get Your Book in Stores', href: '#book-in-stores' },
  ];

  const descriptionTips = [
    <><span className='font-bold'>Long description:</span> Show the reader just enough to get them interested in what happens next. Think like a buyer, and not like the author.</>,
    <><span className='font-bold'>Short description:</span> Informative, engaging, and thought-provoking, this serves as a blurb or hook and appears in catalogs and marketing materials.</>
  ];

  const excerptTips = [
    'Longer excerpts, consisting of 200+ words, should have the potential to spark a debate, inspire a meaningful discussion, or reveal something about the book that sets it apart from others. Shorter excerpts, made up of a few sentences, should provide a takeaway for the reader.',
    <>Your excerpt can, and should, be used as a marketing tool in your author blog posts, newsletters, social media posts, press kits, < Link href="/" className='text-[#3a7c92] underline hover:text-4e9eb8]' >at speaking engagements</Link >, and on your author website. </>,
  ];

  const BISACcodes = [
    "One is required, but three is best practice.",
    "Choose codes that accurately describe your book content as a whole.",
    "The first subject code should be the best, most accurate, and most specific code possible."
  ]

  const TipsForGoodDesc = [
    "Provide a 150-200 word, simple synopsis of the book, written in consumer-friendly terms.",
    "Avoid time - sensitive language such as “the latest,” “soon,” “forthcoming,” or “most recent.”",
    "Do not include active hyperlinks or invalid code."
  ]

  const publicityTips = [
    "Know your audience—no book is right for everyone.",
    "Offer giveaways—generates interest in your book and develops word - of - mouth promotion.",
    "Be patient and persistent—getting publicity for your book is more of a marathon than a sprint.",
    "Be creative in your media outreach—make your book stand out by calling attention to what makes it newsworthy and unique."
  ];

  const socialMediaPoints = [
    <>Promoting your book with social media is an incredible way to connect with readers and promote your book to larger audiences, at a low cost or for free. The more people talking about your books, the more noise they make, and the more other readers will take notice.
    </>,
    <>While you might be overwhelmed by the various<Link href="/" className='text-[#3a7c92] underline hover:text-[#4e9eb8]'> social media platforms</Link>, we recommend registering for all of them, if only to create bios that point to your author website. There has been a renewed focus on connecting directly with readers via influencer marketing, resulting in a huge impact on book sales. In addition to Facebook, Instagram, and Pinterest, some of the most popular and effective platforms you can use to market your book on social media are:
    </>,
    <><span className='font-bold'>Amazon Author Central</span>—Not only should your book be available for sale on Amazon, but you should also be<Link href="/" className='text-[#3a7c92] underline hover:text-[#4e9eb8]'> taking advantage of Amazon Author Central</Link>.
    </>,
    <><span className='font-bold'>TikTok</span>— Don’t underestimate the power of TikTok to market your book. It’s now the third largest of the Big Five worldwide social networks, and BookTok, the TikTok subcommunity, is an incredible way to connect with a diverse audience.
    </>
  ];

  const fewThingsToKeepIn = [
    "Make sure you really know how to find your target audience. Your social media presence will start to grow organically when you understand who you’re writing for.",
    "Find a consistent voice.Always be yourself, but in a way your readers can connect to. ",
    "Create unique, shareable content and post something at least once a week.",
    <><Link href="/" className='text-[#3a7c92] underline hover:text-[#4e9eb8]'>Making videos on social media</Link> is a great way to get personal with your followers.</>
  ]

  const domainTips = [
    "When you contacted potential developers, were they responsive?",
    "What are the per - hour charges for changes and updates ?",
    "What is the cost for additional pages ?",
    "What is the turnaround time for incorporating updates, and how much does that cost ? "
  ]

  const websiteTrafficMetrics = [
    "Number of page views ",
    "Bounce rate(the number of people who view one page and then leave your site)",
    "Average time spent on your site",
    "The keywords people are using via search engines to get to your site."
  ];

  const marketingOnWebsite = [
    "Your author brand",
    "Mailing lists and newsletters",
    "Social media links",
    "Press/media page",
    "Book giveaways",
  ];

  const marketingContentStrategy = [
    <><span className="font-bold">Goal:</span> the more specific the better.</>,
    <><span className="font-bold">Persona(s):</span> know your audience and identify the ideal people for your website.</>,
    <><span className="font-bold">Content plan:</span> offer unique and engaging content to lead users to your book.</>
  ];

  const formFields = [
    { name: 'firstName', label: 'First Name*' },
    { name: 'lastName', label: 'Last Name*' },
    { name: 'email', label: 'Email Address*' },
  ];

  const bloggingTips = [
    'Find the best topic.',
    'Offer specific takeaways.',
    'Don’t be too promotional.',
    'Do your homework.',
  ];

  const storeSellingPoints = [
    <><span className="font-bold">Know your audience:</span> not every store fits every book.</>,
    <><span className="font-bold">Craft your pitch:</span> short, clear, and respectful of their time.</>,
    <><span className="font-bold">Have a one-sheet:</span> a simple summary of your book and credentials.</>,
    <><span className="font-bold">Be available:</span> let stores know when and where your book is in stock.</>,
  ];

  const finalFormFields = ['First Name*', 'Last Name*', 'Email Address*'];


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

      {/* Main body */}
      <main className="max-w-screen overflow-hidden bg-white text-slate-800 ">
        {/* Hero + Form */}
        <section className="mx-auto flex flex-col max-w-[800px] w-full gap-10 px-4 pb-12 pt-10 md:items-start">
          <div>
            <h1 className="text-[clamp(28px,2.5vw,32px)] leading-[clamp(33px,2.5vw,38px)] font-bold mb-4">
              Here, we’ll address the specifics for how to launch your book.
            </h1>

            <div className="h-1 w-30 bg-[#4e9eb8] mb-6" />

            <div className="rounded-lg bg-[#f4f5f6] p-6">
              <ol className="list-decimal space-y-2 pl-5 text-[#4e9eb8] marker:text-black">
                {tocItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className='text-[#3a7c92] underline hover:text-[#4e9eb8]'>
                      {item.label}
                    </Link>

                    {item.children && (
                      <ol className="mt-1 list-[lower-alpha] space-y-1 pl-5 text-[#4e9eb8]">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} className='text-[#3a7c92] underline hover:text-[#4e9eb8]'>
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ol>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Lead Form */}
          <div className="max-w-[800px] w-full">
            <div className="w-full">
              <h2 className="text-[22px] font-semibold text-center text-[#4e9eb8] mb-4">
                Fill out the form to get the guide!
              </h2>
              <div className='flex justify-between items-center w-full gap-x-20 flex-col md:flex-row'>
                <div className="shrink-0 relative mb-4 h-55 w-38">
                  <Image
                    src="/promote-page/how-to-market-book/image1.webp"
                    alt="Book marketing guide"
                    fill
                    className="object-contain"
                  />
                </div>

                <form className="space-y-3 w-full flex md:inline-block flex-col items-center">
                  {formFields.map((field) => (
                    <div key={field.name} className="w-full md:max-w-[360px] mb-5">
                      <input
                        id={field.name}
                        name={field.name}
                        placeholder={field.label}
                        className="w-full rounded-sm border border-gray-300 px-3 py-2 text-base text-[#555] focus:border-[1.5px] focus:shadow-[0_0_10px_0.5px_#4e9eb8]/40 focus:outline-none focus:border-sky-500"
                      />
                    </div>
                  ))}

                  <label className="flex items-start gap-2 text-[13px] text-[#666]">
                    <input type="checkbox" className="mt-1" />
                    <span>
                      I agree to receive marketing messages and consent to the
                      privacy policy and terms of use.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full md:w-fit rounded-md btnYellow px-4 py-2 text-xl text-slate-900 "
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Banner: Increase Visibility */}
        <BgBanner
          id="increase-visibility"
          title="Increase Visibility of Your Book Online"
          image="/promote-page/how-to-market-book/image2.webp"
        />

        {/* Metadata section */}
        <section
          id="metadata"
          className="mx-auto max-w-[800px] px-4 py-12 space-y-12">
          <header>
            <h2 className="text-[clamp(28px,2.5vw,32px)] leading-[clamp(33px,2.5vw,38px)] font-bold mb-2">
              Book Metadata: Help Readers Find Your Book
            </h2>
            <div className="h-1 w-30 bg-[#4e9eb8] my-6" />
            <div className='flex gap-4 flex-col md:flex-row mb-12 md:mb-3 items-center'>
              <div className='space-y-3'>
                <p>
                  Metadata is everywhere, and it’s a crucial component in marketing your book. Your book’s most vital metadata includes such basic information as your book title, author name, author bio, book description, publication date, etc.
                </p>
                <p>
                  Not only does metadata connect readers with your book, but it can also increase your sales potential. Ultimately, it’s what connects your content to your prospective readers, and discoverability is your biggest asset. It ensures your readers can find you simply by entering words that describe your book into a search engine.
                </p>
              </div>
              <div className="shrink-0 relative w-65 h-40">
                <Image src="/promote-page/how-to-market-book/image3.webp" alt='image' fill className="object-contain scale-140" />
              </div>
            </div>
            <p>
              <Link href={"/"} className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>Creating good book metadata</Link>
              takes an initial time investment but once it’s done, you’ll have a great marketing tool to help sell your book. </p>
          </header>

          {/* keywords */}
          <section>
            <h2 className="text-[clamp(28px,2.5vw,32px)] leading-[clamp(33px,2.5vw,38px)] font-bold mb-2">Pick the Right Keywords for Your Book</h2>
            <div className="h-1 w-30 bg-[#4e9eb8] my-6" />
            <p className='mb-3'>
              <Link href={"/"} className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>Keywords</Link> are one of the most critical parts of your metadata. The more specific the keywords, the more likely the person searching for those specific words will find your book among the search results.
            </p>
            <p>
              Make your book more discoverable with keywords that are relevant, and phrases related to your book. Then, you can write a more keyword-rich book description that will give the search engines reason to bring attention to your book when users search for those particular words and phrases.
            </p>
          </section>

          {/* BISAC codes */}
          <section>
            <div className='flex gap-4 flex-col md:flex-row mb-12 md:mb-3 items-center'>
              <div>
                <h1 className="text-[clamp(28px,2.5vw,32px)] leading-[clamp(33px,2.5vw,38px)] font-bold mb-2">Include BISAC Codes</h1>
                <div className="h-1 w-30 bg-[#4e9eb8] my-6" />
                <p>
                  <Link href={"/"} className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>BISAC codes</Link> describe and categorize your book with standard codes accepted by the book industry. They are essential for librarians, booksellers, and other publishing professionals to place your book in the correct BISAC categories. Be sure to cover all your bases in choosing your codes, but don’t be misleading.</p>
                <h2 className='text-[#4e9eb8] font-bold my-3'>A few tips for selecting your BISAC code:</h2>
              </div>
              <div className="shrink-0 relative w-65 h-35 md:mt-15">
                <Image src="/promote-page/how-to-market-book/image4.webp" alt='image' fill className="object-contain scale-140" />
              </div>
            </div>
            <ul className='list-disc space-y-2 pl-5 text-[#666]'>
              {BISACcodes.map((code, idx) => {
                return (
                  <li key={idx}>{code}</li>
                )
              })}
            </ul>
          </section>

          {/* online presence */}
          <section>
            <h1 className="text-[clamp(28px,2.5vw,32px)] leading-[clamp(33px,2.5vw,38px)] font-bold mb-2">
              Reinforce Metadata with Your Online Presence
            </h1>
            <div className="h-1 w-30 bg-[#4e9eb8] my-6" />
            <div className='flex gap-4 flex-col md:flex-row mb-12 md:mb-3 items-center'>
              <div className="shrink-0 relative w-45 h-30">
                <Image src="/promote-page/how-to-market-book/image5.webp" alt='image' fill className="object-contain" />
              </div>
              <div className='space-y-3'>
                <p>Maintaining consistent descriptions and author information on your website and social media accounts is important.</p>
                <p>After making sure your book metadata is consistent and effective, you need to continue to lay the groundwork for more conventional marketing methods.</p>
              </div>
            </div>
          </section>

          {/* Grab reader's attention */}
          <section id="book-description">
            <h1 className="text-[clamp(28px,2.5vw,32px)] leading-[clamp(33px,2.5vw,38px)] font-bold mb-2">Grab Readers’ Attention with Your Book Description</h1>
            <div className="h-1 w-30 bg-[#4e9eb8] my-6" />
            <p className="text-slate-700 mb-3">One of the most important aspects of marketing your book is
              <Link href={"/"} className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'> writing a good book description</Link>. Your chances of gaining visibility and remaining visible are better when your book description is focused, impactful, and accurate.
            </p>
            <p>There are two types of book descriptions: </p>
            <div className='flex gap-10 flex-col md:flex-row mb-12 md:mb-5 items-center'>
              <ul className="list-disc space-y-2 pl-5 text-[#666] mt-2">
                {descriptionTips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
              <div className="shrink-0 relative w-40 md:w-65 h-30">
                <Image src="/promote-page/how-to-market-book/image6.webp" alt='image' fill className="object-contain scale-160" />
              </div>
            </div>
            <p>An effective book description should start with a clear and compelling headline, followed by a detailed explanation that lets the reader know what to expect from your book. Finally, it should end with a strong closing, identifying why readers should be interested in your book.</p>

            <h2 className='text-[#4e9eb8] font-bold my-3'>Here are a few other tips for writing a good description:</h2>
            <ul className='list-disc space-y-2 pl-5 text-[#666]'>
              {TipsForGoodDesc.map((tip, idx) => {
                return (
                  <li key={idx}>{tip}</li>
                )
              })}
            </ul>
          </section>
        </section>

        {/* Banner: Marketing Plan */}
        <BgBanner
          id="marketing-plan"
          title="Lay the Groundwork for Your Marketing Plan"
          image="/promote-page/how-to-market-book/image7.webp"
        />

        {/* Excerpt + Foreword + Press Release */}
        <section className="mx-auto max-w-[800px] px-4 py-12 space-y-12">
          {/* excerpt */}
          <section>
            <h1 className="text-[clamp(28px,2.5vw,32px)] leading-[clamp(33px,2.5vw,38px)] font-bold mb-2">Keep Your Book on Readers’ Radars with an Excerpt</h1>
            <div className="h-1 w-30 bg-[#4e9eb8] my-6" />
            <p className='text-[#666]'>
              Consider <Link href="/" className='text-[#3a7c92] underline hover:text-[#4e9eb8]'>sharing an excerpt from your book </Link> as a way to get readers interested. Choose a section that’s able to stand on its own and that makes sense to a great degree without relying on context from the rest of the book. Imagine what you would want to read as a consumer.
            </p>
            <div className='flex gap-10 flex-col md:flex-row mb-12 md:mb-4 items-center mt-2'>
              <div className="shrink-0 relative w-40 md:w-65 mt-2 h-30">
                <Image src="/promote-page/how-to-market-book/image8.webp" alt='image' fill className="object-contain scale-140 md:scale-170" />
              </div>
              <ul className="space-y-2 text-[#666]">
                {excerptTips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* foreword */}
          <section>
            <h1 className="text-[clamp(28px,2.5vw,32px)] leading-[clamp(33px,2.5vw,38px)] font-bold mb-2">Help Your Book Gain Credibility with a Foreword</h1>
            <div className="h-1 w-30 bg-[#4e9eb8] my-6" />
            <div className='flex gap-10 flex-col md:flex-row mb-12 md:mb-4 items-center mt-2'>
              <p className="text-slate-700">A book foreword isn’t necessary, but it is an important part of your introductory material. Written by someone other than the book’s author, the foreword provides a third-party endorsement supporting the book and the importance of its material. </p>
              <div className="shrink-0 relative w-65 h-30">
                <Image src="/promote-page/how-to-market-book/image9.webp" alt='image' fill className="object-contain scale-120 md:scale-150" />
              </div>
            </div>
            <p>The more relatable and better-known the foreword author is, the more comfortable your reader will be with your book. In approaching someone to write your foreword, let them know why you think they are the right person for the job, and give them options for providing you with a foreword, given any time constraints or other limitations they may have.</p>
          </section>

          {/* grab buyer's attention */}
          <section>
            <h1 className="text-[clamp(28px,2.5vw,32px)] leading-[clamp(33px,2.5vw,38px)] font-bold mb-2">Get Book Buyers’ Attention with a Press Release</h1>
            <div className="h-1 w-30 bg-[#4e9eb8] my-6" />
            <div className='flex gap-10 flex-col md:flex-row mb-12 md:mb-4 items-center mt-2'>
              <div className="shrink-0 relative w-30 h-70">
                <Image src="/promote-page/how-to-market-book/image10.png" alt='image' fill className="object-contain scale-120" />
              </div>
              <ul className="space-y-2">
                {publicityTips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          </section>
        </section>

        {/* Banner: Promote Your Book */}
        <BgBanner
          id="promote-book"
          title="Promote Your Book"
          subtitle="Book publicity makes a big difference for indie authors. Technology now gives independently published books quality to equal that of major publishing houses, and there’s no reason your book publicity can’t be equal, too."
          image="/promote-page/how-to-market-book/image11.webp"
        />

        {/* Publicity vs Digital + Social Media */}
        <section className="mx-auto max-w-[800px] px-4 py-12 space-y-8">
          {/* Tips for successful campaign */}
          <section>
            <h1 className="text-[clamp(28px,2.5vw,32px)] leading-[clamp(33px,2.5vw,38px)] font-bold mb-2">Tips for a Successful Publicity Campaign</h1>
            <div className="h-1 w-30 bg-[#4e9eb8] my-6" />
            <p className="text-slate-700 mb-3">There is no one, proven approach to getting publicity for your book. We suggest <Link href="/" className='text-[#3a7c92] underline hover:text-[#4e9eb8]'>15 important publicity tips</Link> to consider when you’re trying to get media coverage for your book. These tips include:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-[#666]">
              {publicityTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </section>

          {/* Book Publicity vs. Digital Marketing */}
          <section>
            <h1 className="text-[clamp(28px,2.5vw,32px)] leading-[clamp(33px,2.5vw,38px)] font-bold mb-2">Book Publicity vs. Digital Marketing</h1>
            <div className="h-1 w-30 bg-[#4e9eb8] my-6" />
            <div className='flex gap-10 flex-col md:flex-row mb-12 md:mb-3 items-center mt-2'>
              <p className="sm:mb-3">More than just getting shelf space, today’s book marketing is about appealing to a variety of readers and employing various means of creating impressions for your book. You may utilize traditional book marketing tactics and a mix of<Link href="/" className='text-[#3a7c92] underline hover:text-[#4e9eb8]'> digital marketing and book publicity</Link>.</p>
              <div className="shrink-0 relative w-full md:w-100 h-25 md:h-30">
                <Image src="/promote-page/how-to-market-book/image12.png" alt='image' fill className="object-contain md:scale-120" />
              </div>
            </div>
            <p>While publicity is especially helpful in establishing an author’s brand and giving him or her clout in the publishing world, digital marketing is about getting people to click on an ad and buy your book. Digital marketing is necessary, and it’s one of the best ways to connect with readers. Both are effective and important methods of book promotion. </p>
          </section>

          {/* benefits of social media marketing */}
          <section>
            <h1 className="text-[clamp(28px,2.5vw,32px)] leading-[clamp(33px,2.5vw,38px)] font-bold mb-2">The Benefits of Social Media Marketing</h1>
            <div className="h-1 w-30 bg-[#4e9eb8] my-6" />
            <ul className="space-y-2">
              {socialMediaPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <h2 className='font-bold my-2'>A few things to keep in mind: </h2>
            <ul className="space-y-2 list-disc pl-5 mb-2">
              {fewThingsToKeepIn.map((item, idx) => {
                return (
                  <li key={idx}>{item}</li>
                )
              })}
            </ul>
            <p>Finally, be aware that there are some <Link href="/" className='text-[#3a7c92] underline hover:text-[#4e9eb8]'>unique pitfalls in promoting your books online</Link>. Avoiding them can help you gain more followers, more attention for your book, and hopefully, more sales. </p>
          </section>
        </section>

        {/* Banner: Author Website */}
        <BgBanner
          id="author-website"
          title="How to Create an Author Website"
          subtitle={<>A critical element of any book marketing strategy is that authors and small publishers must have their own mobile-friendly, professional-looking website. Thinking about the purpose of your site and having a plan will help you <Link href="/" className='text-[#3a7c92] underline hover:text-[#4e9eb8]'>create an author website</Link> that serves your goals and meets your needs for the long term.</>}
          image="/promote-page/how-to-market-book/image13.webp"
          reverse
        />

        {/* Domain + Traffic */}
        <section className="mx-auto max-w-[800px] px-4 py-12 space-y-8">
          {/* choose a domain */}
          <section>
            <h1 className="text-[clamp(28px,2.5vw,32px)] leading-[clamp(33px,2.5vw,38px)] font-bold mb-2">Choosing a Domain</h1>
            <div className="h-1 w-30 bg-[#4e9eb8] my-6" />
            <p className='mb-2'>Before launching your website, decide on your domain name. You should buy the domain name yourself with your email address and credit card. This ensures that you receive all updates and/or renewal notices for subscriptions and webhosting. Cost for your domain will depend on how you build it, whether using a DIY platform such as Wix or WordPress or hiring a website designer/developer to handle it for you.</p>
            <p>Keep in mind that many developers don’t know much about marketing, particularly how to promote a book. So check out a developer’s portfolio before you hire them. There are a number of questions to ask yourself before choosing and committing to a developer for your site, including:</p>

            <div className='flex gap-10 flex-col sm:flex-row mb-12 md:mb-4 items-center mt-2'>
              <div className="shrink-0 relative w-30 h-30">
                <Image src="/promote-page/how-to-market-book/image14.webp" alt='image' fill className="object-contain " />
              </div>
              <ul className="list-disc space-y-2 pl-5">
                {domainTips.map((tip, idx) => {
                  return (
                    <li key={idx}>{tip}</li>
                  )
                })}
              </ul>
            </div>
          </section>

          {/* website traffic */}
          <section>
            <h1 className="text-[clamp(28px,2.5vw,32px)] leading-[clamp(33px,2.5vw,38px)] font-bold mb-2">
              Website Traffic
            </h1>
            <div className="h-1 w-30 bg-[#4e9eb8] my-6" />
            <p className="mb-3">
              Once you’ve set up your author website, how do you measure its success? By tracking traffic to your site. This data is essential. The easiest and most effective way to track such progress and discover what’s resonating with your visitors is by connecting your site to Google Analytics with a bit of tracking code. The data you receive may be confusing at first, so be sure to focus on such important information as:
            </p>
            <div className='flex gap-10 flex-col md:flex-row mb-12 md:mb-4 items-center mt-2'>
              <ul className="list-disc space-y-2 pl-5 text-[#666]">
                {websiteTrafficMetrics.map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>
              <div className="shrink-0 relative w-65 h-30">
                <Image src="/promote-page/how-to-market-book/image15.webp" alt='image' fill className="object-contain scale-130 md:scale-150" />
              </div>
            </div>
          </section>

          {/* marketing on website */}
          <section>
            <h1 className="text-[clamp(28px,2.5vw,32px)] leading-[clamp(33px,2.5vw,38px)] font-bold mb-2">
              Marketing Your Self-Published Book on Your Website
            </h1>
            <div className="h-1 w-30 bg-[#4e9eb8] my-6" />
            <p className="mb-2">
              Your author website is your primary online presence and your author platform. This is where people will learn more about you and your books, and it’s the only place you have complete design and editorial control.
            </p>
            <p>There are a number of things to consider when setting up your site and using it as part of your overall book<Link href="/" className='text-[#3a7c92] underline hover:text-[#4e9eb8]'> marketing strategy</Link>, including:
            </p>
            <ul className="list-disc space-y-2 pl-5 mt-2 text-[#666]">
              {marketingOnWebsite.map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </ul>
          </section>

          {/* develop marketing content strategy */}
          <section>
            <h1 className="text-[clamp(28px,2.5vw,32px)] leading-[clamp(33px,2.5vw,38px)] font-bold mb-2">
              Develop a Marketing Content Strategy
            </h1>
            <div className="h-1 w-30 bg-[#4e9eb8] my-6" />
            <p className="mb-2 text-[#666]">Successful self-published authors are not just people who write well—they’re people who think of their writing career as a business. Like any successful business, authors need a content strategy.
            </p>
            <p className='text-[#666]'>A <Link href="/" className='text-[#3a7c92] underline hover:text-[#4e9eb8]'>content strategy</Link> will look different for every author and every genre, but there are some key things that authors should be thinking about as they develop their own, including:
            </p>
            <ul className="list-disc space-y-2 pl-5 my-2 text-[#666]">
              {marketingContentStrategy.map((content, idx) => (
                <li key={idx}>{content}</li>
              ))}
            </ul>
            <p className="text-[#666]">
              Building interest in your book doesn’t happen overnight. Creating a content strategy is difficult, but the real challenge is acting on it. The point is to build your traffic and, by extension, build your audience over time.</p>
          </section>

          {/* blogging */}
          <section>
            <h1 className="text-[clamp(28px,2.5vw,32px)] leading-[clamp(33px,2.5vw,38px)] font-bold mb-2">
              Blogging
            </h1>
            <div className="h-1 w-30 bg-[#4e9eb8] my-6" />
            <p className="mb-2 ">
              You probably already know how important it is to blog about your book. Blog traffic doesn’t happen overnight, but with consistent effort, your author blog can build momentum with time.
            </p>
            <p>Article writing is a great way to grow your audience and build a community. Some book promotion ideas for crafting an effective article are noted below.
            </p>
            <ul className="list-disc space-y-2 pl-5 my-2 text-[#666]">
              {bloggingTips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
            <p className="text-[#666]">Though writing articles may be time-consuming, it’s one of the best ways to generate more followers and establish credibility.</p>
          </section>
        </section>

        {/* Banner: Your Book in Stores */}
        <BgBanner
          id="book-in-stores"
          title="How to Get Your Book in Stores"
          subtitle="To get your book in readers’ hands, you can sell your book to more than just your local bookstore. Below, you’ll find a bit more detail on the places you can sell your book. "
          image="/promote-page/how-to-market-book/image16.webp"
        />

        {/* final section */}
        <section className="mx-auto max-w-[800px] px-4 py-12 space-y-8">
          {/* get your book in stores */}
          <section>
            <h1 className="text-[clamp(20px,2.5vw,22px)] leading-[clamp(24px,2.5vw,28px)] font-bold mb-2">
              What are some of the ways to go about <Link href="/" className='text-[#3a7c92] underline hover:text-[#4e9eb8]'>selling your book to independent bookstores</Link>?
            </h1>
            <ul className="list-disc space-y-2 pl-5 my-4 text-[#666]">
              {storeSellingPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <p className="mb-2">Marketing for self-published books is an essential part of the overall publishing process and takes proper planning. It starts with creating good book metadata and identifying the right keywords for your book. This, coupled with a good book description, could lead to potential sales just for being in the right place at the right time when a reader performs a search for information. Utilizing social media platforms and creating an author website are also very important steps in targeting and finding your audience. Finally, you must get out there and cultivate relationships with booksellers, pitching your book, advertising it in unconventional places such as grocery stores, and setting up events at libraries or local bookstores.
            </p>
            <p className="">
              For more information and book marketing ideas, download our complete guide to marketing for self-published books. </p>
          </section>

          {/* Form */}
          <section className="mx-auto max-w-[800px] px-4 py-16">

            <h1 className="text-[clamp(28px,2.5vw,32px)] leading-[clamp(33px,2.5vw,38px)] font-bold mb-6 text-[#4e9eb8]">
              Fill out the form to get the guide!
            </h1>
            <div className='w-full'>
              <form className="space-y-3 flex-1 flex md:inline-block flex-col items-center">
                {formFields.map((field) => (
                  <div key={field.name} className="w-full md:max-w-[360px] mb-5">
                    <input
                      id={field.name}
                      name={field.name}
                      placeholder={field.label}
                      className="w-full rounded-sm border border-gray-300 px-3 py-2 text-base text-[#555] focus:border-[1.5px] focus:shadow-[0_0_10px_0.5px_#4e9eb8]/40 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                ))}

                <label className="flex items-start gap-2 text-[13px] text-[#666]">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    I agree to receive marketing messages from IngramSpark and consent to the IngramPublishers <Link href="/" className='text-[#3a7c92] underline hover:text-[#4e9eb8]'>privacy policy</Link> and <Link href="/" className='text-[#3a7c92] underline hover:text-[#4e9eb8]'>terms of use.</Link>*
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full md:w-fit rounded-md btnYellow px-7 py-2 text-xl text-slate-900 "
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
        </section>
      </main>
    </>
  )
}

export default HowToMarketBook