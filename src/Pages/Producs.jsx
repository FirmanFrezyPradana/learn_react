// langkah pertama import useState
import React, { Fragment, useState, useEffect, useRef } from "react";
import { CardProduct } from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.services";
import { useLogin } from "../hooks/useLogin";
import { TableCart } from "../components/Fragments/TableCart";
import { NavBar } from "../components/Layout/NavBar";
function Producs() {
  const [products, setProducts] = useState([]);
  useLogin();
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Fragment>
      <NavBar />
      <div className="flex justify-center py-3">
        <div className="w-3/4">
          <div className="grid grid-cols-3 gap-5">
            {products.length > 0 &&
              products.map((product) => (
                <CardProduct key={product.id}>
                  <CardProduct.Header image={product.image} alt={product.alt} id={product.id} />
                  <CardProduct.Body title={product.title}>
                    {product.description}
                  </CardProduct.Body>
                  <CardProduct.Footer
                    price={product.price}
                    rating={product.rating.rate}
                    id={product.id}
                  />
                </CardProduct>
              ))}
          </div>
        </div>
        <div className="w-1/4 text-center">
          <h1 className="text-3xl font-bold text-green-500">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </Fragment>
  );
}

export default Producs;
