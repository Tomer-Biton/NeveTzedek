import React from 'react'
import Navbar from './Components/Home Page Components/Navbar'
import HeroSection from './Components/Home Page Components/HeroSection'
import CategoryMainImages from './Components/Home Page Components/CategoryMainImages'

const HomePage = () => {
  return (
    <>
      <div className='TopBannerMessage'>
        <p className='bannerTopText'>
          משלוח מבוצע ע"י חברת WOLT בלבד
          {/* <br /><span className="bannerSmallNote">
            *בכפוף לתקנון המשלוחים. עקב המצב הביטחוני ייתכנו עיכובים באספקת המוצרים
          </span> */}
        </p>
      </div>

      <Navbar />

      <HeroSection />

      <CategoryMainImages />

    </>
  )
}

export default HomePage