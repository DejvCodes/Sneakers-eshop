import "./ProductCard.css"
import formatPrice from "../function/FormatPrice"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LuShoppingBag } from "react-icons/lu";
import { addToShoppingBag, showNotification, hideNotification } from "../stores/shoppingBag";

const ProductCard = ({ id, fullName, price, image, slug }) => {
  const dispatch = useDispatch()

  // Funkce pro přidání produktu do košíku
  const handleAddToBag = () => {
    dispatch(addToShoppingBag({
      productId: id,
      quantity: 1,
    }))
    dispatch(showNotification());
    setTimeout(() => {
      dispatch(hideNotification());
    }, 1500);
  }

  return (
    <>
      <div className="one-product">
        <Link to={slug}>
          <img src={image} alt={slug} />
        </Link>
        <h2>{fullName}</h2>
        <div className="info">
          <p>{formatPrice(price)}</p>
          <button onClick={handleAddToBag}><LuShoppingBag /></button>
        </div>
      </div>
    </>
  )
}

// Validace props
ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  fullName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default ProductCard