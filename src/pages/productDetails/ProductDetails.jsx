import "./ProductDetails.css"
import formatPrice from "../../function/FormatPrice"
import { products } from "../../data/data"
import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import { addToShoppingBag, showNotification, hideNotification } from "../../store/shoppingBag"

const ProductDetails = () => {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)
  const [productDetails, setProductDetails] = useState()

  // Výpočet celkové ceny
  useEffect(() => {
    const findProductDetails = products.filter((oneProduct) => {
      return oneProduct.slug === slug
    })
    if (findProductDetails.length > 0) {
      setProductDetails(findProductDetails[0]);
    } else {
      window.location.href = "/all-products"
    }
  }, [slug])

  // Zobrazení stavu načítání, pokud nejsou dostupné detaily produktu
  if (!productDetails) {
    return <div>Loading...</div>;
  }

  // Destructuring
  const { id, name, brand, type, price, image, images, season, info, productCode } = productDetails

  // Funkce pro snížení množství (minimální množství je 1)
  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
  }

  // Funkce pro zvýšení množství
  const handlePlusQuantity = () => {
    setQuantity(quantity + 1)
  }

  // Funkce pro přidání produktu do košíku
  const handleAddToBag = () => {
    dispatch(addToShoppingBag({
      productId: id,
      quantity: quantity,
    }))
    dispatch(showNotification());
    setTimeout(() => {
      dispatch(hideNotification());
    }, 1500);
    // Nastavení množství 
    setQuantity(1)
  }

  return (
    <>
      <section className="product-details">
        <div className="container">
          <div className="product-details-box">
            <div className="all-images">
              <div className="main-image">
                <img src={image} alt={slug} />
              </div>
              <div className="more-images">
                {images.map((oneImg, index) => {
                  return <img src={oneImg} alt={`{${name} - obrázek ${index + 1}}`} key={index} />
                })}
              </div>
            </div>
            <div className="more-information">
              <p className="brand">{brand}</p>
              <h2 className="name">{name}</h2>
              <p className="type">{type}</p>
              <p className="price">{formatPrice(price)}</p>
              <p className="info">{info}</p>
              <div className="season">
                <p>Sezóna: {season ? season.join(', ') : "Neznámá informace"}</p>
              </div>
              <p className="product-code">Kód: {productCode}</p>
              <div className="buttons">
                <button className="minus" onClick={() => handleMinusQuantity()}><CiSquareMinus /></button>
                <span>{quantity}</span>
                <button className="plus" onClick={() => handlePlusQuantity()}><CiSquarePlus /></button>
                <button className="add-to-cart" onClick={handleAddToBag}>Přidat do košíku</button>
              </div>
            </div>
          </div>
          {/* Link zpět */}
          <Link to="/" className="back"><FaArrowLeftLong /> sekce produkty</Link>
        </div>
      </section>
    </>
  )
}

export default ProductDetails