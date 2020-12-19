import { createStore,applyMiddleware } from "redux";
import rootReducer from "./reducer";
import thunk from 'redux-thunk'
// import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// export default createStore(rootReducer,applyMiddleware(thunk));
const persistConfig = {
    key: 'login',
    storage: storage,
    whitelist: ['login'] // which reducer want to store
  };
//   const pReducer = persistReducer(persistConfig, rootReducer);
  const middleware = applyMiddleware(thunk);
  const store = createStore(rootReducer, middleware);
//   const persistor = persistStore(store);
  export { store };
