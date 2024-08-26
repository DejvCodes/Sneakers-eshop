import "./ShoppingBagOneItem.css"
import formatPrice from "../function/FormatPrice"
import { products } from "../data/data"
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { changeQuantity, deleteProduct } from "../stores/shoppingBag";

const ShoppingBagOneItem = ({productId, quantity}) => {
  const dispatch = useDispatch()
  const [oneProductDetail, setOneProductDetail] = useState([])

  // Vyhledání produktu podle ID a nastavení detailů
  useEffect(() => {
    const findProduct = products.filter((oneProduct) => {
      return oneProduct.id === productId
    })
    setOneProductDetail(findProduct[0])
  }, [productId])

  // Funkce pro snížení množství
  const handleMinusQuantity = () => {
    // Odeslání akce changeQuantity
    dispatch(changeQuantity({
      productId: productId,
      quantity: quantity - 1,
    }))
  }

  // Funkce pro zvýšení množství
  const handlePlusQuantity = () => {
    // Odeslání akce changeQuantity
    dispatch(changeQuantity({
      productId: productId,
      quantity: quantity + 1,
   }))
  }

  // Funkce pro vymazání produktu z košíku
  const handleDeleteProduct = () => {
    // Odeslání akce deleteProduct
    dispatch(deleteProduct({
      productId: productId,
    }))
  }

  return (
    <>
      <div className="shopping-bag-one-item">
        <div className="left-side">
          <button className="delete-product" onClick={handleDeleteProduct}><RxCross2 /></button>
          <Link to={`/${oneProductDetail.slug}`}>
            <img src={oneProductDetail.image} alt={oneProductDetail.slug}/>
          </Link>
          <p>{oneProductDetail.fullName}</p>
        </div>

        <div className="right-side">
          <p className="price">{formatPrice(oneProductDetail.price * quantity)}</p>
          <div className="quantity">
            <button className="minus" onClick={handleMinusQuantity}><CiSquareMinus /></button>
            <span>{quantity}</span>
            <button className="plus" onClick={handlePlusQuantity}><CiSquarePlus /></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShoppingBagOneItem