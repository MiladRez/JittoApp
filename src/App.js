import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./components/CartContext";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
	return (
		<>
			<CartProvider>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/products" element={
						<ProtectedRoute>
							<Products />
						</ProtectedRoute>
					} />
					<Route path="/checkout" element={
						<ProtectedRoute>
							<Checkout />
						</ProtectedRoute>
					} />
				</Routes>
			</CartProvider>
		</>
	)
}

export default App;