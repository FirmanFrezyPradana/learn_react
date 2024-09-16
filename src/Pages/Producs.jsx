// langkah pertama import useState
import React, { Fragment, useState, useEffect } from "react";
import { CardProduct } from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import Counter from "./Couter";
import { json } from "react-router-dom";
const products = [
  {
    id: 1,
    image: "/images/product-1.jpg",
    alt: "product image",
    title: "Apple Watch Series 7",
    descripsi:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odi perferendis beatae...",
    price: 3000000,
    rating: 5,
  },
  {
    id: 2,
    image: "/images/product-1.jpg",
    alt: "product image",
    title: "Apple Watch Series 5",
    descripsi:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nobis....",
    price: 5000000,
    rating: 4,
  },
  {
    id: 3,
    image: "/images/product-1.jpg",
    alt: "product image",
    title: "Apple Watch Series 5",
    descripsi:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nobis....",
    price: 6000000,
    rating: 4,
  },
];
const email = localStorage.getItem("email");
function Producs() {
  // useEffect digunakan untuk memanipulasi komponen , funcsionalitasnya dapat digunakan seperti menggunakan componendidmout atau componendidupdate
  // membuat state
  const [cart, setCart] = useState([]);
  // membuat state total
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
    // [] disebut dependency list, digunakan untuk componen yang akan update. atau memantau perubahan
    // apabila kita menggunakan statefull componne maka harus mendefinisikan componen didmouth
    // apabila menggunakan useEffect sudah include penggunakan comopnendidmouth
  }, []);

  // contoh penggunaan componenDidupdate pada useeffect
  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce(
        (acc, item) => {
          const product = products.find((product) => product.id === item.id);
          console.log(product);
          return acc + product.price * item.qty;
        },
        // dimulai dari nilai berapa
        0
      );
      // set nilai dari setTottalPrice
      setTotalPrice(sum);
      // menyimpan ke localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
    }else{
      
    }
  }, [cart]);

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

  return (
    <Fragment>
      <div className="w-full bg-green-500 py-5 justify-end flex text-white items-center px-6 font-bold">
        {email}
        <Button classname="ml-5 bg-black px-4" onClick={handleLogout}>
          logout
        </Button>
      </div>
      <div className="flex justify-center py-3">
        <div className="w-3/4 flex">
          <div className="grid grid-cols-3 gap-5">
            {products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} alt={product.alt} />
                <CardProduct.Body title={product.title}>
                  {product.descripsi}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  rating={product.rating}
                  id={product.id}
                  handleAddCard={handleAddCard}
                />
              </CardProduct>
            ))}
          </div>
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-green-500">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>price</th>
                <th>QTY</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
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
            </tbody>
            <tr>
              <th colSpan={3} className="font-bold">
                Total price
              </th>
              <th className="font-bold">
                Rp
                {totalPrice.toLocaleString("id-ID")}
              </th>
            </tr>
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
