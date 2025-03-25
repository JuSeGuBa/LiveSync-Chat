import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Usa localStorage
import { combineReducers } from "redux";
import userReducer from "./slices/userslices"; // Crea un slice para manejar usuarios

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: persistReducer(persistConfig, userReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// const rootReducer = combineReducers({
//     user: persistReducer(persistConfig, userReducer),
//   });
