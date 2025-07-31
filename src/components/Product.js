import one from "../assests/images/download.jpeg"
import two from "../assests/images/images (1).jpeg"
import three from "../assests/images/images.jpeg" 


function Product(){
  return(
    <div class="product_container">
      <div class="card_product">
        <img src={one} alt="Pink Note Perfume" />
        <p>Pink Note, Premium Perfume, Long-lasting perfume, 50ml</p>
      </div>
      <div class="card_product">
        <img src={two} alt="Sovaze By Olga Perfumes" />
        <p>Sovaze By Olga Perfumes, Long-lasting perfume, 50ml</p>
      </div>
      <div class="card_product">
        <img src={three} alt="Ciccio Blue Eau De Parfum" />
        <p>Ciccio Blue Eau De Parfum, Long-lasting perfume, 50ml</p>
      </div>
    </div>
  )
}

export default Product