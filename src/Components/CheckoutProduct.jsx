import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { basketActions } from "../Stores/basketSlice";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.basket.basket_items);
	function removeFromBasket() {
		dispatch(basketActions.removeFromBasket(id));
		console.log(data);
	}

	return (
		<div className='checkoutProduct'>
			<div className='checkoutProduct_Img'>
				<img className='checkoutProduct_image' src={image} alt='' />
			</div>

			<div className='checkoutProduct_info'>
				<p className='checkoutProduct_title'>{title}</p>
				<p className='checkoutProduct_price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='checkoutProduct_rating'>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>⭐</p>
						))}
				</div>

				{!hideButton && (
					<button onClick={removeFromBasket}>Remove from Basket </button>
				)}
			</div>
		</div>
	);
}

export default CheckoutProduct;
