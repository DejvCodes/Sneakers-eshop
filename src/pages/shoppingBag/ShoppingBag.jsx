import "./ShoppingBag.css"
import { useSelector } from "react-redux"
import { products } from "../../data/data"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6";
import formatPrice from "../../function/FormatPrice"
import ShoppingBagOneItem from "../../components/ShoppingBagOneItem"

const ShoppingBag = () => {
  const [price, setPrice] = useState(0)
  const shoppingBag = useSelector(store => store.shoppingBag.items)

  // Výpočet celkové ceny
  useEffect(() => {
    const totalPrice = shoppingBag.reduce((acc, item) => {
      const product = products.find((oneItem) => {
        return oneItem.id === item.productId
      })
      if (product) {
        return acc + product.price * item.quantity
      }
      return acc
    }, 0)
    setPrice(totalPrice)
  }, [shoppingBag])

  return (
    <>
      <section className="shopping-bag">
        <div className="container">
          <div className="shopping-bag-box">
            <div className="shopping-bag-items">
              {shoppingBag.map((oneItem, index) => {
                return <ShoppingBagOneItem key={index} {...oneItem} />
              })}
            </div>
            {price ? "" : <h2 className="empty">Košík je prázdný</h2>}
            <hr />
            <div className="back-price">
              <Link to="/" className="back-in-cart"><FaArrowLeftLong /> zpět</Link>
              <h2 className="total-price">Celkem za zboží: {formatPrice(price)}</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShoppingBag