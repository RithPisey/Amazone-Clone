import React from "react";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import { uid } from "uid";
import NumberFormat from "react-number-format";
function Order({ order }) {
	return (
		<div className='order'>
			<h2>Ordered: </h2>
			<p>{moment.unix(order.data().created).format("MMMM Do YYYY, h:mma")}</p>
			<p className='order_id'>
				<small>{order.id}</small>
			</p>
			{order.data().basket?.map((item) => (
				<CheckoutProduct
					key={uid()}
					id={item.id}
					title={item.title}
					image={item.image}
					price={item.price}
					rating={item.rating}
					hideButton
				/>
			))}

			<NumberFormat
				value={order.data().amount / 100}
				className='foo'
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
				decimalScale={2}
				renderText={(value, props) => (
					<h3 className='order_total'>Order Total: {value}</h3>
				)}
			/>
		</div>
	);
}

export default Order;
