import "./AllProducts.css"
import { products } from "../../data/data"
import { LuSearch } from "react-icons/lu";
import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard"

const AllProducts = () => {
  const [searchingProduct, setSearchingProduct] = useState("")
  const [filteredProducts, setFilteredProducts] = useState([])

  // Vyhledání produktů podle fullName zadaného v inputu
  useEffect(() => {
    const productsAfterFilter = products.filter((oneProduct) => {
      return oneProduct.fullName.toLocaleLowerCase().includes(searchingProduct.toLocaleLowerCase())
    })
    setFilteredProducts(productsAfterFilter)
  }, [searchingProduct])

  return (
    <>
      <section className="products">
        <div className="container">
          <div className="search">
            <input
              type="text"
              placeholder="Vyhledat produkt ..."
              value={searchingProduct}
              onChange={(e) => setSearchingProduct(e.target.value)}
            />
            <LuSearch />
          </div>
          <div className="all-products">
            {filteredProducts.map((oneProduct) => {
              return <ProductCard key={oneProduct.id} {...oneProduct} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllProducts