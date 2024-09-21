import React from 'react'

const CategoryMainImages = () => {
  return (
    <section className="ImagesForProductsCategories">
      <div className="imageWText">
        <a href='#' className="ProductsSectionImage HardLiquorSectionIMG"></a>
        <p className='textOnImg'>גלידה</p>
      </div>
      <div className="imageWText">
        <a href='#' className="ProductsSectionImage VodkaSectionIMG"></a>
        <p className='textOnImg'>קינוחים</p>
      </div>
      <div className="imageWText">
        <a href='#' className="ProductsSectionImage WhiskeySectionIMG"></a>
        <p className='textOnImg'>שתייה</p>
      </div>
      <div className="imageWText">
        <a href='#' className="ProductsSectionImage WineSectionIMG"></a>
        <p className='textOnImg'>סניפים</p>
      </div>
    </section>
  )
}

export default CategoryMainImages