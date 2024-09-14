import React from "react";
import { CardProduct } from "../components/Fragments/CardProduct";
const products = [
  {
    id: 1,
    image: "/images/product-1.jpg",
    alt: "product image",
    title: "Apple Watch Series 7 GPS",
    descripsi:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odi perferendis beatae...",
    price: 599,
    rating: 5,
  },
  {
    id: 2,
    image: "/images/product-1.jpg",
    alt: "product image",
    title: "Apple Watch Series 5 GPS, Green casing",
    descripsi:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nobis....",
    price: 499,
    rating: 4,
  },
];
function Producs() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} alt={product.alt} />
          <CardProduct.Body title={product.title}>
            {product.descripsi}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} rating={product.rating} />
        </CardProduct>
      ))}
    </div>
  );
}

export default Producs;
