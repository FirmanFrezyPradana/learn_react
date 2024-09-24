import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useTotalPrice, useTotalPriceDispatch } from '../../context/TotalPriceContext';

export const TableCart = (props) => {
    const { products } = props;
    const cart = useSelector((state) => state.cart.data)
    const totalPriceRef = useRef(null);
    const dispatch = useTotalPriceDispatch();
    const { total } = useTotalPrice();

    console.log(total);

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
            dispatch({
                type: "UPDATE",
                payload: {
                    total: sum,
                }
            })
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, products]);

    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "table-row";
        } else {
            totalPriceRef.current.style.display = "none";
        }
    }, [cart]);
    return (
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
                        {total.toLocaleString("id-ID")}
                    </th>
                </tr>
            </tbody>
        </table>
    )
}
