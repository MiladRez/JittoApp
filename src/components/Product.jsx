import React from "react";

function Product({ img, title, price, desc, addToCart }) {
	
	const handleAddToCart = () => {
		const item = {
			img, title, price, desc
		}

		addToCart(item);
	}

	return (
		<div className="flex justify-center">
			<div className="w-96">
				<img src={img} alt="product" className="w-96" />
				<div className="flex">
					<div className="w-4/5 pt-4">
						<h1>
							{title}
						</h1>
						<h2>
							{price}
						</h2>
						<p className="text-sm pt-2">
							{desc}
						</p>	
					</div>
					<div className="w-1/5 pt-4">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 float-right mx-3 hover:scale-[1.3] hover:rotate-90 transition duration-300 cursor-pointer" onClick={handleAddToCart}>
							<path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product;