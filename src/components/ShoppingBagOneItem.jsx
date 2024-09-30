import "./ShoppingBagOneItem.css"
import formatPrice from "../function/FormatPrice"
import PropTypes from "prop-types";
import { products } from "../data/data"
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { changeQuantity, deleteProduct } from "../store/shoppingBag";

const ShoppingBagOneItem = ({ productId, quantity }) => {
  const dispatch = useDispatch()
  const [oneProductDetail, setOneProductDetail] = useState([])

  // Vyhledání produktu podle ID a nastavení detailů
  useEffect(() => {
    const findProduct = products.find((oneProduct) => {
      return oneProduct.id === productId
    })
    setOneProductDetail(findProduct)
  }, [productId])

  // Funkce pro snížení množství
  const handleMinusQuantity = () => {
    dispatch(changeQuantity({
      productId: productId,
      quantity: quantity - 1,
    }))
  }

  // Funkce pro zvýšení množství
  const handlePlusQuantity = () => {
    dispatch(changeQuantity({
      productId: productId,
      quantity: quantity + 1,
    }))
  }

  // Funkce pro vymazání produktu z košíku
  const handleDeleteProduct = () => {
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
            <img src={oneProductDetail.image} alt={oneProductDetail.slug} />
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

// Validace props
ShoppingBagOneItem.propTypes = {
  productId: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
}

export default ShoppingBagOneItem