'use client';
// app/(marketing)/how-to-market-book/page.tsx

import React from 'react'
import PublishHeroBanner from '@/components/PublishHeroBanner'
import Image from 'next/image';
import { ReactNode } from 'react';
import BgBanner from './BgBanner';
import Link from 'next/link';

type BannerProps = {
  id?: string;
  title: string;
  subtitle?: string;
  imageIndex: number;
  reverse?: boolean;
  children?: ReactNode;
};

// const FullWidthBanner = ({
//   id,
//   title,
//   subtitle,
//   imageIndex,
//   reverse,
//   children,
// }: BannerProps) => (
//   <section
//     id={id}
//     className="w-full bg-slate-50 border-y border-slate-100 py-12 md:py-16"
//   >
//     <div
//       className={`mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 md:flex-row ${reverse ? 'md:flex-row-reverse' : ''
//         }`}
//     >
//       <div className="flex-1">
//         <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-3">
//           {title}
//         </h2>
//         {subtitle && (
//           <p className="text-slate-600 mb-4 leading-relaxed">{subtitle}</p>
//         )}
//         {children}
//       </div>

//       <div className="relative h-40 w-full flex-1 md:h-64">
//         <Image
//           src={`/promote-page/how-to-market-book/image${imageIndex}.webp`}
//           alt={title}
//           fill
//           className="object-contain"
//         />
//       </div>
//     </div>
//   </section>
// );

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

  const websiteTrafficMetrics = [
    'Page views and session duration (how long people actually stay).',
    'Bounce rate and top-performing pages so you know what content to double down on.',
  ];

  const formFields = [
    { name: 'firstName', label: 'First Name*' },
    { name: 'lastName', label: 'Last Name*' },
    { name: 'email', label: 'Email Address*' },
  ];

  const websiteChecklist = [
    'Your author brand',
    'Mailing lists and newsletters',
    'Social media links',
    'Press/media page',
    'Book giveaways',
  ];

  const contentStrategyPoints = [
    'Goal: the more specific the better.',
    'Persona(s): know your audience and ideal reader.',
    'Content plan: unique, engaging content that leads users to your book.',
  ];

  const bloggingTips = [
    'Find the best topic.',
    'Offer specific takeaways.',
    'Don’t be too promotional.',
    'Do your homework.',
  ];

  const storeSellingPoints = [
    'Know your audience: not every store fits every book.',
    'Craft your pitch: short, clear, and respectful of their time.',
    'Have a one-sheet: a simple summary of your book and credentials.',
    'Be available: let stores know when and where your book is in stock.',
  ];

  const finalFormFields = ['First Name*', 'Last Name*', 'Email Address*'];


  return (
    <>   {/* hero banner */}
      <PublishHeroBanner
        image="/promote-page/how-to-market-book/hero-image.webp"
        heading='How to Market a Book'
        description="The right marketing for self-published authors can mean the difference between a successful book publicity campaign and one that produces marginal results."
        button={true}
        gotoLink='/create-account'
        bgColor='#eaf7fd'
      />

      {/* Main body */}
      <div>

        <main className="min-h-screen bg-white text-slate-800">
          {/* Hero + Form */}
          <section className="mx-auto flex flex-col max-w-[800px] gap-10 px-4 pb-12 pt-10 md:items-start">
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
              <ul className='list-disc space-y-2 text-[#666]'>
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
                <div className="shrink-0 relative w-65 h-30">
                  <Image src="/promote-page/how-to-market-book/image6.webp" alt='image' fill className="object-contain scale-160" />
                </div>
              </div>
              <p>An effective book description should start with a clear and compelling headline, followed by a detailed explanation that lets the reader know what to expect from your book. Finally, it should end with a strong closing, identifying why readers should be interested in your book.</p>

              <h2 className='text-[#4e9eb8] font-bold my-3'>Here are a few other tips for writing a good description:</h2>
              <ul className='list-disc space-y-2 text-[#666]'>
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
                <div className="shrink-0 relative w-65 h-30">
                  <Image src="/promote-page/how-to-market-book/image8.webp" alt='image' fill className="object-contain scale-170" />
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
                  <Image src="/promote-page/how-to-market-book/image9.webp" alt='image' fill className="object-contain scale-150" />
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
                <p className="mb-3">More than just getting shelf space, today’s book marketing is about appealing to a variety of readers and employing various means of creating impressions for your book. You may utilize traditional book marketing tactics and a mix of<Link href="/" className='text-[#3a7c92] underline hover:text-[#4e9eb8]'> digital marketing and book publicity</Link>.</p>
                <div className="shrink-0 relative w-100 h-30">
                  <Image src="/promote-page/how-to-market-book/image12.png" alt='image' fill className="object-contain scale-120" />
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
              <p>Before launching your website, decide on your domain name. You should buy the domain name yourself with your email address and credit card. This ensures that you receive all updates and/or renewal notices for subscriptions and webhosting. Cost for your domain will depend on how you build it, whether using a DIY platform such as Wix or WordPress or hiring a website designer/developer to handle it for you.</p>
              <p>Keep in mind that many developers don’t know much about marketing, particularly how to promote a book. So check out a developer’s portfolio before you hire them. There are a number of questions to ask yourself before choosing and committing to a developer for your site, including:</p>

              <div className='flex gap-10 flex-col md:flex-row mb-12 md:mb-4 items-center mt-2'>
                <div className="shrink-0 relative w-30 h-70">
                  <Image src="/promote-page/how-to-market-book/image10.png" alt='image' fill className="object-contain scale-120" />
                </div>
                <ul></ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                Website Traffic
              </h2>
              <div className="h-0.5 w-14 bg-sky-300 mb-3" />
              <p className="text-slate-700 mb-3">
                Connect your site to analytics so you’re not guessing which efforts
                actually move the needle.
              </p>
              <ul className="list-disc space-y-2 pl-5 text-slate-700">
                {websiteTrafficMetrics.map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>
            </section>
          </section>

          {/* Banner: Book in Stores */}
          <BgBanner
            id="book-in-stores"
            title="Get Your Book in Stores"
            subtitle="Use professional metadata, strong demand, and clean distribution to give retailers a reason to stock your title."
            imageIndex={6}
            image="/promote-page/how-to-market-book/image16.webp"
          />

          {/* Banner: Marketing Your Book on Your Website */}
          <BgBanner
            id="marketing-on-website"
            title="Marketing Your Self-Published Book on Your Website"
            subtitle="Your website is your digital headquarters—your brand, your content, your rules."
            imageIndex={7}
            image="/promote-page/how-to-market-book/image16.webp"
          />

          <section className="mx-auto max-w-5xl px-4 py-12 space-y-8">
            <p className="text-slate-700 leading-relaxed">
              Your author website is your primary online presence and the only place where
              you fully control the design, messaging, and experience.
            </p>

            <ul className="list-disc space-y-2 pl-5 text-slate-700">
              {websiteChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Banner: Develop Content Strategy */}
          <BgBanner
            id="content-strategy"
            title="Develop a Marketing Content Strategy"
            subtitle="A long-term content plan builds traffic, authority, and reader trust."
            imageIndex={8}
            image="/promote-page/how-to-market-book/image16.webp"
            reverse
          />

          <section className="mx-auto max-w-5xl px-4 py-12 space-y-8">
            <p className="text-slate-700 leading-relaxed">
              Successful self-published authors think like business owners—not hobbyists.
              A content strategy helps you consistently attract readers over time.
            </p>

            <ul className="list-disc space-y-2 pl-5 text-slate-700">
              {contentStrategyPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="text-slate-700 leading-relaxed">
              The challenge isn’t planning—it’s sticking to the plan. Consistent output
              builds steady traffic and a loyal audience.
            </p>
          </section>

          {/* Banner: Blogging */}
          <BgBanner
            id="blogging"
            title="Blogging"
            subtitle="One of the most powerful long-term strategies to build authority and consistent traffic."
            imageIndex={9}
            image="/promote-page/how-to-market-book/image16.webp"
          />

          <section className="mx-auto max-w-5xl px-4 py-12 space-y-8">
            <p className="text-slate-700 leading-relaxed">
              Blogging may be slow at first, but it creates long-term, compounding traffic.
              It helps readers discover you naturally and trust your expertise.
            </p>

            <ul className="list-disc space-y-2 pl-5 text-slate-700">
              {bloggingTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>

            <p className="text-slate-700 leading-relaxed">
              Yes, writing articles takes time—but it’s one of the most reliable ways
              to build credibility and attract readers organically.
            </p>
          </section>

          {/* Banner: How to Get Your Book in Stores */}
          <BgBanner
            id="stores"
            title="How to Get Your Book in Stores"
            subtitle="Selling your book goes beyond Amazon—local shops, libraries, and specialty stores all matter."
            imageIndex={10}
            image="/promote-page/how-to-market-book/image16.webp"
            reverse
          />

          <section className="mx-auto max-w-5xl px-4 py-12 space-y-8">
            <p className="text-slate-700 leading-relaxed">
              To get your book physically in readersʼ hands, you need to approach more than
              just Amazon. Local bookstores still matter—big time.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-3">
              Ways to sell your book to independent bookstores
            </h2>
            <div className="h-0.5 w-14 bg-sky-300 mb-4" />

            <ul className="list-disc space-y-2 pl-5 text-slate-700">
              {storeSellingPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="text-slate-700 leading-relaxed">
              Good metadata, a strong web presence, and consistent outreach all work together
              to build trust with readers and retailers alike.
            </p>
          </section>

          {/* Final Form */}
          <section className="mx-auto max-w-5xl px-4 py-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6">
              Fill out the form to get the guide!
            </h2>

            <form className="space-y-4 max-w-md">
              {finalFormFields.map((label) => (
                <div key={label} className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-slate-700">{label}</label>
                  <input className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:ring-sky-500 focus:border-sky-500" />
                </div>
              ))}

              <label className="flex items-start gap-2 text-xs text-slate-600">
                <input type="checkbox" className="mt-1" />
                <span>
                  I agree to receive marketing messages and consent to the privacy policy and terms.
                </span>
              </label>

              <button
                type="submit"
                className="rounded-md bg-amber-400 px-6 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-300"
              >
                Submit
              </button>
            </form>
          </section>
        </main>


      </div>
    </>
  )
}

export default HowToMarketBook