import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { basketActions } from "../Stores/basketSlice";

function Product({ id, title, image, price, rating }) {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.basket.basket_items);
	function handleClick() {
		dispatch(
			basketActions.addToBasket({
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			})
		);
		console.log(data);
	}
	return (
		<div className='product'>
			<div className='product_info'>
				<p>{title}</p>
				<p className='product_price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='product_rating'>
					{Array(rating)
						.fill()
						.map((_, i) => {
							return <p key={i}>⭐</p>;
						})}
				</div>
			</div>
			<img src={image} alt='' />
			<button onClick={handleClick}>Add to Basket</button>
		</div>
	);
}

export default Product;
