import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App.jsx";
import { HashRouter } from "react-router-dom";
import store from "@/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
// import { ThemeProvider } from '@emotion/react'
import "normalize.css";

import "@/assets/css/index.less";
import theme from "./assets/theme";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Provider store={store}>
      <Suspense fallback="loading">
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Suspense>
    </Provider>
  </HashRouter>
);
