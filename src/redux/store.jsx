// import { createStore } from "redux";
// import rootReducer from "./reducer";

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Enable Redux DevTools
// );

// export default store;

import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default is localStorage
import rootReducer from "./reducer"; // import your reducers

// Set up Redux Persist configuration
const persistConfig = {
  key: "root",
  storage, // uses localStorage by default
  whitelist: ["userData"], // Only persist userData
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with persisted reducer
const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ); // Enable Redux DevTools

// Persistor for Redux Persist
const persistor = persistStore(store);

export { store, persistor };

