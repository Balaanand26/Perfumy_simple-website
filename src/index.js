import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"
import one from "./assests/images/download.jpeg"
import two from "./assests/images/images (1).jpeg"
import three from "./assests/images/images.jpeg"

const root = ReactDOM.createRoot(document.getElementById("root"))


function Navbar(){
  return(
    <nav>
      <h1>Perfumy</h1>
      <ul>
        <li><a href="">Home |</a></li>
        <li><a href="">Products |</a></li>
        <li><a href="">About |</a></li>
        <li><a href="">Contact |</a></li>
      </ul>
    </nav>
  )
}

function Search(){
  return(
    <div class="searchbar">
      <input type="text" placeholder="searchbar" />
    </div>
  )
}
function Product(){
  return(
    <div class="product_container">
      <div class="card_product">
        <img src={one} alt="" />
        <p>Pink Note, Premium Perfume, Long-lasting perfume, 50ml</p>
      </div>
      <div class="card_product">
        <img src={two} alt="" />
        <p>Sovaze By Olga Perfumes, Long-lasting perfume, 50ml</p>
      </div>
      <div class="card_product">
        <img src={three} alt="" />
        <p>Ciccio Blue Eau De Parfum, Long-lasting perfume, 50ml</p>
      </div>
    </div>
  )
}
function About(){
  return(
    <div class="about_page">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse error illum cum cumque sint quam tempore porro deserunt? Perspiciatis nisi dolores minima nostrum debitis voluptatem animi nemo exercitationem neque fugit.</p>
    </div>
  )
}
function Footer(){
  return(
    <footer>
        <h3>Contact</h3>
        <p>+91 9874563210</p>
        <p>Perfumy@gmail.com</p>
     </footer>
  )
}

root.render(
  <div>
    <Navbar></Navbar>
    <Search></Search>
    <Product></Product>
    <About></About>
    <Footer></Footer>
  </div>
  
)