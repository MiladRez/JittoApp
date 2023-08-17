import React from "react";

function CheckoutItem({img, title, price, desc, quantity, updateQuantity, removeFromCart}) {

	const item = {
		img, title, price, desc
	}

	// decrement quantity count
	const handleDecrementQuantity = () => {
		// ensure quantity doesn't go below 1
		if (quantity > 1) {
			updateQuantity(item, -1)
		} else {
			alert("Can't decrement below 1.");
		}
	}

	// incremenet quantity count
	const handleIncrementQuantity = () => {
		// set an item limit of 10
		if (quantity < 10) {
			updateQuantity(item, 1)
		} else {
			alert("Reached item limit.");
		}
	}

	// remove item
	const handleItemDeletion = () => {
		removeFromCart(item)
	}

	return (
		<div className="flex justify-between px-8 py-8">
			<div className="flex">
				<img src={img} className="w-32" alt="product"/>
				<div className="flex flex-col justify-center px-6">
					<h1>{title}</h1>
					<h2>{price}</h2>
					<p className="pt-2 text-sm">{desc}</p>
					<div className="flex pt-4 select-none">
						<h2 className="pr-2">Quantity: </h2>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1.5 -1.5 28 28" fill="currentColor" className="w-6 h-6.5 border border-black border-r-0 rounded-l cursor-pointer" onClick={handleDecrementQuantity}>
							<path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
						</svg>
						<input type="number" value={quantity} className="border border-black w-7 focus:outline-none text-center" />
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1.5 -1.5 28 28" fill="currentColor" className="w-6 h-6.5 border border-black border-l-0 rounded-r cursor-pointer" onClick={handleIncrementQuantity}>
							<path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
						</svg>
					</div>
				</div>
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 cursor-pointer select-none" onClick={handleItemDeletion}>
				<path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
			</svg>
		</div>
	)
}

export default CheckoutItem;