import React from "react";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Header() {
	const navigate = useNavigate();
	const basketItems = useSelector((state) => state.basket.basket_items);
	const user = useSelector((state) => state.basket.user);
	const username = user ? user.email : "guest";
	function handleAuthentication() {
		if (user) {
			auth.signOut();
			navigate("/");
		} else {
			navigate("/login");
		}
	}
	return (
		<div className='header'>
			<Link to='/'>
				<img
					className='header_logo'
					src='https://th.bing.com/th/id/R.06265b833a2adaed4abb56029eb0085f?rik=r80PsQ1qeYyyNQ&pid=ImgRaw&r=0'
					alt='amazone logo'
				/>
			</Link>
			<div className='header_search'>
				<input className='header_searchInput' type='text'></input>
				<SearchIcon className='header_searchIcon' />
			</div>
			<div className='header_nav'>
				<Link style={{ textDecoration: "none" }} to={!user && "/login"}>
					<div onClick={handleAuthentication} className='header_option'>
						<span className='header_optionLineOne'>
							Hello {username.split("@", 1)}
						</span>
						<span className='header_optionLineTwo'>
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>
				<Link to='/orders'>
					<div className='header_option'>
						<span className='header_optionLineOne'>Returns</span>
						<span className='header_optionLineTwo'>& Order</span>
					</div>
				</Link>

				<div className='header_option'>
					<span className='header_optionLineOne'>Your</span>
					<span className='header_optionLineTwo'>Prime</span>
				</div>
				<Link to='/checkout'>
					<div className='header_optionBasket'>
						<ShoppingBasketIcon />
						<span className='header_optionLineTwo header_basketCount'>
							{basketItems?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
