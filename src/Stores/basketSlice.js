import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
	name: "basket",
	initialState: {
		basket_items: [],
		subTotal: 0,
		user: null,
	},
	reducers: {
		addToBasket(state, action) {
			state.basket_items = [...state.basket_items, action.payload];

			state.subTotal = state.basket_items?.reduce((amount, item) => {
				return item.price + amount;
			}, 0);
		},
		removeFromBasket(state, action) {
			const indexItem = state.basket_items.findIndex(
				(item) => item.id === action.payload
			);
			const newBasket = [...state.basket_items];
			if (indexItem >= 0) {
				newBasket.splice(indexItem, 1);
				state.basket_items = newBasket;

				state.subTotal = state.basket_items?.reduce((amount, item) => {
					return item.price + amount;
				}, 0);
			}
		},
		removeBasket(state) {
			state.basket_items = [];
		},
		setUser(state, action) {
			const auth = action.payload;
			state.user = auth;
		},
	},
});
export const basketActions = basketSlice.actions;
export default basketSlice;
