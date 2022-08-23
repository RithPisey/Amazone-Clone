/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-spacing */
/* eslint-disable require-jsdoc */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable max-len */

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

// const stripe = require("@stripe/stripe-js")(newLocal);
const stripe = require("stripe")(
	"sk_test_51LSuU4Aqo4FlPkERkzkNl6fD2S6hs85ovrEDX7noJcEEdjQOxE7MjuJ4QG9HUjV09SZdRj95qSTPhM8M8TOEzpEe00rnmnPxlU"
);

// API

// App config
const app = express();
// Middlewares
app.use(cors());
app.use(express.json());
// API routes
app.get("/", (req, res) => {
	res.status(200).send("hello world");
});

app.post("/payments/create", (req, res) => {
	const total = req.query.total;

	console.log("Payment request recieved for this amount >>>", total);
	createStripe(res, total);
});

function createStripe(res, total) {
	const pi = stripe.paymentIntents
		.create({
			amount: total,
			currency: "usd",
		})
		.then((pi) => {
			console.log("Payment created $$$$ ", pi.client_secret);
			const cs = { clientSecret: pi.client_secret };
			res.status(201).send(cs);
			return pi;
		})
		.catch((error) => console.log(error.message));
}

// Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-aab9d/us-central1/api
