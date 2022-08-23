import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import NumberFromat from "react-number-format";
import { basketActions } from "../Stores/basketSlice";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

function Payment() {
	const { basket_items, user, subTotal } = useSelector((state) => state.basket);
	const dispatch = useDispatch();
	const email = user ? user.email : "";
	const username = user ? user.email.split("@", 1) : "Guest";
	const navigate = useNavigate();

	//import stripe
	const stripe = useStripe();
	const elements = useElements();
	//--------------------------------------------
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");
	const [clientSecret, setClientSecret] = useState(true);
	useEffect(() => {
		const getClientSecret = async () => {
			try {
				const response = await fetch(
					`https://us-central1-clone-aab9d.cloudfunctions.net/api/payments/create?total=${
						subTotal * 100
					}`,
					{
						method: "POST",
					}
				).then((response) => response.json());

				setClientSecret(response.clientSecret);
			} catch (error) {
				console.log("error >>>>>", error.message);
			}
		};

		getClientSecret();
	}, [basket_items, subTotal]);

	console.log("The Secret is >>> ", clientSecret);

	async function handleSubmit(e) {
		e.preventDefault();
		setProcessing(true);

		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				const userDoc = doc(db, "users", user?.uid, "orders", paymentIntent.id);

				setDoc(userDoc, {
					basket: basket_items,
					amount: paymentIntent.amount,
					created: paymentIntent.created,
				});

				setSucceeded(true);
				setError(null);
				setProcessing(false);
				dispatch(basketActions.removeBasket());
				navigate("/orders");
			});
	}
	function handleChange(e) {
		setDisabled(e.empty);
		setError(e.error ? e.error.message : "");
	}

	return (
		<div className='payment'>
			<div className='payment_container'>
				<h1>
					Checkout (
					<Link style={{ textDecoration: "none" }} to='/checkout'>
						{basket_items?.length} <small>items</small>
					</Link>
					)
				</h1>
				<div className='payment_section'>
					<div className='payment_title'>
						<h3>Delivery Address</h3>
					</div>
					<div className='payment_address'>
						<p>Email: {email}</p>
						<p> Deliver to: {username}</p>
						<p>123 React Land</p>
						<p>Cambodia, PP</p>
					</div>
				</div>
				<div className='payment_section'>
					<div className='payment_title'>
						<h3>Review items and delivery</h3>
					</div>
					<div className='payment_items'>
						{basket_items.map((item, i) => (
							<CheckoutProduct
								key={i}
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				<div className='payment_section'>
					<div className='payment_title'>
						<h3>Payment Method</h3>
					</div>
					<div className='payment_details'>
						<form onSubmit={handleSubmit} action=''>
							<CardElement onChange={handleChange} />
							<div className='payment_priceContainer'>
								<NumberFromat
									value={subTotal}
									className='foo'
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
									decimalScale={3}
									renderText={(value, props) => <h3>Order Total: {value}</h3>}
								/>
								<button disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
								</button>
							</div>
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
