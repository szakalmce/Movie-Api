import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./Styles/globalStyles";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <GlobalStyles />
    <App />
  </Router>
);
