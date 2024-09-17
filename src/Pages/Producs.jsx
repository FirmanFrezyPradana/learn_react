// langkah pertama import useState
import React, { Fragment, useState, useEffect, useRef } from "react";
import { CardProduct } from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
// import Counter from "./Couter";
// import { json } from "react-router-dom";
import getProducts from "../services/product.services";
import { getUsername } from "../services/auth.services";
// const products = [
//   {
//     id: 1,
//     image: "/images/product-1.jpg",
//     alt: "product image",
//     title: "Apple Watch Series 7",
//     descripsi:
//       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odi perferendis beatae...",
//     price: 3000000,
//     rating: 5,
//   },
//   {
//     id: 2,
//     image: "/images/product-1.jpg",
//     alt: "product image",
//     title: "Apple Watch Series 5",
//     descripsi:
//       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nobis....",
//     price: 5000000,
//     rating: 4,
//   },
//   {
//     id: 3,
//     image: "/images/product-1.jpg",
//     alt: "product image",
//     title: "Apple Watch Series 4",
//     descripsi:
//       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nobis....",
//     price: 6000000,
//     rating: 4,
//   },
// ];
const email = localStorage.getItem("email");
function Producs() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [username, setUsername] = useState([]);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/";
    }
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
    }
  }, [cart, products]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/";
  };
  const handleAddCard = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }
  };

  // contoh usereff
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);
  const handleAddCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id, qty: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };
  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <Fragment>
      <div className="w-full bg-green-500 py-5 justify-end flex text-white items-center px-6 font-bold">
        {username}
        <Button classname="ml-5 bg-black px-4" onClick={handleLogout}>
          logout
        </Button>
      </div>
      <div className="flex justify-center py-3">
        <div className="w-3/4">
          <div className="grid grid-cols-3 gap-5">
            {products.length > 0 &&
              products.map((product) => (
                <CardProduct key={product.id}>
                  <CardProduct.Header image={product.image} alt={product.alt} />
                  <CardProduct.Body title={product.title}>
                    {product.description}
                  </CardProduct.Body>
                  <CardProduct.Footer
                    price={product.price}
                    rating={product.rating.rate}
                    id={product.id}
                    handleAddCard={handleAddCard}
                    // handleAddCard={handleAddCartRef}
                  />
                </CardProduct>
              ))}
          </div>
        </div>
        <div className="w-1/4 text-center">
          <h1 className="text-3xl font-bold text-green-500">Cart</h1>
          <table className="text-left  table-auto border-separate border-spacing-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>price</th>
                <th>QTY</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* {cartRef.current.map((item) => { */}
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td>{product.title}</td>
                      <td>Rp. {product.price.toLocaleString("id-ID")}</td>
                      <td>{item.qty}</td>
                      <td>
                        {(item.qty * product.price).toLocaleString("id-ID")}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <th colSpan={3} className="font-bold">
                  Total price
                </th>
                <th className="font-bold">
                  Rp
                  {totalPrice.toLocaleString("id-ID")}
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className=" flex justify-center">
        <Counter></Counter>
      </div> */}
    </Fragment>
  );
}

export default Producs;
