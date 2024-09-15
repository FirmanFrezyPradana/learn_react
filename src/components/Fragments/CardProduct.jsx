import React, { Children } from "react";
import Button from "../Elements/Button";
const Header = (props) => {
  const { image, alt } = props;
  return <img className="rounded-t-lg w-64" src={image} alt={alt} />;
};
const Body = (props) => {
  const { title, children } = props;
  return (
    <div className="px-2 py-2">
      <h5 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="text-gray-900 text-sm dark:text-gray-300 text-justify">
        {children}
      </p>
    </div>
  );
};
const Footer = (props) => {
  const { price, rating, handleAddCard, id } = props;
  // console.log(id);
  const stars = Array.from({ length: 5 }, (_, index) => {
    return index < rating ? (
      <svg
        key={index}
        className="w-4 h-4 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    ) : (
      <svg
        key={index}
        className="w-4 h-4 text-gray-200 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    );
  });
  return (
    <div className="px-5 pb-2">
      <div className="flex items-center mt-2.5 mb-5 jus">
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
          {stars}
        </div>
        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 ms-3">
          {rating}.0
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          Rp. {price.toLocaleString("id-ID")}
        </span>
        <Button
          onClick={() => handleAddCard(id)}
          classname="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300  text-sm px-5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Cart
        </Button>
      </div>
    </div>
  );
};

export const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-64 max-w-sm mx-5 my-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {children}
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
