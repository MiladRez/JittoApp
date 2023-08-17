import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import CrewNeckTShirt from "../images/products/crew-neck-tshirt.jpg";
import VNeckTShirt from "../images/products/v-neck-tshirt.jpg";
import CargoJoggers from "../images/products/cargo-joggers.jpg";
import LooseSweatpants from "../images/products/sweatpants.jpg";
import PlaidFlannel from "../images/products/plaid-flannel.jpg";
import PrintedHoodie from "../images/products/printed-hoodie.jpg";
import ShoppingCart from "../images/products/shopping-cart.png";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";

const products_list = [
	{
		img: CrewNeckTShirt,
		title: "Crew-neck T-shirt - White",
		price: "$15.99",
		desc: "A regular-fit T-shirt in soft cotton jersey. Ribbed crew neck and straight-cut hem."
	},
	{
		img: VNeckTShirt,
		title: "V-neck T-shirt - Black",
		price: "$12.99",
		desc: "A casual relaxed fit T-shirt in 100% cotton. Straight-cut hem with short sleeves."
	},
	{
		img: CargoJoggers,
		title: "Cargo Joggers - Black",
		price: "$34.99",
		desc: "Skinny-fit joggers in cotton twill. Elasticized, drawstring waistband with side pockets."
	},
	{
		img: LooseSweatpants,
		title: "Loose Sweatpants - Grey",
		price: "$24.99",
		desc: "Fitted sweatpants in a relaxed style. Elastic drawstring waistband with side pockets."
	},
	{
		img: PlaidFlannel,
		title: "Plaid Flannel - Charcoal",
		price: "$29.99",
		desc: "Relaxed-fit plaid shirt in soft cotton twill. Turn-down collar with open chest pockets."
	},
	{
		img: PrintedHoodie,
		title: "Printed Hoodie - NASA",
		price: "$39.99",
		desc: "Regular-fit NASA hoodie in cotten-blend fabric. Double-layered drawstring hood."
	},
]

function Products() {

	const { cart, addItemToCart } = useCart();
	const navigate = useNavigate();

	const addToCart = (item) => {
		addItemToCart(item)
	}

	useEffect(() => {
		console.log("Cart has been updated.")
	}, [cart])

	return (
		<div className="">
			<Navbar />
			<div className="mx-10 my-10">
				<div className="flex justify-between mx-6">
					<h1 className="text-4xl font-thin py-12 uppercase"><span className="font-bold pr-1">Men's</span> Wear</h1>
					<img src={ShoppingCart} alt="shopping cart icon" className="w-8 h-8 self-center mr-4 cursor-pointer" onClick={() => navigate("/checkout")}/>
				</div>
				<div className="grid grid-cols-3 gap-4 gap-y-16">
					{products_list.map((product, index) => (
						<Product key={index} img={product.img} title={product.title} price={product.price} desc={product.desc} addToCart={addToCart} />
					)) }
				</div>
			</div>	
		</div>
	)
}

export default Products;