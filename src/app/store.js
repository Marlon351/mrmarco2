import { configureStore } from "@reduxjs/toolkit";
import menuTypeReducer from "../features/items/menuTypeSlice";

const store = configureStore({
    reducer: {
        menuTypes: menuTypeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
