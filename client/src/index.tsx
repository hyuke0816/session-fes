import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider theme={{ mode: "light" }}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyles />
        <Root />
      </PersistGate>
    </Provider>
  </ThemeProvider>
);
