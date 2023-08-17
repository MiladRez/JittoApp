import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
	const [cart, setCart] = useState(new Map());

	const addItemToCart = (item) => {
		// check if item exists in cart
		// if it does, increment quantity by 1
		let itemExists = false;
		Array.from(cart.keys()).map(k => {
			if (k.title === item.title) {
				setCart(new Map(cart.set(k, cart.get(k) + 1)))
				itemExists = true
			}
			return undefined;
		})

		// if item is not already in cart, add item as new addition
		if (!itemExists) {
			setCart(new Map(cart.set(item, 1)))
		}
	}

	const removeItemFromCart = (item) => {
		Array.from(cart.keys()).map(k => {
			if (k.title === item.title) {
				cart.delete(k)
			}
			return undefined;
		})

		setCart(new Map(cart))
	}

	const updateItemQuantity = (item, quantity) => {
		Array.from(cart.keys()).map(k => {
			if (k.title === item.title) {
				setCart(new Map(cart.set(k, cart.get(k) + quantity)))
			}
			return undefined;
		})
	}

	return (
		<CartContext.Provider value={{ cart, addItemToCart, updateItemQuantity, removeItemFromCart }}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	return useContext(CartContext);
}