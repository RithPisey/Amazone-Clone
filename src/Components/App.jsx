import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { uid } from "uid";
import { useEffect } from "react";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { basketActions } from "../Stores/basketSlice";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
	"pk_test_51LSuU4Aqo4FlPkERenyE4jj6w69FNxkDaj5vXXibaxPe659LwCuMsUN7gMx0xyaX2gF5f5Wv5BF4IMH9PTB67Sjk00eEUJ19CS"
);

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log("THE USER IS >>> ", authUser);
			if (authUser) {
				dispatch(basketActions.setUser(authUser));
			} else {
				dispatch(basketActions.setUser(null));
			}
		});
	}, [dispatch]);
	return (
		<BrowserRouter>
			<div className='App'>
				<Routes>
					<Route
						path='/'
						element={[<Header key={uid()} />, <Home key={uid()} />]}
					/>
					<Route
						path='/checkout'
						element={[<Header key={uid()} />, <Checkout key={uid()} />]}
					/>
					<Route path='/login' element={[<Login key={uid()} />]} />
					<Route
						path='/payment'
						element={[
							<Header key={uid()} />,
							<Elements key={uid()} stripe={promise}>
								<Payment key={uid()} />
							</Elements>,
						]}
					/>
					<Route
						path='/orders'
						element={
							<>
								<Header />
								<Orders />
							</>
						}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
