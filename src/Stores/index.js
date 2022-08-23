import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./basketSlice";

const store = configureStore({
	reducer: { basket: basketSlice.reducer },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [" basket/setUser"],
				ignoredActionPaths: ["payload"],
				ignoredPaths: ["basket.user"],
			},
		}),
});

export default store;
