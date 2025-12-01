import React from 'react'
import PublishHeroBanner from '@/components/PublishHeroBanner'

const HowToMarketBook = () => {
  return (
    <>   {/* hero banner */}
      <PublishHeroBanner
        image="/promote-page/how-to-market-book/hero-image.webp"
        heading={<><span>How to Market</span><span className='ml-3 lg:ml-0'>a Book</span></>}
        description="The right marketing for self-published authors can mean the difference between a successful book publicity campaign and one that produces marginal results."
        button={true}
        gotoLink='/create-account'
        bgColor='#eaf7fd'
      />

      {/* Main body */}
      <div>
        
      </div>
    </>
  )
}

export default HowToMarketBook