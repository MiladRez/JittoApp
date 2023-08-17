import React from "react";
import JittoLogo from "../images/login/jitto-logo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {

	const navigate = useNavigate();

	const handleSignOut = () => {
		// clear JWT token to remove access to page
		localStorage.clear();
		// redirect back to login page
		navigate("/", { replace: true });
	}

	return (
		<nav className="flex justify-between mx-16">
			<img src={JittoLogo} alt="logo" className="w-44 py-4 cursor-pointer" onClick={() => navigate("/products")}/>
			<button className="self-center h-fit bg-primary px-6 py-3 rounded text-white shadow-lg hover:bg-purple-900" onClick={handleSignOut}>
				Sign Out
			</button>
		</nav>
	)
}

export default Navbar;