import React, {useEffect, useState} from "react";
import {Button} from "../../styles/Button.style";
import {Product} from "../interface/interfaces";
import {useCart} from "../../context/CartContext";
import {
    getPrice,
    numberOfItems,
    productName,
} from "../functions/cartFunctions";
import {motion} from "framer-motion";
import Link from "next/link";

const Cart = () => {
    const [value, setValue] = useState<Product[]>([]);
    const [count, setCount] = useState<number>(0);
    const [total, setTotal] = useState<string>();
    const {decrementItem, clearCart, incrementItem, openCart} = useCart();

    useEffect(() => {
        setValue(() => JSON.parse(window.localStorage.getItem("cart") || "[]"));
        setCount(() => numberOfItems(value));
        setTotal(() => getPrice(value));
    }, [value]);

    return (
        <div className="cart-container">
            <motion.div
                className="main"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.1, duration: 0.2}}
                viewport={{once: true}}>
                <motion.div
                    className="card"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.2, duration: 0.3}}
                    viewport={{once: true}}>
                    <div className="heading">
                        <div className="cartCount">
                            <p>{`Cart (${count})`}</p>
                        </div>
                        <div className="removeButton">
                            <button
                                onClick={() => {
                                    clearCart("value");
                                }}>
                                Remove All
                            </button>
                        </div>
                    </div>

                    {value.map((item: Product) => {
                        return (
                            <div key={item.id} className="center">
                                <div className="itemImg">
                                    <img src={item.categoryImage.mobile} alt=""/>
                                </div>
                                <div className="itemInfo">
                                    <p>{productName(item.name)}</p>
                                    <p>${item.price}</p>
                                </div>
                                <div className="counter">
                                    <Button
                                        onClick={() => {
                                            decrementItem(item);
                                        }}>
                                        -
                                    </Button>
                                    {item.quantity}{" "}
                                    <Button
                                        onClick={() => {
                                            incrementItem(item);
                                        }}>
                                        +
                                    </Button>
                                </div>
                            </div>
                        );
                    })}

                    <div className="bottom">
                        <div className="total">
                            <p>Total</p>
                            <p>${total}</p>
                        </div>
                        <div className="checkoutButton">
                            {value.length > 0 ? (
                                <Link href="/checkout">
                                    <button onClick={openCart}>
                                        <a>checkout</a>
                                    </button>
                                </Link>
                            ) : (
                                <button>
                                    <a>checkout</a>
                                </button>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Cart;
