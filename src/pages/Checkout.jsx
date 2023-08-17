import React, { useEffect } from "react";
import CheckoutItem from "../components/CheckoutItem";
import { useCart } from "../components/CartContext";
import Navbar from "../components/Navbar";

function Checkout() {

	const { cart, updateItemQuantity, removeItemFromCart } = useCart();

	const updateQuantity = (item, quantity) => {
		updateItemQuantity(item, quantity)
	}

	const removeFromCart = (item) => {
		removeItemFromCart(item)
	}

	useEffect(() => {
		console.log("Cart has been updated: ", cart)
	}, [cart])

	return (
		<div className="">	
			<Navbar />
			<div className="flex flex-col mx-10 border">
				{Array.from(cart.keys()).map((item, index) => (
					<CheckoutItem key={index} img={item.img} title={item.title} price={item.price} desc={item.desc} quantity={cart.get(item)} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
				))}
			</div>
			<div className="flex justify-center my-12">
				<button className="bg-primary text-white px-12 py-3 rounded">Checkout</button>
			</div>
		</div>
	)
}

export default Checkout;