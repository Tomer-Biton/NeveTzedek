interface ProductCardProps {
  ProductCardImage: string,
  ProductCardName: string,
  ProductCardPrice: number,
  ProductCardPrice100cc: number,
}

// will not be needed in the final version, will switch to using the database. 

const ProductCard: React.FC<ProductCardProps> = ({ ProductCardImage, ProductCardName, ProductCardPrice, ProductCardPrice100cc }) => {
  return (
    // this product car will include and image, product name, a favorite button, a price, plus and minus buttons to change the quantity using redux with a counter of how many were added to the cart already, and under it a price for 100cc. all of the data will be fetched from the database.
    <div className="ProductCard">
      <button className="ProductCardFavBtn"></button>
      <div className="ProductImageNameWrap">
        <div className="ProductCardImage"
          style={{
            backgroundImage: `url(${ProductCardImage})`
          }} ></div>
        <div className="ProductCardName">{ProductCardName}</div>
      </div>
    </div>
  )
}

export default ProductCard