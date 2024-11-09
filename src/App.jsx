import { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// import './App.css'
import routes from "@/router";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import { memo } from "react";
import { useLocation } from "react-router-dom";
import { useScrollTop } from "./hooks";

const App = memo(() => {
  useScrollTop();

  return (
    <div className="app">
      <AppHeader></AppHeader>
      <div className="page">{useRoutes(routes)}</div>
      <AppFooter />
    </div>
  );
});

export default App;
