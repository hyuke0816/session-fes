import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer, rootSaga } from "./root";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer as any);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(sagaMiddleware);

    if (process.env.NODE_ENV === "development") {
      middleware.push(logger);
    }

    return middleware;
  },
});

export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
