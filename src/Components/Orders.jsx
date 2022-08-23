import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useSelector } from "react-redux";
import Order from "./Order";
import { uid } from "uid";
import { async } from "@firebase/util";

function Orders() {
	const [orders, setOrders] = useState([]);
	const { user } = useSelector((state) => state.basket);
	console.log(user?.uid);

	useEffect(() => {
		if (user) {
			getDataFromFireStore().then((value) => {
				setOrders(value.docs);
			});
		} else {
			setOrders([]);
		}
	}, [user]);

	console.log("this is orders >>>>> ", orders);
	// orders?.map((o) => console.log("?? this is in orders", o.data().created));

	async function getDataFromFireStore() {
		const querySnapshot = await getDocs(
			collection(db, "users", user?.uid, "orders")
		);
		return querySnapshot;
	}

	return (
		<div className='orders'>
			<h1>Your Orders</h1>
			<div className='orders_order'>
				{orders?.map((order) => (
					<Order key={uid()} order={order} />
				))}
			</div>
		</div>
	);
}

export default Orders;
