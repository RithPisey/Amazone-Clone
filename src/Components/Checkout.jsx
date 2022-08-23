import React from "react";

import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

function Checkout() {
	const { basket_items, user } = useSelector((state) => state.basket);
	const username = user ? user.email.split("@", 1) : "Guest";

	const ticketNotVisibleState = {
		transform: "translateX(-100%)",
		opacity: 0.1,
	};
	return (
		<div className='checkout'>
			<div className='checkout_left'>
				<img
					className='checkout_ad'
					src='https://www.thedrive.com/content-b/message-editor/1602085359849-amazon_1.jpg?quality=60'
					alt=''
				/>
				<div>
					<h3>Hello, {username}</h3>
					<h2 className='checkout_title'>Your shopping Basket</h2>
				</div>

				<div>
					<FlipMove
						enterAnimation={{
							from: ticketNotVisibleState,
							to: {},
						}}
						leaveAnimation={{
							from: {},
							to: ticketNotVisibleState,
						}}
					>
						{basket_items.map((item, i) => (
							<div>
								<CheckoutProduct
									key={i}
									id={item.id}
									title={item.title}
									image={item.image}
									price={item.price}
									rating={item.rating}
								/>
							</div>
						))}
					</FlipMove>
				</div>
			</div>
			<div className='checkout_right'>
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
