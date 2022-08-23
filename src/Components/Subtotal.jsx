import React from "react";
import NumberFromat from "react-number-format";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Subtotal() {
	const navigate = useNavigate();
	const baskets = useSelector((state) => state.basket.basket_items);
	const subTotal = useSelector((state) => state.basket.subTotal);
	return (
		<div className='subtotal'>
			<NumberFromat
				value={subTotal}
				className='foo'
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
				decimalScale={2}
				renderText={(value, props) => (
					<div {...props}>
						<p>
							Subtotal ​({baskets.length} items): <strong>{value}</strong>
						</p>
						<br />
						<small className='subtotal_gift'>
							<input type='checkbox' name='' id='' />
							This order contain gift
						</small>
					</div>
				)}
			/>
			<button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
